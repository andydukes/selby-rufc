import type { CollectionConfig } from 'payload'

export const Content: CollectionConfig = {
  slug: 'content',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'section', 'publishedDate'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      label: 'Slug',
      unique: true,
      admin: {
        description: 'URL-friendly identifier (e.g., "chairmans-welcome")',
      },
    },
    {
      name: 'section',
      type: 'select',
      required: true,
      options: [
        { label: "Chairman's Welcome", value: 'chairmans-welcome' },
        { label: 'Juniors Update', value: 'juniors-update' },
        { label: 'Club News', value: 'club-news' },
        { label: 'Community', value: 'community' },
        { label: 'General', value: 'general' },
      ],
    },
    {
      name: 'body',
      type: 'richText',
      required: true,
      label: 'Content',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Excerpt',
      admin: {
        description: 'Short summary for previews',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Featured Image',
    },
    {
      name: 'author',
      type: 'text',
      label: 'Author',
      defaultValue: 'Selby RUFC',
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: 'Published Date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
  ],
}
