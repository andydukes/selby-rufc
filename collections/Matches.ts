import type { CollectionConfig } from 'payload'

export const Matches: CollectionConfig = {
  slug: 'matches',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'team', 'kickOffTime', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Match Title',
      admin: {
        description: 'e.g., "Selby RUFC vs Yorkshire Vikings"',
      },
    },
    {
      name: 'team',
      type: 'relationship',
      relationTo: 'teams',
      required: true,
      label: 'Home Team',
    },
    {
      name: 'opponent',
      type: 'text',
      required: true,
      label: 'Opponent Team',
    },
    {
      name: 'kickOffTime',
      type: 'date',
      required: true,
      label: 'Kick-off Date & Time',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'groundInfo',
      type: 'text',
      label: 'Ground Information',
      defaultValue: 'Sandhill Lane',
    },
    {
      name: 'weather',
      type: 'text',
      label: 'Weather',
      admin: {
        description: 'e.g., "Sunny, 15°C"',
      },
    },
    {
      name: 'teamSheet',
      type: 'array',
      label: 'Team Sheet',
      fields: [
        {
          name: 'player',
          type: 'relationship',
          relationTo: 'players',
          required: true,
        },
        {
          name: 'position',
          type: 'select',
          required: true,
          options: [
            { label: 'Starting 15', value: 'starting' },
            { label: 'Substitutes', value: 'substitute' },
          ],
        },
        {
          name: 'jerseyNumber',
          type: 'number',
          label: 'Jersey Number',
          min: 1,
          max: 23,
        },
      ],
    },
    {
      name: 'score',
      type: 'group',
      label: 'Score',
      fields: [
        {
          name: 'home',
          type: 'number',
          label: 'Home Score',
          defaultValue: 0,
        },
        {
          name: 'away',
          type: 'number',
          label: 'Away Score',
          defaultValue: 0,
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'scheduled',
      options: [
        { label: 'Scheduled', value: 'scheduled' },
        { label: 'Live', value: 'live' },
        { label: 'Half-time', value: 'halftime' },
        { label: 'Full-time', value: 'fulltime' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
    },
    {
      name: 'events',
      type: 'array',
      label: 'Match Events',
      admin: {
        description: 'Live updates during the match',
      },
      fields: [
        {
          name: 'time',
          type: 'number',
          label: 'Minute',
          required: true,
        },
        {
          name: 'type',
          type: 'select',
          required: true,
          options: [
            { label: 'Try', value: 'try' },
            { label: 'Conversion', value: 'conversion' },
            { label: 'Penalty', value: 'penalty' },
            { label: 'Yellow Card', value: 'yellow-card' },
            { label: 'Red Card', value: 'red-card' },
            { label: 'Substitution', value: 'substitution' },
            { label: 'Other', value: 'other' },
          ],
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
