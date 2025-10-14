'use client'

import Image from 'next/image'
import type { Sponsor, Media } from '@/payload-types'
import { getMediaUrl } from '@/lib/payload'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { VisuallyHidden } from '@/components/ui/visually-hidden'

interface SponsorAdModalProps {
  sponsor: Sponsor | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SponsorAdModal({ sponsor, open, onOpenChange }: SponsorAdModalProps) {
  if (!sponsor) return null

  const adUrl = sponsor.advertisement ? getMediaUrl(sponsor.advertisement as Media) : null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full h-[90vh] p-0 overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>
            {sponsor.name} Advertisement
          </DialogTitle>
        </VisuallyHidden>
        <div className="relative w-full h-full bg-black">
          {adUrl ? (
            <Image
              src={adUrl}
              alt={`${sponsor.name} advertisement`}
              fill
              className="object-contain"
              priority
            />
          ) : (
            <div className="flex items-center justify-center h-full text-white">
              <div className="text-center px-6">
                <h2 className="text-2xl font-bold mb-2">{sponsor.name}</h2>
                {sponsor.description && (
                  <p className="text-lg mb-6">{sponsor.description}</p>
                )}
                {sponsor.website && (
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-selby-gold text-selby-green px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
