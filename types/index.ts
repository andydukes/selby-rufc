// Core type definitions for Selby Rugby App

export interface Team {
  id: string
  name: string
  category: 'mens' | 'ladies' | 'juniors'
  ageGroup?: string
  logoUrl?: string
}

export interface Player {
  id: string
  teamId: string
  name: string
  number: number
  position: string
  photoUrl?: string
  bio?: string
  stats?: Record<string, any>
  socialLinks?: SocialLinks
  sponsorId?: string
}

export interface Match {
  id: string
  teamId: string
  opponent: string
  kickOffTime: string
  groundInfo: string
  weather?: string
  teamSheet: string[] // array of player IDs
  status: 'scheduled' | 'live' | 'completed'
}

export interface Sponsor {
  id: string
  name: string
  logoUrl: string
  adJpegUrl: string
  type: 'club' | 'player'
  linkedPlayerId?: string
}

export interface Content {
  id: string
  slug: string
  title: string
  body: string
  section: 'club' | 'community'
  publishedDate: string
}

export interface SocialLinks {
  twitter?: string
  instagram?: string
  facebook?: string
}
