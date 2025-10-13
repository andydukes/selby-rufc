# Project Status

**Last Updated:** 2025-10-13
**Current Phase:** Phase 3 Home Page Complete - MVP Features In Progress

Living to-do list for the Selby Rugby App build. This document tracks progress through all development phases.

## Recent Milestones

### 2025-10-13: Home Page with Real CMS Data Integration ✅
- ✅ Created Payload API utilities (`lib/payload.ts`) for data fetching with caching
- ✅ Implemented sponsor carousel with real CMS data and full-page ad modals
- ✅ Updated team sheet component to display real player data from matches
- ✅ Added quick navigation links to Team and Club pages
- ✅ Configured Next.js image optimization for CMS media
- ✅ Improved accessibility with proper dialog titles and screen reader support
- ✅ Added Dialog and VisuallyHidden UI components
- 📝 Committed and pushed to GitHub (commit: d4fd456)

**Next:** Complete remaining Phase 3 pages (Team Sheet, Player Profile, Sponsors, Club & Community)

### 2025-10-13: Payload CMS Backend Complete
- ✅ Integrated Payload CMS with MongoDB
- ✅ Implemented all 7 data collections (Teams, Players, Matches, Sponsors, Content, Media, Users)
- ✅ Set up admin panel at `/admin` with REST and GraphQL APIs
- ✅ Reorganized app structure with route groups `(frontend)` and `(payload)`
- ✅ Migrated from npm to pnpm
- ✅ All core UI components built and tested
- 📝 Committed and pushed to GitHub (commit: 21df8a8)

---

## Phase 0: Project Setup & Infrastructure ✅ COMPLETE

### Repository & Documentation
- [x] Create PRD document
- [x] Update CLAUDE.md with project context
- [x] Set up GitHub repository
- [x] Commit initial documentation (PRD, CLAUDE.md, project-status.md)
- [x] Create README.md for public repository overview

### Development Environment
- [x] Initialize Next.js 14+ project with TypeScript
- [x] Configure App Router structure
- [x] Set up Tailwind CSS
- [x] Install and configure Shadcn UI
- [x] Install Lucide React icons
- [x] Install Sonner for toast notifications
- [x] Configure TypeScript strict mode
- [x] Set up ESLint and Prettier

### Version Control & CI/CD
- [x] Set up .gitignore for Next.js/Node.js
- [ ] Configure GitHub Actions for CI (lint, type-check, build)
- [ ] Set up branch protection rules (optional)

---

## Phase 1: Core Frontend Structure ✅ COMPLETE

### Project Structure
- [x] Create folder structure:
  - `/app` - Next.js App Router pages (organized with route groups)
  - `/components` - Reusable UI components
  - `/lib` - Utility functions and helpers
  - `/types` - TypeScript type definitions
  - `/public` - Static assets (images, icons)
- [x] Implement route groups:
  - `app/(frontend)` - Public-facing pages
  - `app/(payload)` - CMS admin and API routes

### Design System Implementation
- [x] Configure Tailwind with Selby RUFC color palette:
  - Primary Green: #1a5f3f
  - Accent Red/Burgundy: #9b2c2c
  - Gold/Yellow: #f4a613
  - Cream/Beige: #f5f1e8
- [x] Create base Shadcn UI theme configuration
- [x] Build core UI components:
  - [x] Header (logo, menu icon) - `components/header.tsx`
  - [x] Bottom tab navigation (5 tabs) - `components/bottom-nav.tsx`
  - [x] Match day hero card - `components/match-hero.tsx`
  - [x] Player card modal - (via TeamSheet component)
  - [x] Sponsor carousel - `components/sponsor-carousel.tsx`
  - [x] Content cards (cream background) - `components/content-card.tsx`
  - [x] Section headers - `components/section-header.tsx`
  - [x] Team sheet - `components/team-sheet.tsx`

### Core Layout
- [x] Create root layout with header and bottom nav - `app/(frontend)/layout.tsx`
- [x] Implement responsive mobile-first design (320px-768px)
- [ ] Set up page transitions and animations
- [x] Configure PWA manifest.json - Configured in layout metadata
- [ ] Add service worker for offline support

---

## Phase 2: Payload CMS Setup ✅ COMPLETE

### CMS Installation & Configuration
- [x] Choose database: MongoDB - Using @payloadcms/db-mongodb adapter
- [x] Install Payload CMS
- [x] Configure Payload with chosen database - `payload.config.ts`
- [x] Set up admin panel at `/admin` - `app/(payload)/admin/[[...segments]]/page.tsx`
- [x] Configure media upload - Local media collection with /media directory
- [x] Set up REST API - `app/(payload)/api/[...slug]/route.ts`
- [x] Set up GraphQL API - `app/(payload)/api/graphql/route.ts`
- [x] Configure Lexical rich text editor

### Data Collections & Schema
- [x] Create **Teams** collection - `collections/Teams.ts`:
  - Fields: name, category, ageGroup, logo, description, active
  - Categories: men's, ladies, junior girls, junior boys
  - Validation rules implemented
- [x] Create **Players** collection - `collections/Players.ts`:
  - Fields: firstName, lastName, jerseyNumber, position, bio, stats, socialLinks
  - Relationships to Teams and Sponsors
  - Stats: appearances, tries, conversions, penalties, points
  - Social links: instagram, twitter, facebook
- [x] Create **Matches** collection - `collections/Matches.ts`:
  - Fields: team, opponent, kickOffTime, groundInfo, weather, teamSheet, score, status, events
  - Status: scheduled, live, halftime, fulltime, cancelled
  - Team sheet with relationships to Players
  - Events array for live updates
- [x] Create **Sponsors** collection - `collections/Sponsors.ts`:
  - Fields: name, logo, fullPageAd, type, linkedPlayer, displayOrder, active
  - Types: club, player
  - Image upload relationships
- [x] Create **Content** collection - `collections/Content.ts`:
  - Fields: slug, title, body (Lexical), section, publishedDate, featured
  - Sections: chairmans-welcome, juniors-update, club-news, community, general
  - Rich text editor with Lexical
- [x] Create **Media** collection - `collections/Media.ts`:
  - Image upload to /media directory
  - Auto-generated sizes: thumbnail (400x300), card (768x1024), tablet (1024px)
  - Alt text and caption fields
- [x] Create **Users** collection - `collections/Users.ts`:
  - Built-in auth system
  - Roles: admin, editor, viewer
  - Email and password authentication

### CMS Access Control
- [x] Set up role-based permissions (admin, editor, viewer) - Configured in Users collection
- [x] Create Users collection with auth - `collections/Users.ts`
- [x] Document CMS setup - `docs/payload-cms-setup.md`
- [ ] Configure audit logging
- [ ] Document editor workflows for club staff

---

## Phase 3: MVP Features - Frontend Implementation (IN PROGRESS)

### Home Page ✅ COMPLETE
- [x] Build "Today's Match" hero section
  - [x] Display opponent name, kick-off time
  - [x] Show ground info and weather
  - [x] Auto-refresh data on load (60s cache revalidation)
- [x] Implement sponsor carousel
  - [x] Horizontal scroll with sponsor logos
  - [x] Fetch club sponsors from CMS
  - [x] Click opens full-page JPEG ad in modal
- [x] Add highlights/quick links section
- [x] Display team sheet with real player data from CMS
  - [x] Show forwards (1-8) and backs (9-15)
  - [x] Player names, numbers, and positions
  - [x] Click to open player card modal

### Team Sheet Page
- [ ] Create team sheet layout
  - [ ] Display 15 starters (1-15) organized by position
  - [ ] Display 8 substitutes (16-23)
  - [ ] Position group headers (Forwards, Backs)
- [ ] Make player names tappable to open player card modal
- [ ] Implement player card modal:
  - [ ] Circular player photo
  - [ ] Player name and number
  - [ ] Sponsor logo (if applicable)
  - [ ] "View Profile" button
  - [ ] Smooth slide-up animation

### Player Profile Page
- [ ] Build full player profile view:
  - [ ] Player photo (circular)
  - [ ] Position and number
  - [ ] Biography section
  - [ ] Statistics display
  - [ ] Social media links
  - [ ] Sponsor logo and CTA (if applicable)
- [ ] Responsive layout for mobile
- [ ] Back navigation to team sheet

### Sponsors & Offers Page
- [ ] Create sponsor directory grid (3 per row mobile)
- [ ] Fetch all club sponsors from CMS
- [ ] Implement click to view full-page ad modal
- [ ] Add sponsor type filtering (club vs player sponsors)

### Club & Community Page
- [ ] Build content sections:
  - [ ] Chairman's Welcome
  - [ ] Juniors Update
  - [ ] General announcements
- [ ] Fetch content from CMS
- [ ] Render rich text content
- [ ] Cream card styling

### Live Match Centre Page (Placeholder)
- [ ] Create placeholder UI for Phase 2 live scores
- [ ] Display "Coming Soon" message
- [ ] Basic event timeline structure

---

## Phase 4: API Integration & Data Flow (PARTIALLY COMPLETE)

### Payload CMS API Integration
- [x] Set up REST client for CMS - Using fetch with Payload REST API
- [x] Create data fetching utilities in `lib/payload.ts`:
  - [x] `getTodaysMatch()` - Get today's match with 60s revalidation
  - [x] `getClubSponsors()` - Get all active club sponsors with 5min cache
  - [x] `getMediaUrl()` - Helper for media URL extraction
  - [x] `formatKickOffTime()` - Helper for time formatting
  - [ ] `/api/teams/[id]` - Get team details (pending)
  - [ ] `/api/players/[id]` - Get player profile (pending)
  - [ ] `/api/content/[slug]` - Get content by slug (pending)
- [x] Implement data fetching with caching strategy (Next.js 15 fetch cache)
- [ ] Add loading states and skeletons
- [x] Error handling and fallback UI

### Image Optimization
- [x] Configure Next.js Image component for all images
- [x] Set up image optimization pipeline (Next.js 15 native)
- [x] Configure remote patterns for localhost and Vercel
- [x] Implement lazy loading for player photos (Next.js Image default)
- [x] Optimize sponsor logo sizes (responsive sizes attribute)

---

## Phase 5: PWA Configuration

### Progressive Web App Features
- [ ] Configure manifest.json with app metadata:
  - [ ] App name: "Selby Rugby App"
  - [ ] Icons (multiple sizes)
  - [ ] Theme colors (Selby green/red)
  - [ ] Display mode: standalone
- [ ] Set up service worker for offline caching
- [ ] Implement cache-first strategy for static assets
- [ ] Network-first strategy for match data
- [ ] Add install prompt for "Add to Home Screen"
- [ ] Test offline functionality

---

## Phase 6: Testing & Quality Assurance

### Testing Setup
- [ ] Install testing libraries (Jest, React Testing Library)
- [ ] Write unit tests for core components
- [ ] Write integration tests for API routes
- [ ] Test mobile responsiveness (320px-768px)
- [ ] Cross-browser testing (Safari, Chrome, Firefox mobile)

### Accessibility Audit
- [ ] Check color contrast ratios (WCAG AA)
- [ ] Add alt text to all images
- [ ] Test keyboard navigation
- [ ] Test with screen readers
- [ ] Verify focus states

### Performance Optimization
- [ ] Run Lighthouse audits (target 90+ score)
- [ ] Optimize bundle size (code splitting)
- [ ] Compress images
- [ ] Implement lazy loading
- [ ] Measure and optimize Core Web Vitals

---

## Phase 7: Deployment

### Frontend Deployment (Vercel)
- [ ] Connect GitHub repo to Vercel
- [ ] Configure environment variables
- [ ] Set up preview deployments for PRs
- [ ] Deploy to production
- [ ] Configure custom domain: `app.selbyrugby.com` (TBD)

### CMS Deployment
- [ ] Choose hosting platform (Vercel/Railway/DigitalOcean)
- [ ] Deploy Payload CMS
- [ ] Set up production database
- [ ] Configure environment variables
- [ ] Secure admin panel with HTTPS
- [ ] Configure custom domain: `admin.selbyrugby.app` (TBD)

### QR Code Generation
- [ ] Generate QR code for `app.selbyrugby.com`
- [ ] Create printable QR code posters/signs
- [ ] Test QR code scanning from various devices

---

## Phase 8: Initial Content & Launch Prep

### Seed Data
- [ ] Add 5 teams (4 men's, 1 ladies) to CMS
- [ ] Add player profiles for initial teams
- [ ] Upload club sponsor logos and ads
- [ ] Upload player sponsor logos and ads
- [ ] Add Chairman's Welcome content
- [ ] Add Juniors Update content

### Editor Training
- [ ] Document CMS workflows for club staff
- [ ] Create step-by-step guides for:
  - [ ] Updating team sheets
  - [ ] Adding/editing player profiles
  - [ ] Uploading sponsor content
  - [ ] Publishing club announcements
- [ ] Train club secretary and team managers

### Soft Launch
- [ ] Deploy to production with initial content
- [ ] Test with small group of users
- [ ] Gather feedback
- [ ] Fix critical bugs
- [ ] Monitor performance and errors

---

## Phase 9: MVP Launch

### Launch Day Checklist
- [ ] Verify all 5 teams have complete rosters
- [ ] Test today's match display with real data
- [ ] Confirm all sponsor links work correctly
- [ ] Place QR codes at ground entrances
- [ ] Monitor server load during first match day
- [ ] Have support contact available

### Post-Launch Monitoring
- [ ] Track QR code scans and app usage
- [ ] Monitor error logs
- [ ] Collect user feedback
- [ ] Measure success metrics (from PRD)
- [ ] Document bugs and feature requests

---

## Phase 10: Phase 2 Features (Post-MVP)

### Future Enhancements
- [ ] **Real-Time Scores** - Manual live score updates during matches
- [ ] **Interactive Polls** - Player of the Match voting
- [ ] **Raffles & Promotions** - QR code-based raffle entries
- [ ] **Video Embeds** - Highlight clips and social media embeds
- [ ] **Member Sign-In** - Authentication (Better-Auth or Clerk)
- [ ] **Payments & Donations** - Stripe integration
- [ ] **Analytics Dashboard** - Track page views, sponsor impressions
- [ ] **Multi-Match Days** - Handle multiple simultaneous matches
- [ ] **Push Notifications** - Opt-in score updates and lineup announcements
- [ ] **Expand to All 22 Teams** - Add remaining junior teams

---

## Notes & Decisions Log

### Recent Decisions (2025-10-13)
- ✅ **Database:** MongoDB selected - Using @payloadcms/db-mongodb adapter
- ✅ **Media Storage:** Local media directory at /media (can migrate to cloud storage later)
- ✅ **Package Manager:** Migrated from npm to pnpm
- ✅ **Architecture:** Implemented Next.js route groups for clean separation:
  - `app/(frontend)` - Public pages
  - `app/(payload)` - CMS admin and API
- ✅ **Rich Text Editor:** Lexical editor (@payloadcms/richtext-lexical)
- ✅ **API Layer:** Both REST and GraphQL endpoints auto-generated by Payload
- ✅ **Data Fetching:** Using Next.js 15 native fetch with cache revalidation (no external libraries)
- ✅ **Modal System:** Using Shadcn UI Dialog component with accessibility enhancements
- ✅ **Caching Strategy:**
  - Match data: 60s revalidation for near-real-time updates
  - Sponsor data: 5min revalidation for better performance
- ✅ **Image Optimization:** Next.js 15 Image component with remote patterns configured

### Decisions Pending
- CMS hosting platform: Vercel vs Railway vs DigitalOcean
- Domain registration: `selbyrugby.com` vs alternative
- Junior team privacy: Photo/name display restrictions for U12 teams
- Media storage migration: Consider moving to Vercel Blob or Cloudinary for production

### Blockers
- None currently

### Resources Needed
- Selby RUFC logo files (high-resolution)
- Club sponsor logos and advertisements
- Initial player photos for 5 teams
- Access to match scheduling information

---

**Legend:**
- [x] Completed
- [ ] To Do
- [!] Blocked
- [~] In Progress
