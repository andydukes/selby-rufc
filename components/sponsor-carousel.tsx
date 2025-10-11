"use client"

interface Sponsor {
  id: string
  name: string
  logoUrl?: string
}

interface SponsorCarouselProps {
  sponsors?: Sponsor[]
}

export function SponsorCarousel({ sponsors }: SponsorCarouselProps) {
  // Mock sponsors for demo
  const mockSponsors: Sponsor[] = sponsors || [
    { id: "1", name: "Hornseys" },
    { id: "2", name: "McHughs Funeral Home" },
    { id: "3", name: "Jacksons of Yorkshire" },
  ]

  return (
    <div className="mt-4 overflow-x-auto">
      <div className="flex gap-3 pb-2">
        {mockSponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 min-w-[120px] flex items-center justify-center"
          >
            <span className="text-white font-semibold text-sm text-center">
              {sponsor.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
