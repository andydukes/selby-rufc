# Selby Rugby App

A Progressive Web App (PWA) that replaces traditional paper match day programs for Selby RUFC. Spectators scan QR codes at ground entrance to access real-time team sheets, player profiles with sponsor integration, club updates, and an engaging mobile experience.

## Overview

The Selby Rugby App provides digital match day programs for 22 teams across Selby RUFC (men's, ladies, and junior squads), delivering a modern match day experience with low maintenance costs and empowering non-technical staff to manage content through an intuitive CMS.

**Current Status:** Phase 0 - Initial Setup

## Key Features

- **Team Sheets** - Real-time lineups with last-minute updates (15 starters + 8 subs)
- **Player Profiles** - Photos, bios, stats, and social media links
- **Sponsor Integration** - Carousel display and full-page advertisements
- **QR Code Access** - Instant mobile viewing without app store downloads
- **Content Management** - Non-technical CMS for club staff (Payload CMS)
- **Progressive Web App** - Installable, offline support, fast loading

## Tech Stack

- **Frontend:** Next.js 14+ (App Router), React, TypeScript
- **Styling:** Tailwind CSS, Shadcn UI components
- **Icons:** Lucide React
- **CMS:** Payload CMS (self-hosted)
- **Database:** MongoDB or PostgreSQL (TBD)
- **Hosting:** Vercel (frontend), TBD (CMS)

## Project Structure

```
/
├── app/              # Next.js App Router pages
├── components/       # Reusable UI components
├── lib/              # Utility functions and helpers
├── types/            # TypeScript type definitions
├── public/           # Static assets (images, icons)
├── docs/             # Project documentation
│   ├── selby-rugby-app-prd.md
│   └── project-status.md
└── CLAUDE.md         # Claude Code guidance
```

## Getting Started

**Prerequisites:**
- Node.js 18+ and npm/yarn/pnpm
- Git

**Installation:**

```bash
# Clone the repository
git clone https://github.com/andydukes/ian-spec-kit.git
cd ian-spec-kit

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
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

### Phase 0: Project Setup ⏳ (Current)
- [x] PRD and documentation
- [x] Repository setup
- [ ] Next.js initialization
- [ ] Tailwind CSS and Shadcn UI
- [ ] Development tooling

### Phase 1: Core Frontend
- Bottom tab navigation (5 tabs)
- Header with Selby RUFC logo
- Responsive mobile-first design

### Phase 2: Payload CMS
- Database and collections setup
- Data models (Teams, Players, Matches, Sponsors, Content)
- Role-based access control

### Phase 3: MVP Features
- Match day display
- Team sheets
- Player profiles
- Sponsor integration
- Club content pages

### Phase 4-9: API Integration → Testing → Deployment → Launch

See [Project Status](/docs/project-status.md) for detailed task breakdown.

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
