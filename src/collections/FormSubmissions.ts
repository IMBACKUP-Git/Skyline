import type { CollectionConfig } from 'payload'

import { isLoggedIn } from '../access/isLoggedIn'
import { sendFormSubmissionEmail } from '../hooks/sendFormSubmissionEmail'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  admin: {
    useAsTitle: 'firstName',
    defaultColumns: ['firstName', 'lastName', 'mobile', 'email', 'source', 'createdAt'],
  },
  defaultSort: '-createdAt',
  access: {
    read: isLoggedIn,
    create: () => false,
    update: isLoggedIn,
    delete: isLoggedIn,
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'mobile',
      type: 'text',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
    },
    {
      name: 'source',
      type: 'select',
      required: true,
      defaultValue: 'contact-page',
      options: [
        { label: 'Contact Page', value: 'contact-page' },
        { label: 'Popup', value: 'popup' },
      ],
    },
    {
      name: 'emailSent',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    afterChange: [sendFormSubmissionEmail],
  },
  timestamps: true,
}
