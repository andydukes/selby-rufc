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
  photoUrl?: string
  sponsorName?: string
}

interface TeamSheetProps {
  match?: Match | null
}

export function TeamSheet({ match }: TeamSheetProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null)

  // Transform match team sheet data into player list
  const players: Player[] = match?.teamSheet
    ? match.teamSheet
        .filter((entry) => entry.position === 'starting') // Only show starters on home page
        .map((entry) => {
          const player = entry.player as PayloadPlayer
          const sponsor = player.sponsor as Sponsor | undefined

          return {
            id: player.id,
            name: player.name,
            number: entry.jerseyNumber || player.number,
            position: formatPosition(player.position),
            photoUrl: player.photo && typeof player.photo !== 'string'
              ? getMediaUrl(player.photo) || undefined
              : undefined,
            sponsorName: sponsor?.name,
          }
        })
        .sort((a, b) => a.number - b.number) // Sort by jersey number
    : []

  const forwards = players.filter((p) => p.number <= 8)
  const backs = players.filter((p) => p.number >= 9 && p.number <= 15)

  // Helper to format position names
  function formatPosition(position: string): string {
    const positionMap: { [key: string]: string } = {
      'loose-head-prop': 'Loose-head Prop',
      'hooker': 'Hooker',
      'tight-head-prop': 'Tight-head Prop',
      'second-row': 'Second Row',
      'blindside-flanker': 'Blindside Flanker',
      'outside-flanker': 'Openside Flanker',
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
  if (!match || players.length === 0) {
    return (
      <div className="bg-selby-cream rounded-b-lg p-4">
        <div className="text-gray-500 text-sm py-4 px-4 bg-white rounded-lg text-center">
          <p>Team sheet will be available closer to kick-off</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="bg-selby-cream rounded-b-lg p-4">
        {/* Forwards Section */}
        {forwards.length > 0 && (
          <>
            <h3 className="font-semibold text-gray-700 mb-3">Forwards (1-8)</h3>
            <div className="space-y-2">
              {forwards.map((player) => (
                <button
                  key={player.id}
                  onClick={() => setSelectedPlayer(player)}
                  className="w-full text-left py-3 px-4 bg-white rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3 shadow-sm"
                >
                  <span className="font-bold text-selby-green min-w-[2rem]">
                    {player.number}
                  </span>
                  <span className="text-gray-900 font-medium">{player.name}</span>
                  <span className="text-gray-500 text-sm ml-auto">{player.position}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Backs Section */}
        <h3 className="font-semibold text-gray-700 mt-6 mb-3">Backs (9-15)</h3>
        {backs.length > 0 ? (
          <div className="space-y-2">
            {backs.map((player) => (
              <button
                key={player.id}
                onClick={() => setSelectedPlayer(player)}
                className="w-full text-left py-3 px-4 bg-white rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3 shadow-sm"
              >
                <span className="font-bold text-selby-green min-w-[2rem]">
                  {player.number}
                </span>
                <span className="text-gray-900 font-medium">{player.name}</span>
                <span className="text-gray-500 text-sm ml-auto">{player.position}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="text-gray-500 text-sm py-4 px-4 bg-white rounded-lg">
            <p>Backs lineup to be confirmed</p>
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
