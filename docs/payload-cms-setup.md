# Payload CMS Setup Guide

## Overview

Payload CMS has been successfully configured with MongoDB for the Selby Rugby App. This document provides an overview of the setup and how to use it.

## Configuration

### Environment Variables

The following environment variables are configured in `.env`:

- `DATABASE_URI`: MongoDB connection string (already configured)
- `PAYLOAD_SECRET`: Secret key for Payload CMS (change in production!)

### Database

- **Database Name**: `selby_rufc`
- **Database**: MongoDB (localhost:27017)
- **Adapter**: `@payloadcms/db-mongodb`

## Collections

The following collections have been configured:

### 1. Users
- **Purpose**: Admin users who can manage content
- **Fields**: name, email, password, role (admin/editor/viewer)
- **Auth**: Enabled

### 2. Teams
- **Purpose**: Store information about all 22 teams
- **Fields**:
  - name (text)
  - category (men's, ladies, junior girls, junior boys)
  - ageGroup (text)
  - logo (media upload)
  - description (textarea)
  - active (checkbox)

### 3. Players
- **Purpose**: Player profiles and information
- **Fields**:
  - name, number, position
  - team (relationship to Teams)
  - photo (media upload)
  - bio (textarea)
  - stats (group: appearances, tries, conversions, penalties, points)
  - socialLinks (group: twitter, instagram)
  - sponsor (relationship to Sponsors)
  - active (checkbox)

### 4. Matches
- **Purpose**: Match information and team sheets
- **Fields**:
  - title, opponent, kickOffTime
  - team (relationship to Teams)
  - groundInfo, weather
  - teamSheet (array of players with position/number)
  - score (group: home, away)
  - status (scheduled, live, halftime, fulltime, cancelled)
  - events (array: time, type, description)

### 5. Sponsors
- **Purpose**: Club and player sponsors
- **Fields**:
  - name, type (club/player)
  - logo (media upload)
  - advertisement (full-page media upload)
  - website, description
  - linkedPlayer (relationship to Players)
  - displayOrder, active

### 6. Content
- **Purpose**: Club content pages
- **Fields**:
  - title, slug
  - section (chairmans-welcome, juniors-update, club-news, etc.)
  - body (rich text editor)
  - excerpt, featuredImage
  - author, publishedDate
  - status (draft/published)

### 7. Media
- **Purpose**: Image uploads
- **Features**:
  - Auto-generates thumbnails
  - Multiple image sizes (thumbnail, card, tablet)
  - Stored in `/media` directory

## Accessing the Admin Panel

1. **First Time Setup**:
   - Navigate to: http://localhost:3000/admin
   - You'll be prompted to create your first admin user
   - Fill in:
     - Email
     - Password
     - Name
   - Click "Create First User"

2. **After Setup**:
   - Login at: http://localhost:3000/admin
   - Use your email and password

## Using the CMS

### Adding Teams

1. Click "Teams" in the sidebar
2. Click "Create New"
3. Fill in:
   - Team Name (e.g., "1st XV Men's", "U14 Girls")
   - Category
   - Age Group
   - Upload logo (optional)
   - Description
4. Click "Save"

### Adding Players

1. Click "Players" in the sidebar
2. Click "Create New"
3. Fill in:
   - Player Name
   - Jersey Number
   - Select Team
   - Select Position
   - Upload Photo
   - Add Bio
   - Fill in Statistics
   - Link Sponsor (if applicable)
4. Click "Save"

### Creating Match Day Program

1. Click "Matches" in the sidebar
2. Click "Create New"
3. Fill in match details:
   - Title (e.g., "Selby RUFC vs Yorkshire Vikings")
   - Select Home Team
   - Opponent Name
   - Kick-off Date & Time
   - Ground Info, Weather
4. Add Team Sheet:
   - Click "Add Item" in Team Sheet section
   - Select Player
   - Choose Position (Starting 15 or Substitute)
   - Enter Jersey Number
5. Click "Save"

### Managing Sponsors

1. Click "Sponsors" in the sidebar
2. Click "Create New"
3. Fill in:
   - Sponsor Name
   - Type (Club or Player)
   - Upload Logo
   - Upload Full-Page Advertisement
   - Website URL
   - Link to Player (for player sponsors)
   - Display Order (lower numbers appear first)
4. Click "Save"

### Publishing Content

1. Click "Content" in the sidebar
2. Click "Create New"
3. Fill in:
   - Title
   - Slug (URL-friendly)
   - Section
   - Content (use rich text editor)
   - Featured Image (optional)
   - Author
   - Published Date
4. Set Status to "Published"
5. Click "Save"

## API Access

Payload CMS provides REST and GraphQL APIs automatically:

### REST API Endpoints

- **Teams**: `GET /api/teams`, `GET /api/teams/:id`
- **Players**: `GET /api/players`, `GET /api/players/:id`
- **Matches**: `GET /api/matches`, `GET /api/matches/:id`
- **Sponsors**: `GET /api/sponsors`, `GET /api/sponsors/:id`
- **Content**: `GET /api/content`, `GET /api/content/:id`
- **Media**: `GET /api/media`, `GET /api/media/:id`

### Example API Call

```javascript
// Fetch all teams
const teams = await fetch('http://localhost:3000/api/teams').then(res => res.json())

// Fetch today's match
const matches = await fetch('http://localhost:3000/api/matches?where[status][equals]=scheduled').then(res => res.json())
```

## Next Steps

1. Create your first admin user at http://localhost:3000/admin
2. Add the 5 Phase 1 teams (4 men's, 1 ladies)
3. Add player profiles for each team
4. Upload sponsor logos and advertisements
5. Create match day fixtures
6. Publish club content (Chairman's Welcome, Juniors Update)

## File Structure

```
/collections
  - Users.ts
  - Teams.ts
  - Players.ts
  - Matches.ts
  - Sponsors.ts
  - Content.ts
  - Media.ts

/app/(payload)
  - /admin
    - [[...segments]]/page.tsx
    - importMap.js
  - layout.tsx

/app/api
  - [[...route]]/route.ts

payload.config.ts
```

## Troubleshooting

### Can't Connect to Database

- Verify MongoDB is running on localhost:27017
- Check DATABASE_URI in .env file
- Ensure database user has correct permissions

### Admin Panel Not Loading

- Clear Next.js cache: `rm -rf .next`
- Restart dev server: `npm run dev`
- Check browser console for errors

### Media Uploads Failing

- Ensure `/media` directory exists and is writable
- Check file permissions
- Verify Sharp is installed: `npm list sharp`

## Production Deployment

When deploying to production:

1. Change `PAYLOAD_SECRET` to a strong random value
2. Update `DATABASE_URI` to point to production MongoDB
3. Configure proper authentication for MongoDB
4. Set up proper backup procedures
5. Consider using cloud storage for media (S3, Cloudinary)
6. Enable HTTPS for admin panel security
