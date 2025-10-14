"use client"

import { Wifi, RefreshCw } from "lucide-react"

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-rugby-green px-4">
      <div className="max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-white/10 p-6">
            <Wifi className="h-16 w-16 text-white" />
          </div>
        </div>

        <h1 className="mb-4 text-3xl font-bold text-white">
          You&apos;re Offline
        </h1>

        <p className="mb-8 text-lg text-white/90">
          It looks like you&apos;ve lost your internet connection. Some content
          may not be available until you&apos;re back online.
        </p>

        <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
          <h2 className="mb-3 text-xl font-semibold text-white">
            What you can do:
          </h2>
          <ul className="space-y-2 text-left text-white/90">
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-gold">•</span>
              <span>Check your WiFi or mobile data connection</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-gold">•</span>
              <span>View previously loaded team sheets and player profiles</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-gold">•</span>
              <span>Try again once you&apos;re back online</span>
            </li>
          </ul>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="mt-8 inline-flex items-center gap-2 rounded bg-white px-6 py-3 font-semibold text-rugby-green transition-colors hover:bg-cream"
        >
          <RefreshCw className="h-5 w-5" />
          Try Again
        </button>
      </div>
    </div>
  )
}
