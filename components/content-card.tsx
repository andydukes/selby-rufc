import { ReactNode } from "react"

interface ContentCardProps {
  children: ReactNode
  className?: string
}

export function ContentCard({ children, className = "" }: ContentCardProps) {
  return (
    <div className={`bg-selby-cream rounded-lg p-4 shadow-sm ${className}`}>
      {children}
    </div>
  )
}
