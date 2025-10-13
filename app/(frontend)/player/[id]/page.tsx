import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { getPlayer, getMediaUrl } from "@/lib/payload"
import type { Team, Sponsor, Media } from "@/payload-types"
import { ArrowLeft, Instagram, Twitter } from "lucide-react"

interface PlayerProfilePageProps {
  params: {
    id: string
  }
}

export default async function PlayerProfilePage({ params }: PlayerProfilePageProps) {
  const player = await getPlayer(params.id)

  if (!player) {
    notFound()
  }

  // Extract related data
  const team = player.team && typeof player.team !== 'string' ? (player.team as Team) : null
  const sponsor = player.sponsor && typeof player.sponsor !== 'string' ? (player.sponsor as Sponsor) : null
  const photoUrl = player.photo && typeof player.photo !== 'string' ? getMediaUrl(player.photo) : null
  const sponsorLogoUrl = sponsor?.logo && typeof sponsor.logo !== 'string' ? getMediaUrl(sponsor.logo) : null
  const sponsorAdUrl = sponsor?.advertisement && typeof sponsor.advertisement !== 'string' ? getMediaUrl(sponsor.advertisement) : null

  // Format position name
  const formatPosition = (position: string): string => {
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
      'manager': 'Manager',
      'coach': 'Coach',
      'assistant-coach': 'Assistant Coach',
      'physio': 'Physiotherapist',
      'not-specified': 'Not Specified',
    }
    return positionMap[position] || position
  }

  const totalPoints = player.stats?.points || 0
  const hasStats = player.stats && (
    player.stats.appearances ||
    player.stats.tries ||
    player.stats.conversions ||
    player.stats.penalties ||
    player.stats.points
  )

  return (
    <>
      <Header />

      <main className="flex-1 bg-selby-green pb-20">
        <div className="max-w-screen-md mx-auto px-4 py-4 space-y-4">

          {/* Back Navigation */}
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-white hover:text-selby-gold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Team Sheet</span>
          </Link>

          {/* Player Profile Card */}
          <div className="bg-selby-cream rounded-lg shadow-lg p-6">

            {/* Player Photo and Basic Info */}
            <div className="flex flex-col items-center mb-6">
              <div className="w-40 h-40 rounded-full bg-selby-green flex items-center justify-center mb-4 overflow-hidden relative">
                {photoUrl ? (
                  <Image
                    src={photoUrl}
                    alt={player.name}
                    fill
                    className="object-cover"
                    sizes="160px"
                    priority
                  />
                ) : (
                  <span className="text-white text-5xl font-bold">
                    {player.number}
                  </span>
                )}
              </div>

              {/* Player Name */}
              <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
                {player.name}
              </h1>

              {/* Position and Number */}
              <div className="flex items-center gap-4 mb-3">
                <span className="text-selby-green font-bold text-2xl">
                  #{player.number}
                </span>
                <span className="text-gray-600 text-lg">
                  {formatPosition(player.position)}
                </span>
              </div>

              {/* Team Badge */}
              {team && (
                <div className="bg-selby-green text-white px-4 py-2 rounded-lg text-sm font-medium">
                  {team.name}
                </div>
              )}
            </div>

            {/* Biography */}
            {player.bio && (
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
                  About
                </h2>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {player.bio}
                  </p>
                </div>
              </div>
            )}

            {/* Statistics */}
            {hasStats && (
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
                  Season Statistics
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {player.stats?.appearances !== null && player.stats?.appearances !== undefined && (
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-selby-green mb-1">
                        {player.stats.appearances}
                      </div>
                      <div className="text-gray-600 text-sm">Appearances</div>
                    </div>
                  )}
                  {player.stats?.tries !== null && player.stats?.tries !== undefined && (
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-selby-green mb-1">
                        {player.stats.tries}
                      </div>
                      <div className="text-gray-600 text-sm">Tries</div>
                    </div>
                  )}
                  {player.stats?.conversions !== null && player.stats?.conversions !== undefined && (
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-selby-green mb-1">
                        {player.stats.conversions}
                      </div>
                      <div className="text-gray-600 text-sm">Conversions</div>
                    </div>
                  )}
                  {player.stats?.penalties !== null && player.stats?.penalties !== undefined && (
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-selby-green mb-1">
                        {player.stats.penalties}
                      </div>
                      <div className="text-gray-600 text-sm">Penalties</div>
                    </div>
                  )}
                  {totalPoints > 0 && (
                    <div className="bg-selby-gold rounded-lg p-4 text-center col-span-2">
                      <div className="text-4xl font-bold text-selby-green mb-1">
                        {totalPoints}
                      </div>
                      <div className="text-gray-900 text-sm font-semibold">Total Points</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Social Media Links */}
            {(player.socialLinks?.instagram || player.socialLinks?.twitter) && (
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
                  Connect
                </h2>
                <div className="flex gap-3">
                  {player.socialLinks.instagram && (
                    <a
                      href={player.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white hover:bg-gray-50 transition-colors rounded-lg px-4 py-3 shadow-sm flex-1"
                    >
                      <Instagram className="w-5 h-5 text-pink-600" />
                      <span className="text-gray-900 font-medium">Instagram</span>
                    </a>
                  )}
                  {player.socialLinks.twitter && (
                    <a
                      href={player.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white hover:bg-gray-50 transition-colors rounded-lg px-4 py-3 shadow-sm flex-1"
                    >
                      <Twitter className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-900 font-medium">Twitter</span>
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Sponsor Section */}
            {sponsor && (
              <div className="border-t-2 border-gray-300 pt-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide text-center">
                  Proudly Sponsored By
                </h2>
                <div className="bg-white rounded-lg p-6 text-center">
                  {sponsorLogoUrl ? (
                    <div className="relative w-full h-24 mb-4">
                      <Image
                        src={sponsorLogoUrl}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 768px"
                      />
                    </div>
                  ) : (
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {sponsor.name}
                    </h3>
                  )}

                  {sponsor.description && (
                    <p className="text-gray-600 mb-4">
                      {sponsor.description}
                    </p>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    {sponsor.website && (
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-selby-green text-white font-semibold py-3 px-6 rounded-lg hover:bg-selby-green/90 transition-colors"
                      >
                        Visit Website
                      </a>
                    )}
                    {sponsorAdUrl && (
                      <a
                        href={sponsorAdUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-selby-gold text-selby-green font-semibold py-3 px-6 rounded-lg hover:bg-selby-gold/90 transition-colors"
                      >
                        View Offer
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <BottomNav />
    </>
  )
}
