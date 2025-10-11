import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { SectionHeader } from "@/components/section-header"
import { ContentCard } from "@/components/content-card"

export default function SponsorsPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-selby-green pb-20">
        <div className="max-w-screen-md mx-auto px-4 py-4 space-y-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <SectionHeader title="SPONSORS & OFFERS" />
            <ContentCard>
              <div className="grid grid-cols-3 gap-4">
                {[
                  "Hornseys",
                  "McHughs",
                  "Jacksons",
                  "Lindum",
                  "Norton",
                  "Shops",
                  "Red Rowley",
                  "Local Biz",
                  "Partner Co",
                ].map((sponsor) => (
                  <button
                    key={sponsor}
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center min-h-[100px]"
                  >
                    <span className="font-semibold text-gray-700 text-sm text-center">
                      {sponsor}
                    </span>
                  </button>
                ))}
              </div>
            </ContentCard>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <SectionHeader title="THANK YOU TO OUR SPONSORS" />
            <ContentCard>
              <p className="text-gray-700 text-center">
                Supporting Selby RUFC and our community
              </p>
            </ContentCard>
          </div>
        </div>
      </main>

      <BottomNav />
    </>
  )
}
