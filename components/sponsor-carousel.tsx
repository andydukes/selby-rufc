"use client"

import { useState } from "react"
import Image from "next/image"
import type { Sponsor } from "@/payload-types"
import { getMediaUrl } from "@/lib/payload"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@/components/ui/visually-hidden"

interface SponsorCarouselProps {
  sponsors?: Sponsor[]
}

export function SponsorCarousel({ sponsors = [] }: SponsorCarouselProps) {
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null)

  if (sponsors.length === 0) {
    return null
  }

  // Helper to get logo URL from sponsor
  const getLogoUrl = (sponsor: Sponsor): string | null => {
    if (typeof sponsor.logo === 'string') return null
    return getMediaUrl(sponsor.logo)
  }

  // Helper to get advertisement URL from sponsor
  const getAdUrl = (sponsor: Sponsor): string | null => {
    if (!sponsor.advertisement) return null
    if (typeof sponsor.advertisement === 'string') return null
    return getMediaUrl(sponsor.advertisement)
  }

  const handleSponsorClick = (sponsor: Sponsor) => {
    // Only open modal if sponsor has an advertisement
    if (sponsor.advertisement) {
      setSelectedSponsor(sponsor)
    } else if (sponsor.website) {
      // If no ad but has website, open in new tab
      window.open(sponsor.website, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <>
      <div className="mt-4 overflow-x-auto">
        <div className="flex gap-3 pb-2">
          {sponsors.map((sponsor) => {
            const logoUrl = getLogoUrl(sponsor)
            const hasInteraction = sponsor.advertisement || sponsor.website

            return (
              <button
                key={sponsor.id}
                onClick={() => handleSponsorClick(sponsor)}
                className={`flex-shrink-0 bg-white/95 backdrop-blur-sm rounded-lg px-6 py-4 min-w-[140px] flex items-center justify-center transition-all ${
                  hasInteraction
                    ? 'hover:bg-white hover:shadow-lg hover:scale-105 cursor-pointer'
                    : 'cursor-default'
                }`}
                aria-label={`View ${sponsor.name} sponsor information`}
              >
                {logoUrl ? (
                  <div className="relative w-full h-16">
                    <Image
                      src={logoUrl}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                      sizes="140px"
                    />
                  </div>
                ) : (
                  <span className="text-gray-800 font-semibold text-sm text-center">
                    {sponsor.name}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Full-page sponsor ad modal */}
      <Dialog open={selectedSponsor !== null} onOpenChange={(open: boolean) => !open && setSelectedSponsor(null)}>
        <DialogContent className="max-w-4xl w-full h-[90vh] p-0 overflow-hidden">
          <VisuallyHidden>
            <DialogTitle>
              {selectedSponsor ? `${selectedSponsor.name} Advertisement` : 'Sponsor Advertisement'}
            </DialogTitle>
          </VisuallyHidden>
          {selectedSponsor && (
            <div className="relative w-full h-full bg-black">
              {getAdUrl(selectedSponsor) ? (
                <Image
                  src={getAdUrl(selectedSponsor)!}
                  alt={`${selectedSponsor.name} advertisement`}
                  fill
                  className="object-contain"
                  priority
                />
              ) : (
                <div className="flex items-center justify-center h-full text-white">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">{selectedSponsor.name}</h2>
                    {selectedSponsor.description && (
                      <p className="text-lg">{selectedSponsor.description}</p>
                    )}
                    {selectedSponsor.website && (
                      <a
                        href={selectedSponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-selby-gold hover:underline mt-4 inline-block"
                      >
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
