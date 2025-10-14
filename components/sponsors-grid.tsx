'use client'

import { useState } from 'react'
import type { Sponsor } from '@/payload-types'
import { SponsorCard } from './sponsor-card'
import { SponsorAdModal } from './sponsor-ad-modal'
import { SectionHeader } from './section-header'

interface SponsorsGridProps {
  sponsors: {
    club: Sponsor[]
    team: Sponsor[]
    player: Sponsor[]
  }
}

export function SponsorsGrid({ sponsors }: SponsorsGridProps) {
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null)

  const handleSponsorClick = (sponsor: Sponsor) => {
    // Only open modal if sponsor has an advertisement or description
    if (sponsor.advertisement || sponsor.description) {
      setSelectedSponsor(sponsor)
    } else if (sponsor.website) {
      // If no ad but has website, open in new tab
      window.open(sponsor.website, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <>
      {/* Club Sponsors - Premium Tier */}
      {sponsors.club.length > 0 && (
        <div className="rounded-lg overflow-hidden shadow-lg">
          <SectionHeader title="CLUB SPONSORS" />
          <div className="bg-cream p-4">
            <div className="grid grid-cols-2 gap-4">
              {sponsors.club.map((sponsor, index) => (
                <SponsorCard
                  key={sponsor.id}
                  sponsor={sponsor}
                  variant="club"
                  delay={index * 75}
                  onClick={() => handleSponsorClick(sponsor)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Team Sponsors - Mid Tier */}
      {sponsors.team.length > 0 && (
        <div className="rounded-lg overflow-hidden shadow-lg">
          <SectionHeader title="TEAM SPONSORS" />
          <div className="bg-cream p-4">
            <div className="grid grid-cols-2 gap-4">
              {sponsors.team.map((sponsor, index) => (
                <SponsorCard
                  key={sponsor.id}
                  sponsor={sponsor}
                  variant="team"
                  delay={index * 75}
                  onClick={() => handleSponsorClick(sponsor)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Player Sponsors - Base Tier */}
      {sponsors.player.length > 0 && (
        <div className="rounded-lg overflow-hidden shadow-lg">
          <SectionHeader title="PLAYER SPONSORS" />
          <div className="bg-cream p-4">
            <div className="grid grid-cols-3 gap-3">
              {sponsors.player.map((sponsor, index) => (
                <SponsorCard
                  key={sponsor.id}
                  sponsor={sponsor}
                  variant="player"
                  delay={index * 50}
                  onClick={() => handleSponsorClick(sponsor)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {sponsors.club.length === 0 && sponsors.team.length === 0 && sponsors.player.length === 0 && (
        <div className="rounded-lg overflow-hidden shadow-lg">
          <div className="bg-cream p-8 text-center">
            <p className="text-gray-600">No sponsors to display at this time.</p>
          </div>
        </div>
      )}

      {/* Sponsor Ad Modal */}
      <SponsorAdModal
        sponsor={selectedSponsor}
        open={selectedSponsor !== null}
        onOpenChange={(open) => !open && setSelectedSponsor(null)}
      />
    </>
  )
}
