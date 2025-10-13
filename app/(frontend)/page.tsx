import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { MatchHero } from "@/components/match-hero"
import { SponsorCarousel } from "@/components/sponsor-carousel"
import { SectionHeader } from "@/components/section-header"
import { TeamSheet } from "@/components/team-sheet"
import { ContentCard } from "@/components/content-card"
import { ChevronRight } from "lucide-react"
import { getTodaysMatch, getClubSponsors, formatKickOffTime } from "@/lib/payload"
import type { Team } from "@/payload-types"

export default async function Home() {
  // Fetch today's match and sponsors from CMS
  const todaysMatch = await getTodaysMatch()
  const sponsors = await getClubSponsors()

  // Extract team name if team is populated
  const homeTeamName = todaysMatch?.team && typeof todaysMatch.team !== 'string'
    ? (todaysMatch.team as Team).name
    : 'Selby RUFC'

  return (
    <>
      <Header />

      <main className="flex-1 bg-selby-green pb-20">
        <div className="max-w-screen-md mx-auto px-4 py-4 space-y-4">

          {/* Today's Match Hero */}
          {todaysMatch ? (
            <MatchHero
              homeTeam={homeTeamName}
              opponent={todaysMatch.opponent}
              kickOffTime={formatKickOffTime(todaysMatch.kickOffTime)}
              groundInfo={todaysMatch.groundInfo || 'Sandhill Lane'}
              weather={todaysMatch.weather || 'TBC'}
            />
          ) : (
            <MatchHero
              homeTeam="Selby RUFC"
              opponent="No match scheduled"
              kickOffTime="TBC"
              groundInfo="Sandhill Lane"
              weather="Check back soon"
            />
          )}

          {/* Sponsor Carousel */}
          <SponsorCarousel sponsors={sponsors} />

          {/* Quick Links Section */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <a
              href="/team"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all rounded-lg p-4 text-center"
            >
              <div className="text-white font-semibold">Team Sheets</div>
              <div className="text-white/80 text-sm mt-1">View today&apos;s lineup</div>
            </a>
            <a
              href="/club"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all rounded-lg p-4 text-center"
            >
              <div className="text-white font-semibold">Club News</div>
              <div className="text-white/80 text-sm mt-1">Latest updates</div>
            </a>
          </div>

          {/* Team Sheets Section */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <SectionHeader title="TEAM SHEETS" />
            <TeamSheet match={todaysMatch} />
          </div>

          {/* Live Match Centre Section */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <SectionHeader title="LIVE MATCH CENTRE" />
            <ContentCard>
              <div className="space-y-3">
                <p className="font-semibold text-gray-900">Kick-off!</p>
                <div className="flex items-center justify-between py-2">
                  <p className="text-gray-700">
                    Half-time: Selby 14 - 7 Yorkshire Vikings
                  </p>
                  <ChevronRight className="w-5 h-5 text-selby-gold" />
                </div>
              </div>
            </ContentCard>
          </div>

          {/* Sponsors & Offers Section */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <SectionHeader title="SPONSORS & OFFERS" />
            <ContentCard>
              <div className="grid grid-cols-3 gap-4">
                {["Lindum", "Norton", "Shops"].map((sponsor) => (
                  <button
                    key={sponsor}
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center min-h-[80px]"
                  >
                    <span className="font-semibold text-gray-700 text-sm">
                      {sponsor}
                    </span>
                  </button>
                ))}
              </div>
            </ContentCard>
          </div>

          {/* Club & Community Section */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <SectionHeader title="CLUB & COMMUNITY" />
            <ContentCard>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-left">
                  <span className="font-semibold text-gray-700 text-sm">
                    Chairman&apos;s Welcome
                  </span>
                </button>
                <button className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-left">
                  <span className="font-semibold text-gray-700 text-sm">
                    Juniors Update
                  </span>
                </button>
              </div>
            </ContentCard>
          </div>

        </div>
      </main>

      <BottomNav />
    </>
  )
}
