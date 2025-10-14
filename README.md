# Selby Rugby App

A Progressive Web App (PWA) that replaces traditional paper match day programs for Selby RUFC. Spectators scan QR codes at ground entrance to access real-time team sheets, player profiles with sponsor integration, club updates, and an engaging mobile experience.

## Overview

The Selby Rugby App provides digital match day programs for 22 teams across Selby RUFC (men's, ladies, and junior squads), delivering a modern match day experience with low maintenance costs and empowering non-technical staff to manage content through an intuitive CMS.

**Current Status:** Phase 3 MVP Features - 5 of 6 Pages Complete ✅

## Recent Updates

**October 2025:**
- ✅ Club & Community page with Lexical rich text rendering
- ✅ Sponsors & Offers page with tiered layout and animations
- ✅ Player profile pages with full stats and sponsor integration
- ✅ Team sheet page with interactive player cards
- ✅ Home page with real CMS data integration
- ✅ Payload CMS backend with 7 collections

## Key Features

- **Team Sheets** - Real-time lineups with last-minute updates (15 starters + 8 subs)
- **Player Profiles** - Photos, bios, stats, and social media links
- **Sponsor Integration** - Carousel display and full-page advertisements
- **QR Code Access** - Instant mobile viewing without app store downloads
- **Content Management** - Non-technical CMS for club staff (Payload CMS)
- **Progressive Web App** - Installable, offline support, fast loading

## Tech Stack

- **Frontend:** Next.js 15 (App Router), React, TypeScript
- **Styling:** Tailwind CSS, Shadcn UI components
- **Icons:** Lucide React
- **Notifications:** Sonner (toast notifications)
- **CMS:** Payload CMS (self-hosted with Lexical rich text editor)
- **Database:** MongoDB (@payloadcms/db-mongodb)
- **Package Manager:** pnpm
- **Hosting:** Vercel (planned)

## Project Structure

```
/
├── app/
│   ├── (frontend)/   # Public-facing pages (Home, Team, Player, Sponsors, Club, Live)
│   └── (payload)/    # CMS admin panel and API routes
├── collections/      # Payload CMS collection schemas
├── components/       # Reusable UI components
├── lib/              # Utility functions and helpers (payload.ts, etc.)
├── public/           # Static assets (images, icons)
├── media/            # CMS uploaded media files
├── docs/             # Project documentation
│   ├── selby-rugby-app-prd.md
│   └── project-status.md
├── payload-types.ts  # Auto-generated TypeScript types
└── CLAUDE.md         # Claude Code guidance
```

## Getting Started

**Prerequisites:**
- Node.js 18+
- pnpm (preferred) or npm
- Git
- MongoDB instance (local or cloud)

**Installation:**

```bash
# Clone the repository
git clone https://github.com/andydukes/ian-spec-kit.git
cd ian-spec-kit

# Install dependencies
pnpm install

# Set up environment variables
# Create a .env file with:
# - DATABASE_URI (MongoDB connection string)
# - PAYLOAD_SECRET (random secret for Payload CMS)
# - NEXT_PUBLIC_PAYLOAD_URL (http://localhost:3000 for local dev)

# Run development server
pnpm dev

# Open http://localhost:3000 for the app
# Open http://localhost:3000/admin for CMS admin panel
```

## Documentation

- **[Product Requirements Document](/docs/selby-rugby-app-prd.md)** - Complete feature specifications and user stories
- **[Project Status](/docs/project-status.md)** - Living todo list tracking development progress
- **[CLAUDE.md](/CLAUDE.md)** - Guidance for Claude Code and developers

## Design System

**Color Palette:**
- Primary Green: `#1a5f3f` (header, navigation)
- Accent Red/Burgundy: `#9b2c2c` (section headers, CTAs)
- Gold/Yellow: `#f4a613` (logo accents, highlights)
- Cream/Beige: `#f5f1e8` (content cards)

**Design Reference:** `/selby-rufc-design-idea-and-club-colours.jpg`

## Development Roadmap

### Phase 0: Project Setup ✅ Complete
- [x] PRD and documentation
- [x] Repository setup
- [x] Next.js 15 initialization with TypeScript
- [x] Tailwind CSS and Shadcn UI configuration
- [x] Development tooling (ESLint, Prettier)

### Phase 1: Core Frontend ✅ Complete
- [x] Bottom tab navigation (5 tabs: Home | Team | Live | Sponsors | Club)
- [x] Header with Selby RUFC logo
- [x] Responsive mobile-first design (320px-768px)
- [x] Core UI components (ContentCard, SectionHeader, etc.)

### Phase 2: Payload CMS ✅ Complete
- [x] MongoDB database integration
- [x] 7 collections implemented (Teams, Players, Matches, Sponsors, Content, Media, Users)
- [x] Lexical rich text editor configured
- [x] Role-based access control (admin, editor, viewer)
- [x] Admin panel at `/admin`
- [x] REST and GraphQL APIs

### Phase 3: MVP Features ⏳ In Progress (5 of 6 Complete)
- [x] **Home Page** - Today's match, sponsor carousel, team preview
- [x] **Team Sheet Page** - Full roster display with position groups
- [x] **Player Profile Page** - Stats, bio, social links, sponsor integration
- [x] **Sponsors & Offers Page** - Tiered layout with animations (Club/Team/Player)
- [x] **Club & Community Page** - Chairman's Welcome, Juniors Update, Club News with Lexical rich text
- [ ] **Live Match Centre** - Placeholder for Phase 2 live scores

### Phase 4: API Integration & Data Flow (Partially Complete)
- [x] Payload CMS REST API utilities (lib/payload.ts)
- [x] Data fetching with Next.js 15 cache strategies
- [x] Image optimization and responsive images
- [ ] Loading states and skeletons
- [ ] Additional API endpoints

### Phase 5-9: PWA → Testing → Deployment → Launch

See [Project Status](/docs/project-status.md) for detailed task breakdown and recent milestones.

## Contributing

This is currently a private project for Selby RUFC. If you have questions or suggestions, please contact the project maintainer.

## License

Private project - All rights reserved.

## Contact

For questions about this project, please contact:
- Project Owner: Andrew Dukes
- GitHub: [@andydukes](https://github.com/andydukes)

---

Built with Claude Code • Powered by Next.js and Payload CMS
