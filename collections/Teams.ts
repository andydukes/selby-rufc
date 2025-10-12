import type { CollectionConfig } from 'payload'

export const Teams: CollectionConfig = {
  slug: 'teams',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'ageGroup'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Team Name',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: "Men's", value: 'mens' },
        { label: "Ladies", value: 'ladies' },
        { label: 'Junior Girls', value: 'junior-girls' },
        { label: 'Junior Boys', value: 'junior-boys' },
      ],
    },
    {
      name: 'ageGroup',
      type: 'text',
      label: 'Age Group',
      admin: {
        description: 'e.g., U12, U14, U16, 1st XV, 2nd XV',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Team Logo',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Team Description',
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      label: 'Active Team',
    },
  ],
}
