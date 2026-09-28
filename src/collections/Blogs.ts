import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { isLoggedIn } from '../access/isLoggedIn'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  orderable: true,
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'updatedAt'],
    description: 'Drag the handle in the list view to change the order blogs appear on the site.',
  },
  defaultSort: '_order',
  access: {
    read: () => true,
    create: isLoggedIn,
    update: isLoggedIn,
    delete: isLoggedIn,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slugField({
      useAsSlug: 'title',
    }),
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Short excerpt shown on blog cards and listing pages.',
      },
    },
    {
      name: 'longDescription',
      type: 'richText',
      editor: lexicalEditor(),
      required: true,
      admin: {
        description: 'Full article body — supports bold text, paragraphs, and bullet points.',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'relatedBlogs',
      type: 'relationship',
      relationTo: 'blogs',
      hasMany: true,
      filterOptions: ({ id }) => {
        if (!id) return true
        return {
          id: { not_equals: id },
        }
      },
      validate: (value) => {
        if (Array.isArray(value) && value.length > 3) {
          return 'You can add a maximum of 3 related blogs'
        }
        return true
      },
      admin: {
        description: 'Choose up to 3 related blogs to show at the end of this article.',
      },
    },
    {
      name: 'readTime',
      type: 'text',
      admin: {
        placeholder: 'e.g. 4 min read',
        position: 'sidebar',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Show this post as the featured post on the Blog page.',
      },
    },
    {
      type: 'collapsible',
      label: 'SEO',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
        },
      ],
    },
  ],
  timestamps: true,
}
