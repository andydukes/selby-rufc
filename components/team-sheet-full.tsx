"use client"

import { useState } from "react"
import { PlayerCardModal } from "./player-card-modal"
import type { Match, Player as PayloadPlayer, Media, Sponsor } from "@/payload-types"
import { getMediaUrl } from "@/lib/payload"

interface Player {
  id: string
  name: string
  number: number
  position: string
  positionType?: string
  photoUrl?: string
  sponsorName?: string
  sponsorLogoUrl?: string
}

interface TeamSheetFullProps {
  match?: Match | null
}

export function TeamSheetFull({ match }: TeamSheetFullProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null)

  // Transform match team sheet data into player lists
  const allPlayers: Player[] = match?.teamSheet
    ? match.teamSheet
        .map((entry) => {
          const player = entry.player as PayloadPlayer
          const sponsor = player.sponsor as Sponsor | undefined

          return {
            id: player.id,
            name: player.name,
            number: entry.jerseyNumber || player.number,
            position: formatPosition(player.position),
            positionType: entry.position, // 'starting' or 'substitute'
            photoUrl: player.photo && typeof player.photo !== 'string'
              ? getMediaUrl(player.photo) || undefined
              : undefined,
            sponsorName: sponsor?.name,
            sponsorLogoUrl: sponsor?.logo && typeof sponsor.logo !== 'string'
              ? getMediaUrl(sponsor.logo) || undefined
              : undefined,
          }
        })
        .sort((a, b) => a.number - b.number)
    : []

  const starters = allPlayers.filter((p) => p.positionType === 'starting')
  const substitutes = allPlayers.filter((p) => p.positionType === 'substitute')

  const forwards = starters.filter((p) => p.number <= 8)
  const backs = starters.filter((p) => p.number >= 9 && p.number <= 15)

  // Helper to format position names
  function formatPosition(position: string): string {
    const positionMap: { [key: string]: string } = {
      'loose-head-prop': 'Loose-head Prop',
      'hooker': 'Hooker',
      'tight-head-prop': 'Tight-head Prop',
      'second-row': 'Second Row',
      'blindside-flanker': 'Blindside Flanker',
      'openside-flanker': 'Openside Flanker',
      'number-8': 'Number 8',
      'scrum-half': 'Scrum-half',
      'fly-half': 'Fly-half',
      'inside-centre': 'Inside Centre',
      'outside-centre': 'Outside Centre',
      'left-wing': 'Left Wing',
      'right-wing': 'Right Wing',
      'fullback': 'Fullback',
    }
    return positionMap[position] || position
  }

  // Show placeholder if no match data
  if (!match || allPlayers.length === 0) {
    return (
      <div className="bg-selby-cream rounded-b-lg p-6">
        <div className="text-gray-500 text-center py-8">
          <p className="text-lg font-semibold mb-2">No Team Sheet Available</p>
          <p className="text-sm">Team sheet will be available closer to kick-off</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="bg-selby-cream rounded-b-lg p-6">
        {/* Forwards Section */}
        {forwards.length > 0 && (
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 text-lg mb-4 uppercase tracking-wide">
              Forwards (1-8)
            </h3>
            <div className="space-y-2">
              {forwards.map((player) => (
                <button
                  key={player.id}
                  onClick={() => setSelectedPlayer(player)}
                  className="w-full text-left py-4 px-4 bg-white rounded-lg hover:bg-gray-50 transition-all flex items-center gap-4 shadow-sm hover:shadow-md"
                >
                  <span className="font-bold text-selby-green text-xl min-w-[2.5rem]">
                    {player.number}
                  </span>
                  <div className="flex-1">
                    <span className="text-gray-900 font-semibold block">
                      {player.name}
                    </span>
                    <span className="text-gray-500 text-sm">{player.position}</span>
                  </div>
                  {player.sponsorName && (
                    <span className="text-selby-gold text-xs font-medium">
                      Sponsored
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Backs Section */}
        {backs.length > 0 && (
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 text-lg mb-4 uppercase tracking-wide">
              Backs (9-15)
            </h3>
            <div className="space-y-2">
              {backs.map((player) => (
                <button
                  key={player.id}
                  onClick={() => setSelectedPlayer(player)}
                  className="w-full text-left py-4 px-4 bg-white rounded-lg hover:bg-gray-50 transition-all flex items-center gap-4 shadow-sm hover:shadow-md"
                >
                  <span className="font-bold text-selby-green text-xl min-w-[2.5rem]">
                    {player.number}
                  </span>
                  <div className="flex-1">
                    <span className="text-gray-900 font-semibold block">
                      {player.name}
                    </span>
                    <span className="text-gray-500 text-sm">{player.position}</span>
                  </div>
                  {player.sponsorName && (
                    <span className="text-selby-gold text-xs font-medium">
                      Sponsored
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Substitutes Section */}
        {substitutes.length > 0 && (
          <div className="border-t-2 border-gray-300 pt-6">
            <h3 className="font-bold text-gray-900 text-lg mb-4 uppercase tracking-wide">
              Substitutes (16-23)
            </h3>
            <div className="space-y-2">
              {substitutes.map((player) => (
                <button
                  key={player.id}
                  onClick={() => setSelectedPlayer(player)}
                  className="w-full text-left py-4 px-4 bg-white rounded-lg hover:bg-gray-50 transition-all flex items-center gap-4 shadow-sm hover:shadow-md"
                >
                  <span className="font-bold text-selby-green text-xl min-w-[2.5rem]">
                    {player.number}
                  </span>
                  <div className="flex-1">
                    <span className="text-gray-900 font-semibold block">
                      {player.name}
                    </span>
                    <span className="text-gray-500 text-sm">{player.position}</span>
                  </div>
                  {player.sponsorName && (
                    <span className="text-selby-gold text-xs font-medium">
                      Sponsored
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Player Modal */}
      {selectedPlayer && (
        <PlayerCardModal
          isOpen={!!selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
          player={selectedPlayer}
        />
      )}
    </>
  )
}
