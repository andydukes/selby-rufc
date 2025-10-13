"use client"

interface MatchHeroProps {
  homeTeam?: string
  opponent?: string
  kickOffTime?: string
  groundInfo?: string
  weather?: string
}

export function MatchHero({
  homeTeam = "Selby RUFC",
  opponent = "Opponent",
  kickOffTime = "2:15pm",
  groundInfo = "Sandhill Lane",
  weather = "Sunny",
}: MatchHeroProps) {
  return (
    <div className="bg-selby-red text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-center mb-2">TODAY&apos;S MATCH</h2>
      <h3 className="text-2xl font-bold text-center mb-2">
        {homeTeam} vs {opponent}
      </h3>
      <p className="text-center text-lg mb-1">Kick-off {kickOffTime}</p>
      <p className="text-center text-sm opacity-90">
        {groundInfo} • {weather}
      </p>
    </div>
  )
}
