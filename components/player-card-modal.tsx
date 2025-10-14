"use client"

import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import type { Sponsor } from "@/payload-types"
import { SponsorAdModal } from "./sponsor-ad-modal"

interface PlayerCardModalProps {
  isOpen: boolean
  onClose: () => void
  player: {
    id: string
    name: string
    number: number
    position?: string
    photoUrl?: string
    sponsorName?: string
    sponsorLogoUrl?: string
    sponsor?: Sponsor
  }
  onViewProfile?: () => void
}

export function PlayerCardModal({
  isOpen,
  onClose,
  player,
  onViewProfile,
}: PlayerCardModalProps) {
  const router = useRouter()
  const [showSponsorAd, setShowSponsorAd] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleViewProfile = () => {
    if (onViewProfile) {
      onViewProfile()
    } else {
      router.push(`/player/${player.id}`)
    }
    onClose()
  }

  const handleViewSponsor = () => {
    setShowSponsorAd(true)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-x-0 bottom-0 z-50 animate-slide-up pb-20">
        <div className="bg-selby-cream rounded-t-3xl shadow-2xl max-w-screen-md mx-auto p-6 max-h-[80vh] overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          {/* Player Photo */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-selby-green flex items-center justify-center mb-4 overflow-hidden relative">
              {player.photoUrl ? (
                <Image
                  src={player.photoUrl}
                  alt={player.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              ) : (
                <span className="text-white text-4xl font-bold">
                  {player.number}
                </span>
              )}
            </div>

            {/* Player Name */}
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {player.name}
            </h2>

            {/* Sponsor Section */}
            {(player.sponsorName || player.sponsor) && (
              <div className="mb-4 w-full max-w-xs">
                <div className="bg-white border-2 border-selby-burgundy rounded-lg p-4 text-center">
                  {player.sponsorLogoUrl && (
                    <div className="relative w-24 h-24 mx-auto mb-2">
                      <Image
                        src={player.sponsorLogoUrl}
                        alt={player.sponsorName || 'Sponsor'}
                        fill
                        className="object-contain"
                        sizes="96px"
                      />
                    </div>
                  )}
                  <p className="text-selby-burgundy font-semibold mb-2">
                    Sponsored by {player.sponsorName}
                  </p>
                  {player.sponsor?.advertisement && (
                    <button
                      onClick={handleViewSponsor}
                      className="text-sm text-selby-green bg-selby-gold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors font-medium"
                    >
                      View Sponsor Offer
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Message */}
            <p className="text-gray-700 text-center mb-6">
              Have a great game, {player.name.split(" ")[0]}!
            </p>

            {/* View Profile Button */}
            <button
              onClick={handleViewProfile}
              className="bg-selby-gold text-selby-green font-bold py-3 px-12 rounded-lg hover:bg-selby-gold/90 transition-colors shadow-md w-full max-w-xs"
            >
              View Profile
            </button>
          </div>
        </div>
      </div>

      {/* Sponsor Ad Modal */}
      {player.sponsor && (
        <SponsorAdModal
          sponsor={player.sponsor}
          open={showSponsorAd}
          onOpenChange={setShowSponsorAd}
        />
      )}
    </>
  )
}
