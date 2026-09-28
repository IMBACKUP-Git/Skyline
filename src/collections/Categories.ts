import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

import { isLoggedIn } from '../access/isLoggedIn'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug'],
  },
  access: {
    read: () => true,
    create: isLoggedIn,
    update: isLoggedIn,
    delete: isLoggedIn,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    slugField({
      name: 'slug',
      useAsSlug: 'name',
    }),
  ],
  timestamps: true,
}
