import type { CollectionConfig } from 'payload'

export const Players: CollectionConfig = {
  slug: 'players',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'number', 'team', 'position'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Player Name',
    },
    {
      name: 'number',
      type: 'number',
      required: true,
      label: 'Jersey Number',
      min: 0,
      max: 99,
    },
    {
      name: 'team',
      type: 'relationship',
      relationTo: 'teams',
      required: true,
      label: 'Team',
    },
    {
      name: 'position',
      type: 'select',
      required: true,
      options: [
        { label: 'Loose-head Prop', value: 'loose-head-prop' },
        { label: 'Hooker', value: 'hooker' },
        { label: 'Tight-head Prop', value: 'tight-head-prop' },        
        { label: 'Second-Row', value: 'second-row' },
        { label: 'Blindside-Flanker', value: 'blindside-flanker' },
        { label: 'Outside-Flanker', value: 'outside-flanker' },
        { label: 'Number 8', value: 'number-8' },
        { label: 'Scrum-half', value: 'scrum-half' },
        { label: 'Fly-half', value: 'fly-half' },
        { label: 'Inside-Centre', value: 'inside-centre' },
        { label: 'Outside-Centre', value: 'outside-centre' },        
        { label: 'Left-Wing', value: 'left-wing' },
        { label: 'Right-Wing', value: 'right-wing' },
        { label: 'Manager', value: 'manager' },
        { label: 'Coach', value: 'coach' },
        { label: 'Assistant-Coach', value: 'assistant-coach'},
        { label: 'Physio', value: 'physio'},     
        { label: 'Not-Specified', value: 'not-specified'},
      ],
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Player Photo',
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Biography',
    },
    {
      name: 'stats',
      type: 'group',
      label: 'Statistics',
      fields: [
        {
          name: 'appearances',
          type: 'number',
          label: 'Appearances',
          defaultValue: 0,
        },
        {
          name: 'tries',
          type: 'number',
          label: 'Tries',
          defaultValue: 0,
        },
        {
          name: 'conversions',
          type: 'number',
          label: 'Conversions',
          defaultValue: 0,
        },
        {
          name: 'penalties',
          type: 'number',
          label: 'Penalties',
          defaultValue: 0,
        },
        {
          name: 'points',
          type: 'number',
          label: 'Total Points',
          defaultValue: 0,
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'group',
      label: 'Social Media Links',
      fields: [
        {
          name: 'twitter',
          type: 'text',
          label: 'Twitter/X Handle',
        },
        {
          name: 'instagram',
          type: 'text',
          label: 'Instagram Handle',
        },
      ],
    },
    {
      name: 'sponsor',
      type: 'relationship',
      relationTo: 'sponsors',
      label: 'Player Sponsor',
      admin: {
        description: 'Individual sponsor for this player',
      },
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      label: 'Active Player',
    },
  ],
}
