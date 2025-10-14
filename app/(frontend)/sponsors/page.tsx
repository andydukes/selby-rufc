import { Header } from '@/components/header'
import { BottomNav } from '@/components/bottom-nav'
import { SectionHeader } from '@/components/section-header'
import { getAllSponsors } from '@/lib/payload'
import { SponsorsGrid } from '@/components/sponsors-grid'

export const revalidate = 300 // Revalidate every 5 minutes

export default async function SponsorsPage() {
  const sponsors = await getAllSponsors()

  return (
    <>
      <Header />

      <main className="flex-1 bg-selby-green pb-20">
        <div className="max-w-screen-md mx-auto px-4 py-4 space-y-6">
          {/* Page Header */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <SectionHeader title="SPONSORS & OFFERS" />
            <div className="bg-cream p-6">
              <p className="text-gray-700 text-center">
                Thank you to all our sponsors for supporting Selby RUFC and our community.
                Click any sponsor to view their offers and learn more.
              </p>
            </div>
          </div>

          {/* Sponsors Grid - Client Component */}
          <SponsorsGrid sponsors={sponsors} />
        </div>
      </main>

      <BottomNav />
    </>
  )
}
