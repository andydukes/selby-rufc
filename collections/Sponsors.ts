import type { CollectionConfig } from 'payload'

export const Sponsors: CollectionConfig = {
  slug: 'sponsors',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'active'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Sponsor Name',
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Club Sponsor', value: 'club' },
        { label: 'Player Sponsor', value: 'player' },
      ],
      admin: {
        description: 'Club sponsors appear in carousel, player sponsors appear on individual player cards',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Sponsor Logo',
      admin: {
        description: 'Logo for carousel and player cards',
      },
    },
    {
      name: 'advertisement',
      type: 'upload',
      relationTo: 'media',
      label: 'Full-Page Advertisement',
      admin: {
        description: 'Full-page JPEG that opens when logo is clicked',
      },
    },
    {
      name: 'website',
      type: 'text',
      label: 'Website URL',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'linkedPlayer',
      type: 'relationship',
      relationTo: 'players',
      label: 'Linked Player',
      admin: {
        description: 'For player sponsors only - which player does this sponsor support?',
        condition: (data) => data.type === 'player',
      },
    },
    {
      name: 'displayOrder',
      type: 'number',
      label: 'Display Order',
      defaultValue: 0,
      admin: {
        description: 'Lower numbers appear first in carousel',
      },
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      label: 'Active Sponsor',
    },
  ],
}
