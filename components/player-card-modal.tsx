"use client"

import { X } from "lucide-react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

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

            {/* Sponsor Logo */}
            {player.sponsorName && (
              <div className="bg-selby-red text-white px-6 py-3 rounded-lg mb-4">
                <p className="font-semibold">{player.sponsorName}</p>
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
    </>
  )
}
