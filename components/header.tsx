"use client"

import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="bg-selby-green sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo and Club Name */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-selby-gold rounded-full flex items-center justify-center">
            {/* Placeholder for Selby RUFC Logo */}
            <span className="text-selby-green font-bold text-xs">LOGO</span>
          </div>
          <h1 className="text-selby-gold text-xl font-bold tracking-wide">
            SELBY RUFC
          </h1>
        </div>

        {/* Menu Icon */}
        <button
          className="p-2 hover:bg-selby-green/80 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-8 h-8 text-white" />
        </button>
      </div>
    </header>
  )
}
