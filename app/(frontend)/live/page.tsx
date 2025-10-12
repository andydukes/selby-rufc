import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { SectionHeader } from "@/components/section-header"
import { ContentCard } from "@/components/content-card"

export default function LivePage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-selby-green pb-20">
        <div className="max-w-screen-md mx-auto px-4 py-4 space-y-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <SectionHeader title="LIVE MATCH CENTRE" />
            <ContentCard>
              <p className="text-gray-700 mb-4">
                Real-time match updates coming in Phase 2...
              </p>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-gray-900">Match Status</p>
                  <p className="text-gray-600 text-sm">Not yet started</p>
                </div>
              </div>
            </ContentCard>
          </div>
        </div>
      </main>

      <BottomNav />
    </>
  )
}
