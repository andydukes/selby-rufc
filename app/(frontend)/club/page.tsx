import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { SectionHeader } from "@/components/section-header"
import { ContentCard } from "@/components/content-card"

export default function ClubPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-selby-green pb-20">
        <div className="max-w-screen-md mx-auto px-4 py-4 space-y-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <SectionHeader title="CHAIRMAN'S WELCOME" />
            <ContentCard>
              <p className="text-gray-700 mb-3">
                Welcome to Selby Rugby Football Club!
              </p>
              <p className="text-gray-600 text-sm">
                Content will be managed through the CMS and displayed here...
              </p>
            </ContentCard>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <SectionHeader title="JUNIORS UPDATE" />
            <ContentCard>
              <p className="text-gray-700 mb-3">
                Latest news from our junior sections
              </p>
              <p className="text-gray-600 text-sm">
                Updates coming soon from team managers...
              </p>
            </ContentCard>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <SectionHeader title="CLUB NEWS" />
            <ContentCard>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Upcoming Events
                  </h3>
                  <p className="text-gray-600 text-sm">Check back soon...</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Club Information
                  </h3>
                  <p className="text-gray-600 text-sm">More details coming...</p>
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
