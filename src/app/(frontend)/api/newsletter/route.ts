import { NextResponse } from 'next/server'
import { getPayload } from 'payload'

import config from '@/payload.config'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const email = typeof data?.email === 'string' ? data.email.trim().toLowerCase() : ''

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: 'A valid email address is required',
        },
        { status: 400 },
      )
    }

    const payload = await getPayload({ config })

    const existing = await payload.find({
      collection: 'newsletter',
      where: { email: { equals: email } },
      limit: 1,
      depth: 0,
    })

    if (existing.docs.length === 0) {
      try {
        await payload.create({
          collection: 'newsletter',
          data: { email },
        })
      } catch (error) {
        // Duplicate email race condition — already subscribed, treat as success.
        console.warn('Newsletter create skipped (likely duplicate):', error)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter submission error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to subscribe',
      },
      { status: 500 },
    )
  }
}
