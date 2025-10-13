import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { SectionHeader } from "@/components/section-header"
import { TeamSheetFull } from "@/components/team-sheet-full"
import { getTodaysMatch, formatKickOffTime } from "@/lib/payload"
import type { Team } from "@/payload-types"

export default async function TeamPage() {
  // Fetch today's match from CMS
  const todaysMatch = await getTodaysMatch()

  // Extract team and opponent names
  const homeTeamName = todaysMatch?.team && typeof todaysMatch.team !== 'string'
    ? (todaysMatch.team as Team).name
    : 'Selby RUFC'

  return (
    <>
      <Header />

      <main className="flex-1 bg-selby-green pb-20">
        <div className="max-w-screen-md mx-auto px-4 py-4 space-y-4">
          {/* Match Info Header */}
          {todaysMatch && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <h2 className="font-bold text-xl mb-2">
                {homeTeamName} vs {todaysMatch.opponent}
              </h2>
              <p className="text-white/90 text-sm">
                Kick-off: {formatKickOffTime(todaysMatch.kickOffTime)} • {todaysMatch.groundInfo || 'Sandhill Lane'}
              </p>
            </div>
          )}

          {/* Team Sheet */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <SectionHeader title="TEAM SHEET" />
            <TeamSheetFull match={todaysMatch} />
          </div>
        </div>
      </main>

      <BottomNav />
    </>
  )
}
