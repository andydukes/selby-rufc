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
        { label: 'Player Sponsor', value: 'player' },
        { label: 'Team Sponsor', value: 'team' },
        { label: 'Club Sponsor', value: 'club' },
      ],
      admin: {
        description: 'Player sponsors support individuals, Team sponsors support specific teams, Club sponsors support the whole club',
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
      name: 'linkedTeam',
      type: 'relationship',
      relationTo: 'teams',
      label: 'Linked Team',
      admin: {
        description: 'For team sponsors only - which team does this sponsor support?',
        condition: (data) => data.type === 'team',
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
