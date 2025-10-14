'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import type { Sponsor, Media } from '@/payload-types'
import { getMediaUrl } from '@/lib/payload'

interface SponsorCardProps {
  sponsor: Sponsor
  variant: 'club' | 'team' | 'player'
  delay?: number
  onClick?: () => void
}

export function SponsorCard({ sponsor, variant, delay = 0, onClick }: SponsorCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Size classes based on variant
  const sizeClasses = {
    club: 'col-span-2 min-h-[200px] p-6',
    team: 'col-span-1 min-h-[160px] p-5',
    player: 'col-span-1 min-h-[140px] p-4',
  }

  // Intersection Observer for scroll animation
  useEffect(() => {
    const currentRef = cardRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay])

  const logoUrl = getMediaUrl(sponsor.logo as Media)

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`
        ${sizeClasses[variant]}
        bg-white rounded-lg shadow-md
        flex flex-col items-center justify-center
        transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        ${onClick ? 'cursor-pointer hover:scale-105 hover:shadow-xl active:scale-100' : ''}
      `}
    >
      {/* Sponsor Logo */}
      {logoUrl && (
        <div className="relative w-full h-full flex items-center justify-center mb-3">
          <Image
            src={logoUrl}
            alt={sponsor.name}
            width={variant === 'club' ? 180 : variant === 'team' ? 140 : 100}
            height={variant === 'club' ? 180 : variant === 'team' ? 140 : 100}
            className="object-contain max-w-full max-h-full"
          />
        </div>
      )}

      {/* Sponsor Name */}
      <h3
        className={`
          font-bold text-center text-gray-800
          ${variant === 'club' ? 'text-xl' : variant === 'team' ? 'text-lg' : 'text-base'}
        `}
      >
        {sponsor.name}
      </h3>

      {/* Description (only for club and team sponsors) */}
      {(variant === 'club' || variant === 'team') && sponsor.description && (
        <p
          className={`
            text-center text-gray-600 mt-2 line-clamp-2
            ${variant === 'club' ? 'text-sm' : 'text-xs'}
          `}
        >
          {sponsor.description}
        </p>
      )}

      {/* Click indicator */}
      {onClick && (
        <div className="mt-auto pt-2">
          <span className="text-xs text-selby-burgundy font-medium">View Offer</span>
        </div>
      )}
    </div>
  )
}
