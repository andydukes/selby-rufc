import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { MatchHero } from "@/components/match-hero"
import { SponsorCarousel } from "@/components/sponsor-carousel"
import { SectionHeader } from "@/components/section-header"
import { TeamSheet } from "@/components/team-sheet"
import { ContentCard } from "@/components/content-card"
import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-selby-green pb-20">
        <div className="max-w-screen-md mx-auto px-4 py-4 space-y-4">

          {/* Today's Match Hero */}
          <MatchHero
            opponent="Yorkshire Vikings"
            kickOffTime="2:15pm"
            groundInfo="Sandhill Lane"
            weather="Sunny, 15°C"
          />

          {/* Sponsor Carousel */}
          <SponsorCarousel />

          {/* Team Sheets Section */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <SectionHeader title="TEAM SHEETS" />
            <TeamSheet />
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
                    Chairman's Welcome
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
