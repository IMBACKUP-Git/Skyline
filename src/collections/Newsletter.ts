import type { CollectionConfig } from 'payload'

import { isLoggedIn } from '../access/isLoggedIn'

export const Newsletter: CollectionConfig = {
  slug: 'newsletter',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'createdAt'],
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
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
      index: true,
    },
  ],
  timestamps: true,
}
