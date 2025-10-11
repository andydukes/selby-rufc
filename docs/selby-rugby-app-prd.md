# Product Requirements Document: Selby Rugby App

**Version:** 1.0
**Last Updated:** 2025-10-11
**Status:** Draft

---

## 1. Elevator Pitch

The Selby Rugby App replaces traditional paper match day programs with an interactive Progressive Web App that spectators access by scanning a QR code at ground entrance. Fans get real-time team sheets, player profiles with sponsor integration, club updates, and an engaging mobile experience—while club administrators can update lineups and content instantly from their phones. Built for Selby RUFC's 22 teams across men's, ladies, and junior squads, it delivers a modern match day experience with low maintenance costs and empowers non-technical staff to manage content through an intuitive CMS.

---

## 2. Who is this app for

### Primary Users
- **Match Day Spectators** - Fans attending Selby RUFC matches who scan QR codes at entry to access the digital program on their mobile devices
- **Club Members** - Regular supporters seeking detailed team information, player profiles, and club updates
- **Parents & Families** - Guardians of junior players (U12-U18) wanting to follow their children's teams

### Secondary Users
- **Sponsors** - Local businesses sponsoring players or the club who need their branding displayed and linked to promotional material
- **Content Editors** - Club secretary and team managers responsible for updating team sheets, player information, and match details
- **Club Leadership** - Chairman and committee members communicating with the community through announcements

### User Context
- Users are predominantly mobile-first, accessing the app at the ground during matches
- Limited technical expertise expected; must work seamlessly without app store downloads
- Multi-generational audience from parents of U12 players to veteran supporters
- Sponsors range from small local businesses to regional brands

---

## 3. Functional Requirements

### 3.1 Core Features (MVP - Version 1)

#### Match Day Display
- Display "Today's Match" with opponent name, kick-off time, ground information, and weather conditions
- Support for all 22 teams: 4 men's, 1 ladies, 4 junior girls, 6 junior boys, 7 U12 teams
- Auto-refresh to pull latest data from database on initial access, then cache for performance

#### Team Sheets
- Show complete lineup: 15 starting players (numbered 1-15) plus 8 substitutes (numbered 16-23)
- Organize by position groups (Forwards, Backs)
- Display player numbers, names, and associated sponsor logos
- Last-minute lineup changes updateable by editors from mobile devices

#### Player Profiles
- Individual profile pages containing:
  - Player photo (circular format per design mockup)
  - Position
  - Player statistics
  - Biography
  - Social media links
  - Sponsor logo (if player has individual sponsor) linking to sponsor's full-page advertisement

#### Sponsor Integration
- **Two sponsor types:**
  - **Club sponsors** - Logo displayed in sponsor carousel/sections
  - **Player sponsors** - Logo appears on specific player cards and profiles
- Each sponsor provides:
  - Logo image (dimensions TBD for optimal display)
  - Full-page JPEG advertisement with specified dimensions
- Sponsor logo clicks open full-page JPEG in modal or new view
- Sponsor carousel on home page featuring club sponsors
- Dedicated "Sponsors & Offers" section

#### Club & Community Content
- Chairman's Welcome message
- Juniors Update section
- General club announcements and community news
- Editable through CMS

#### Content Management System (Payload CMS)
- Non-technical editor interface for club secretary and team managers
- Content types:
  - Teams and matches
  - Player profiles
  - Sponsors (with image upload)
  - Club content pages
- Sponsor upload capability with format validation
- Audit trail of all content changes
- Role-based access control

#### Progressive Web App (PWA)
- Installable to home screen (optional for users)
- Works offline with cached data
- Fast loading with optimized images
- Responsive design optimized for mobile phones

#### Navigation & UI
- Bottom tab navigation with 5 sections:
  - **Home** - Today's match, sponsors, highlights
  - **Team** - Team sheets and selection
  - **Live** - Placeholder for future live scores
  - **Sponsors** - Full sponsor directory and offers
  - **Club** - Community content and information
- Top header with Selby RUFC logo and menu icon
- Color scheme: Dark green primary, red/burgundy section headers, gold accents, cream content cards

### 3.2 Phase 2 Features (Post-MVP)

- **Real-Time Scores** - Live score updates during matches (manual entry by editors)
- **Interactive Polls** - Player of the Match voting
- **Raffles & Promotions** - QR code-based raffle entries
- **Video Embeds** - Short highlight clips and social media embeds
- **Member Sign-In** - Optional authentication for members and sponsors
- **Payments & Donations** - Stripe integration for club fundraising
- **Analytics Dashboard** - Track page views, popular players, sponsor impressions

---

## 4. User Stories

### Spectator Stories
- **As a spectator**, I scan a QR code at the gate so I can instantly access today's match program on my phone
- **As a fan**, I view the team sheet to see who's playing today and check if my favorite player is in the starting lineup
- **As a parent**, I click on my child's name to see their player profile with photo and stats
- **As a curious supporter**, I tap a sponsor logo on a player card to view their full advertisement and learn about local businesses
- **As a club member**, I read the Chairman's Welcome and Juniors Update to stay connected with the community
- **As a mobile user**, I navigate between Home, Team, Sponsors, and Club sections using the bottom tab bar

### Editor Stories
- **As a team manager**, I log into the CMS on my phone 30 minutes before kick-off to update the team sheet with last-minute changes
- **As a club secretary**, I upload a new sponsor's logo and JPEG advertisement, then link them to their sponsored player
- **As an editor**, I update the "Today's Match" opponent and kick-off time for this weekend's fixture
- **As a content manager**, I edit the Chairman's Welcome message for the new season without needing technical help
- **As an administrator**, I review the audit trail to see who made recent changes to player profiles

### Sponsor Stories
- **As a sponsor**, I see my logo displayed on my sponsored player's card so spectators know I support the club
- **As a business owner**, I provide a full-page JPEG advertisement that fans can view when they tap my logo
- **As a club sponsor**, my logo appears in the sponsor carousel on the home page alongside other supporters

---

## 5. User Interface

### Design System

#### Color Palette
- **Primary Green:** Dark green (#1a5f3f approximate) - header background, navigation, primary elements
- **Accent Red/Burgundy:** (#9b2c2c approximate) - section headers, call-to-action backgrounds
- **Gold/Yellow:** (#f4a613 approximate) - logo accents, highlights, active states
- **Cream/Beige:** (#f5f1e8 approximate) - content card backgrounds
- **Dark Gray:** Text on light backgrounds
- **White:** Text on dark backgrounds

#### Typography
- Sans-serif typeface for readability on mobile
- Bold weights for headers and section titles
- Clear hierarchy: H1 (page titles), H2 (section headers), body text

#### Components (Shadcn UI-based)

**Navigation Bar (Bottom)**
- Fixed position with 5 tabs: Home | Team | Live | Sponsors | Club
- Active state highlighted in gold
- Lucide icons for each section

**Header (Top)**
- Selby RUFC logo (gold stag on green shield) left-aligned
- Club name "SELBY RUFC" in gold text
- Hamburger menu icon right-aligned

**Match Day Hero Card**
- Red/burgundy background
- White text: "TODAY'S MATCH"
- Match details: "Selby RUFC vs [Opponent]"
- Kick-off time
- Secondary info: Ground Info • Weather
- Sponsor carousel below (3 sponsor logos visible, horizontal scroll)

**Team Sheet Section**
- Red header: "TEAM SHEETS"
- Position group labels (Forwards, Backs)
- Player list items: Number + Name (e.g., "1 James Smith")
- Tappable to open player card modal

**Player Card (Modal/Overlay)**
- Player photo (circular) top-center
- Player name large and bold
- Sponsor logo below photo (if applicable)
- Personalized message: "Have a great game, [Name]!"
- Gold "View Profile" button
- Smooth slide-up animation

**Live Match Center Section**
- Red header: "LIVE MATCH CENTRE"
- Events displayed: "Kick-off!", "Half-time: Selby 14 - 7 Opponent"
- Right-pointing chevron for expandable details
- Phase 2: Real-time score updates

**Sponsors & Offers Section**
- Red header: "SPONSORS & OFFERS"
- Grid layout with sponsor logos (3 per row on mobile)
- Tappable logos open full-page JPEG advertisements

**Club & Community Section**
- Red header: "CLUB & COMMUNITY"
- Content cards: "Chairman's Welcome", "Juniors Update"
- Cream backgrounds with dark text

#### Responsive Behavior
- Mobile-first design (320px - 768px primary viewport)
- Content cards stack vertically
- Horizontal scrolling for sponsor carousels
- Modal overlays for player profiles and sponsor ads
- Touch-friendly tap targets (minimum 44px)

#### Animations & Interactions
- Smooth page transitions
- Slide-up player card modals
- Fade-in for content loading
- Haptic feedback for tap interactions (where supported)
- Toast notifications (Sonner) for confirmations

#### Accessibility
- Sufficient color contrast ratios (WCAG AA minimum)
- Alt text for all images
- Keyboard navigation support
- Screen reader compatibility
- Focus states visible for interactive elements

### Example User Flows

**Flow 1: View Today's Match & Player Profile**
1. User scans QR code → App opens to Home page
2. Sees "Today's Match" hero card with opponent and kick-off time
3. Scrolls to "TEAM SHEETS" section
4. Taps "1 James Smith" in Forwards list
5. Player card modal slides up showing photo, sponsor logo, and "View Profile" button
6. Taps "View Profile"
7. Full player profile page loads with stats, bio, social links

**Flow 2: Explore Sponsor Offer**
1. User on Home page
2. Taps sponsor logo in carousel (e.g., "Red Rowley Estates")
3. Full-page JPEG advertisement opens in modal
4. User views offer details
5. Dismisses modal to return to Home

**Flow 3: Editor Updates Team Sheet**
1. Team manager opens admin.selbyrugby.app (Payload CMS)
2. Logs in with credentials
3. Navigates to "Matches" → Selects today's match
4. Edits "Team Sheet" field, swaps player #10 with #20
5. Saves changes
6. Audit log records update with timestamp and editor name
7. Change reflected immediately on public app

---

## Technical Architecture

### Technology Stack
- **Frontend:** Next.js 14+ (App Router), React, TypeScript
- **Styling:** Tailwind CSS, Shadcn UI components
- **Icons:** Lucide React
- **Notifications:** Sonner (toast notifications)
- **CMS:** Payload CMS (self-hosted)
- **Database:** MongoDB or PostgreSQL (Payload supports both)
- **Hosting:** Vercel (frontend), Vercel/Railway/DigitalOcean (Payload CMS)
- **Authentication (Phase 2):** Better-Auth or Clerk
- **Payments (Phase 2):** Stripe
- **Media Storage:** Vercel Blob or Cloudinary for sponsor images

### Data Model (Key Collections)

**Teams**
- team_id, name, category (men's, ladies, juniors), age_group, logo

**Players**
- player_id, team_id, name, number, position, photo_url, bio, stats (JSON), social_links (JSON), sponsor_id (nullable)

**Matches**
- match_id, team_id, opponent, kick_off_time, ground_info, weather, team_sheet (array of player_ids), status (scheduled, live, completed)

**Sponsors**
- sponsor_id, name, logo_url, ad_jpeg_url, type (club/player), linked_player_id (nullable)

**Content**
- content_id, slug, title, body (rich text), section (club, community), published_date

### QR Code Implementation
- QR code encodes URL: `https://app.selbyrugby.com`
- Lands on Home page
- Optional: Future deep links for specific matches/teams

---

## Success Metrics

### MVP Launch Targets
- 80%+ of match day spectators scan QR code and access app
- Average session duration > 3 minutes
- Editors successfully update team sheets without technical support
- Zero critical bugs reported in first 4 weeks
- Sponsor satisfaction: 90%+ report positive feedback on visibility

### Phase 2 KPIs
- Poll participation rate > 40% of app users
- Payment/donation conversion > 5% of users
- Real-time score feature used in 100% of matches

---

## Constraints & Assumptions

### Constraints
- Low ongoing cost/maintenance budget - favor self-hosted or free-tier solutions
- Non-technical editors must manage content independently
- Must work on all modern mobile browsers without app store installation
- Initial development timeline: TBD (dependent on developer availability)

### Assumptions
- Selby RUFC has reliable Wi-Fi or cellular coverage at the ground
- Spectators have smartphones capable of scanning QR codes
- Sponsors will provide image assets in specified formats
- Club has rights to use player photos and sponsor logos
- MongoDB or PostgreSQL database hosting available at low cost

---

## Open Questions & Future Considerations
- **Match scheduling:** How far in advance are team sheets finalized?
- **Multi-match days:** If multiple teams play on same day, how does "Today's Match" handle this? (Future: team selector)
- **Offline mode:** Should full functionality work offline, or just read-only cached data?
- **Push notifications:** Future opt-in for score updates, lineup announcements?
- **Junior team privacy:** Any restrictions on displaying U12 player photos/names?

---

## Appendix: Reference Materials
- **Design Mockup:** `/selby-rufc-design-idea-and-club-colours.jpg`
- **Club Website:** [Insert URL if available]
- **Sponsor Requirements:** [To be documented with image dimension specifications]
