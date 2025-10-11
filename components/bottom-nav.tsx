"use client"

import { Home, Shield, Play, DollarSign, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Team", href: "/team", icon: Shield },
  { name: "Live", href: "/live", icon: Play },
  { name: "Sponsors", href: "/sponsors", icon: DollarSign },
  { name: "Club", href: "/club", icon: Users },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-selby-green border-t border-selby-green/20 z-50">
      <div className="flex items-center justify-around max-w-screen-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center py-3 px-4 flex-1 transition-colors ${
                isActive
                  ? "text-selby-gold"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <Icon className="w-6 h-6 mb-1" strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-xs font-medium ${isActive ? "font-bold" : ""}`}>
                {item.name}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
