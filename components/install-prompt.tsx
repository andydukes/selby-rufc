"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed"
    platform: string
  }>
  prompt(): Promise<void>
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault()
      // Stash the event so it can be triggered later
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      // Show the install prompt after a short delay
      setTimeout(() => {
        setShowPrompt(true)
      }, 3000)
    }

    window.addEventListener("beforeinstallprompt", handler)

    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setShowPrompt(false)
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handler)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return
    }

    // Show the install prompt
    await deferredPrompt.prompt()

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice

    // Clear the deferred prompt
    setDeferredPrompt(null)
    setShowPrompt(false)

    // Log the outcome
    console.log(`User response to the install prompt: ${outcome}`)
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    // Store in localStorage that user dismissed the prompt
    localStorage.setItem("pwa-install-dismissed", Date.now().toString())
  }

  useEffect(() => {
    // Check if user previously dismissed the prompt (within last 7 days)
    const dismissed = localStorage.getItem("pwa-install-dismissed")
    if (dismissed) {
      const dismissedTime = parseInt(dismissed)
      const sevenDays = 7 * 24 * 60 * 60 * 1000
      if (Date.now() - dismissedTime < sevenDays) {
        setShowPrompt(false)
      }
    }
  }, [])

  if (!showPrompt || !deferredPrompt) {
    return null
  }

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 md:left-auto md:right-4 md:w-96">
      <div className="relative rounded-lg bg-rugby-green p-4 shadow-lg">
        <button
          onClick={handleDismiss}
          className="absolute right-2 top-2 text-white/80 hover:text-white"
          aria-label="Dismiss"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="pr-8">
          <h3 className="text-lg font-bold text-white">
            Install Selby Rugby App
          </h3>
          <p className="mt-1 text-sm text-white/90">
            Add to your home screen for quick access to match day programs and team updates.
          </p>
          <button
            onClick={handleInstallClick}
            className="mt-3 w-full rounded bg-white px-4 py-2 text-sm font-semibold text-rugby-green hover:bg-cream transition-colors"
          >
            Install App
          </button>
        </div>
      </div>
    </div>
  )
}
