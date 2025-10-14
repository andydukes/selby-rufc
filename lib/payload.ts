import type { Match, Sponsor, Media, Player } from '@/payload-types'

const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'

/**
 * Fetches today's match from Payload CMS
 * Finds the first match scheduled for today or in the near future
 */
export async function getTodaysMatch(): Promise<Match | null> {
  try {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const response = await fetch(
      `${PAYLOAD_API_URL}/api/matches?where[kickOffTime][greater_than_equal]=${today.toISOString()}&sort=kickOffTime&limit=1&depth=2`,
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds for near-real-time updates
      }
    )

    if (!response.ok) {
      console.error('Failed to fetch match:', response.statusText)
      return null
    }

    const data = await response.json()

    if (data.docs && data.docs.length > 0) {
      return data.docs[0] as Match
    }

    return null
  } catch (error) {
    console.error('Error fetching today\'s match:', error)
    return null
  }
}

/**
 * Fetches all active club sponsors from Payload CMS
 * Returns sponsors sorted by displayOrder
 */
export async function getClubSponsors(): Promise<Sponsor[]> {
  try {
    const response = await fetch(
      `${PAYLOAD_API_URL}/api/sponsors?where[type][equals]=club&where[active][equals]=true&sort=displayOrder&depth=2`,
      {
        next: { revalidate: 300 }, // Revalidate every 5 minutes
      }
    )

    if (!response.ok) {
      console.error('Failed to fetch sponsors:', response.statusText)
      return []
    }

    const data = await response.json()
    return (data.docs || []) as Sponsor[]
  } catch (error) {
    console.error('Error fetching club sponsors:', error)
    return []
  }
}

/**
 * Fetches all active sponsors from Payload CMS grouped by type
 * Returns sponsors sorted by displayOrder within each type
 */
export async function getAllSponsors(): Promise<{
  club: Sponsor[]
  team: Sponsor[]
  player: Sponsor[]
}> {
  try {
    const response = await fetch(
      `${PAYLOAD_API_URL}/api/sponsors?where[active][equals]=true&sort=displayOrder&depth=2`,
      {
        next: { revalidate: 300 }, // Revalidate every 5 minutes
      }
    )

    if (!response.ok) {
      console.error('Failed to fetch sponsors:', response.statusText)
      return { club: [], team: [], player: [] }
    }

    const data = await response.json()
    const sponsors = (data.docs || []) as Sponsor[]

    // Group sponsors by type
    const grouped = {
      club: sponsors.filter((s) => s.type === 'club'),
      team: sponsors.filter((s) => s.type === 'team'),
      player: sponsors.filter((s) => s.type === 'player'),
    }

    return grouped
  } catch (error) {
    console.error('Error fetching all sponsors:', error)
    return { club: [], team: [], player: [] }
  }
}

/**
 * Fetches a single player by ID from Payload CMS
 * Returns full player details with depth=2 to populate relationships
 */
export async function getPlayer(id: string): Promise<Player | null> {
  try {
    const response = await fetch(
      `${PAYLOAD_API_URL}/api/players/${id}?depth=2`,
      {
        next: { revalidate: 300 }, // Revalidate every 5 minutes
      }
    )

    if (!response.ok) {
      console.error('Failed to fetch player:', response.statusText)
      return null
    }

    const data = await response.json()
    return data as Player
  } catch (error) {
    console.error('Error fetching player:', error)
    return null
  }
}

/**
 * Helper to get the URL from a Media object or string ID
 */
export function getMediaUrl(media: string | Media | null | undefined): string | null {
  if (!media) return null

  if (typeof media === 'string') {
    // If it's just an ID string, we can't get the URL without another fetch
    return null
  }

  return media.url || null
}

/**
 * Helper to format kick-off time
 */
export function formatKickOffTime(kickOffTime: string): string {
  const date = new Date(kickOffTime)
  return date.toLocaleTimeString('en-GB', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
}

/**
 * Helper to format match date
 */
export function formatMatchDate(kickOffTime: string): string {
  const date = new Date(kickOffTime)
  return date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
}
