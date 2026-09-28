import type { CollectionAfterChangeHook } from 'payload'
import { BrevoClient } from '@getbrevo/brevo'

export const sendFormSubmissionEmail: CollectionAfterChangeHook = async ({
  doc,
  operation,
  req,
  context,
}) => {
  if (operation !== 'create' || context.skipEmailHook) {
    return doc
  }

  const adminEmail = process.env.ADMIN_EMAIL

  if (!adminEmail) {
    console.warn('ADMIN_EMAIL is not set — skipping form submission notification email.')
    return doc
  }

  try {
    const brevo = new BrevoClient({
      apiKey: process.env.BREVO_API_KEY!,
    })

    const sourceLabel = doc.source === 'popup' ? 'Popup form' : 'Contact page'

    await brevo.transactionalEmails.sendTransacEmail({
      sender: {
        name: 'Skyline',
        email: 'veer@integramagna.com',
      },
      to: [
        {
          name: 'Admin',
          email: adminEmail,
        },
      ],
      replyTo: doc.email
        ? {
            name: `${doc.firstName ?? ''} ${doc.lastName ?? ''}`.trim() || 'Skyline visitor',
            email: doc.email,
          }
        : undefined,
      subject: `New Website Enquiry - Skyline (${sourceLabel})`,
      htmlContent: `
        <h2>New Website Enquiry</h2>

        <p><strong>Source:</strong> ${sourceLabel}</p>
        <p><strong>First Name:</strong> ${doc.firstName ?? ''}</p>
        <p><strong>Last Name:</strong> ${doc.lastName ?? ''}</p>
        <p><strong>Email:</strong> ${doc.email ?? ''}</p>
        <p><strong>Mobile:</strong> ${doc.mobile ?? ''}</p>
        <p><strong>Message:</strong> ${doc.message ?? ''}</p>
      `,
    })

    await req.payload.update({
      collection: 'form-submissions',
      id: doc.id,
      data: { emailSent: true },
      context: { skipEmailHook: true },
      req,
      depth: 0,
    })
  } catch (error) {
    console.error('Failed to send form submission notification email:', error)
  }

  return doc
}
