# Project Status

**Last Updated:** 2025-10-11
**Current Phase:** Planning Complete - Ready for Initial Setup

Living to-do list for the Selby Rugby App build. This document tracks progress through all development phases.

---

## Phase 0: Project Setup & Infrastructure

### Repository & Documentation
- [x] Create PRD document
- [x] Update CLAUDE.md with project context
- [x] Set up GitHub repository
- [ ] Commit initial documentation (PRD, CLAUDE.md, project-status.md)
- [ ] Create README.md for public repository overview.

### Development Environment
- [ ] Initialize Next.js 14+ project with TypeScript
- [ ] Configure App Router structure
- [ ] Set up Tailwind CSS
- [ ] Install and configure Shadcn UI
- [ ] Install Lucide React icons
- [ ] Install Sonner for toast notifications
- [ ] Configure TypeScript strict mode
- [ ] Set up ESLint and Prettier

### Version Control & CI/CD
- [ ] Set up .gitignore for Next.js/Node.js
- [ ] Configure GitHub Actions for CI (lint, type-check, build)
- [ ] Set up branch protection rules (optional)

---

## Phase 1: Core Frontend Structure

### Project Structure
- [ ] Create folder structure:
  - `/app` - Next.js App Router pages
  - `/components` - Reusable UI components
  - `/lib` - Utility functions and helpers
  - `/types` - TypeScript type definitions
  - `/public` - Static assets (images, icons)
  - `/styles` - Global styles and Tailwind config

### Design System Implementation
- [ ] Configure Tailwind with Selby RUFC color palette:
  - Primary Green: #1a5f3f
  - Accent Red/Burgundy: #9b2c2c
  - Gold/Yellow: #f4a613
  - Cream/Beige: #f5f1e8
- [ ] Create base Shadcn UI theme configuration
- [ ] Build core UI components:
  - [ ] Header (logo, menu icon)
  - [ ] Bottom tab navigation (5 tabs)
  - [ ] Match day hero card
  - [ ] Player card modal
  - [ ] Sponsor carousel
  - [ ] Content cards (cream background)

### Core Layout
- [ ] Create root layout with header and bottom nav
- [ ] Implement responsive mobile-first design (320px-768px)
- [ ] Set up page transitions and animations
- [ ] Configure PWA manifest.json
- [ ] Add service worker for offline support

---

## Phase 2: Payload CMS Setup

### CMS Installation & Configuration
- [ ] Choose database: MongoDB or PostgreSQL
- [ ] Install Payload CMS
- [ ] Configure Payload with chosen database
- [ ] Set up admin panel UI customization (Selby branding)
- [ ] Configure media upload (Vercel Blob or Cloudinary)

### Data Collections & Schema
- [ ] Create **Teams** collection:
  - Fields: team_id, name, category, age_group, logo
  - Validation rules
- [ ] Create **Players** collection:
  - Fields: player_id, team_id, name, number, position, photo_url, bio, stats (JSON), social_links (JSON), sponsor_id
  - Relationship to Teams
  - Optional relationship to Sponsors
- [ ] Create **Matches** collection:
  - Fields: match_id, team_id, opponent, kick_off_time, ground_info, weather, team_sheet (array), status
  - Relationship to Teams and Players
- [ ] Create **Sponsors** collection:
  - Fields: sponsor_id, name, logo_url, ad_jpeg_url, type, linked_player_id
  - Image upload with validation (dimensions/formats)
- [ ] Create **Content** collection:
  - Fields: content_id, slug, title, body (rich text), section, published_date
  - Rich text editor configuration

### CMS Access Control
- [ ] Set up role-based permissions (admin, editor, viewer)
- [ ] Configure audit logging
- [ ] Create initial admin user account
- [ ] Document editor workflows

---

## Phase 3: MVP Features - Frontend Implementation

### Home Page
- [ ] Build "Today's Match" hero section
  - [ ] Display opponent name, kick-off time
  - [ ] Show ground info and weather
  - [ ] Auto-refresh data on load
- [ ] Implement sponsor carousel
  - [ ] Horizontal scroll with 3 visible logos
  - [ ] Fetch club sponsors from CMS
  - [ ] Click opens full-page JPEG ad in modal
- [ ] Add highlights/quick links section

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

## Phase 4: API Integration & Data Flow

### Payload CMS API Integration
- [ ] Set up REST or GraphQL client for CMS
- [ ] Create API route handlers in Next.js:
  - [ ] `/api/matches/today` - Get today's match
  - [ ] `/api/teams/[id]` - Get team details
  - [ ] `/api/players/[id]` - Get player profile
  - [ ] `/api/sponsors` - Get all sponsors
  - [ ] `/api/content/[slug]` - Get content by slug
- [ ] Implement data fetching with caching strategy
- [ ] Add loading states and skeletons
- [ ] Error handling and fallback UI

### Image Optimization
- [ ] Configure Next.js Image component for all images
- [ ] Set up image optimization pipeline
- [ ] Implement lazy loading for player photos
- [ ] Optimize sponsor logo sizes

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

### Decisions Pending
- Database choice: MongoDB vs PostgreSQL
- Media storage: Vercel Blob vs Cloudinary
- CMS hosting platform: Vercel vs Railway vs DigitalOcean
- Domain registration: `selbyrugby.com` vs alternative
- Junior team privacy: Photo/name display restrictions for U12 teams

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
