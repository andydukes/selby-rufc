export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-selby-green to-selby-green/80">
      <div className="max-w-md w-full bg-selby-cream rounded-lg shadow-xl p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-selby-green mb-4">
            Selby Rugby App
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Digital match day program for Selby RUFC
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h2 className="text-selby-red font-semibold mb-2">Status</h2>
              <p className="text-gray-600">Phase 0: Initial Setup In Progress</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h2 className="text-selby-red font-semibold mb-2">Coming Soon</h2>
              <ul className="text-left text-gray-600 space-y-1">
                <li>• Team Sheets</li>
                <li>• Player Profiles</li>
                <li>• Sponsor Integration</li>
                <li>• Match Day Updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
