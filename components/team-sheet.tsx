"use client"

import { useState } from "react"
import { PlayerCardModal } from "./player-card-modal"

interface Player {
  id: string
  name: string
  number: number
  position: string
  photoUrl?: string
  sponsorName?: string
}

interface TeamSheetProps {
  players?: Player[]
}

export function TeamSheet({ players }: TeamSheetProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null)

  // Mock players for demo
  const mockPlayers: Player[] = players || [
    { id: "1", name: "James Smith", number: 1, position: "Prop" },
    { id: "2", name: "Tom Johnson", number: 2, position: "Hooker" },
    { id: "3", name: "Mike Williams", number: 3, position: "Prop" },
    { id: "4", name: "David Brown", number: 4, position: "Lock" },
    { id: "5", name: "Chris Davis", number: 5, position: "Lock" },
    { id: "6", name: "Rob Wilson", number: 6, position: "Flanker" },
    { id: "7", name: "Paul Taylor", number: 7, position: "Flanker" },
    { id: "8", name: "Mark Anderson", number: 8, position: "Number 8" },
  ]

  const forwards = mockPlayers.filter((p) => p.number <= 8)

  return (
    <>
      <div className="bg-selby-cream rounded-b-lg p-4">
        {/* Forwards Section */}
        <h3 className="font-semibold text-gray-700 mb-3">Forwards</h3>
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
              <span className="text-gray-900">{player.name}</span>
            </button>
          ))}
        </div>

        {/* Backs Section */}
        <h3 className="font-semibold text-gray-700 mt-6 mb-3">Backs</h3>
        <div className="text-gray-500 text-sm py-4 px-4 bg-white rounded-lg">
          <p>Numbers 9-15 coming soon...</p>
        </div>
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
