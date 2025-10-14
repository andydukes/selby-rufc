import { Header } from '@/components/header'
import { BottomNav } from '@/components/bottom-nav'
import { SectionHeader } from '@/components/section-header'
import { ContentCard } from '@/components/content-card'
import { getContentBySection } from '@/lib/payload'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const revalidate = 300 // Revalidate every 5 minutes

export default async function ClubPage() {
  // Fetch content for each section
  const chairmansWelcome = await getContentBySection('chairmans-welcome')
  const juniorsUpdate = await getContentBySection('juniors-update')
  const clubNews = await getContentBySection('club-news')

  return (
    <>
      <Header />

      <main className="flex-1 bg-selby-green pb-20">
        <div className="max-w-screen-md mx-auto px-4 py-4 space-y-4">
          {/* Chairman's Welcome */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <SectionHeader title="CHAIRMAN'S WELCOME" />
            <ContentCard>
              {chairmansWelcome ? (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {chairmansWelcome.title}
                  </h2>
                  {chairmansWelcome.excerpt && (
                    <p className="text-gray-600 italic mb-4">
                      {chairmansWelcome.excerpt}
                    </p>
                  )}
                  <div className="prose prose-sm max-w-none text-gray-700">
                    <RichText data={chairmansWelcome.body} />
                  </div>
                  {(chairmansWelcome.author || chairmansWelcome.publishedDate) && (
                    <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-500">
                      {chairmansWelcome.author && <span>{chairmansWelcome.author}</span>}
                      {chairmansWelcome.author && chairmansWelcome.publishedDate && <span> • </span>}
                      {chairmansWelcome.publishedDate && (
                        <span>
                          {new Date(chairmansWelcome.publishedDate).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-600 text-sm">
                  Content coming soon from the club chairman...
                </p>
              )}
            </ContentCard>
          </div>

          {/* Juniors Update */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <SectionHeader title="JUNIORS UPDATE" />
            <ContentCard>
              {juniorsUpdate ? (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {juniorsUpdate.title}
                  </h2>
                  {juniorsUpdate.excerpt && (
                    <p className="text-gray-600 italic mb-4">
                      {juniorsUpdate.excerpt}
                    </p>
                  )}
                  <div className="prose prose-sm max-w-none text-gray-700">
                    <RichText data={juniorsUpdate.body} />
                  </div>
                  {(juniorsUpdate.author || juniorsUpdate.publishedDate) && (
                    <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-500">
                      {juniorsUpdate.author && <span>{juniorsUpdate.author}</span>}
                      {juniorsUpdate.author && juniorsUpdate.publishedDate && <span> • </span>}
                      {juniorsUpdate.publishedDate && (
                        <span>
                          {new Date(juniorsUpdate.publishedDate).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-600 text-sm">
                  Updates coming soon from our junior team managers...
                </p>
              )}
            </ContentCard>
          </div>

          {/* Club News */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <SectionHeader title="CLUB NEWS" />
            <ContentCard>
              {clubNews ? (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {clubNews.title}
                  </h2>
                  {clubNews.excerpt && (
                    <p className="text-gray-600 italic mb-4">{clubNews.excerpt}</p>
                  )}
                  <div className="prose prose-sm max-w-none text-gray-700">
                    <RichText data={clubNews.body} />
                  </div>
                  {(clubNews.author || clubNews.publishedDate) && (
                    <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-500">
                      {clubNews.author && <span>{clubNews.author}</span>}
                      {clubNews.author && clubNews.publishedDate && <span> • </span>}
                      {clubNews.publishedDate && (
                        <span>
                          {new Date(clubNews.publishedDate).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-600 text-sm">
                  Club announcements and news will be posted here...
                </p>
              )}
            </ContentCard>
          </div>
        </div>
      </main>

      <BottomNav />
    </>
  )
}
