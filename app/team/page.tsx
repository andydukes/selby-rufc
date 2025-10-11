import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { SectionHeader } from "@/components/section-header"
import { ContentCard } from "@/components/content-card"

export default function TeamPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-selby-green pb-20">
        <div className="max-w-screen-md mx-auto px-4 py-4 space-y-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <SectionHeader title="TEAM SELECTION" />
            <ContentCard>
              <p className="text-gray-700">
                Full team sheets and player selection coming soon...
              </p>
            </ContentCard>
          </div>
        </div>
      </main>

      <BottomNav />
    </>
  )
}
