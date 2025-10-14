# PWA Icon Generation Guide

This guide explains how to generate all the required PWA icons for the Selby Rugby App.

## Required Icons

The manifest.json requires the following icon sizes:
- 72x72
- 96x96
- 128x128
- 144x144
- 152x152
- 192x192
- 384x384
- 512x512
- 192x192 (maskable)
- 512x512 (maskable)

## Icon Design Requirements

### Standard Icons
- **Format:** PNG
- **Background:** Selby Rugby green (#1a5f3f)
- **Logo:** Selby RUFC logo centered
- **Safe area:** Keep important content within 80% of the icon size

### Maskable Icons
Maskable icons need extra padding to ensure they display correctly on all devices.
- **Safe zone:** Keep all important content within the center 40% (80px diameter on a 192px icon)
- **Bleed area:** The icon should fill the entire canvas
- **Minimum safe area:** Follow the [maskable.app](https://maskable.app/) guidelines

## Method 1: Using Online Tools

### PWA Asset Generator (Recommended)
1. Visit [https://www.pwabuilder.com/imageGenerator](https://www.pwabuilder.com/imageGenerator)
2. Upload a high-resolution Selby RUFC logo (1024x1024 PNG recommended)
3. Set padding to 20%
4. Set background color to #1a5f3f
5. Download all generated icons
6. Place them in the `/public` directory

### Favicon Generator
1. Visit [https://realfavicongenerator.net/](https://realfavicongenerator.net/)
2. Upload your source image
3. Configure iOS, Android, and PWA settings
4. Download and extract to `/public`

## Method 2: Using ImageMagick (Command Line)

If you have ImageMagick installed, you can use the provided script:

```bash
# Install ImageMagick (if not already installed)
# macOS: brew install imagemagick
# Ubuntu: sudo apt-get install imagemagick

# Run the icon generation script
node scripts/generate-icons.js
```

## Method 3: Using Sharp (Node.js)

Install the icon generation package:

```bash
pnpm add -D pwa-asset-generator
```

Then run:

```bash
npx pwa-asset-generator public/logo-source.png public/ \
  --background "#1a5f3f" \
  --padding "20% 0" \
  --scrape false \
  --icon-only \
  --favicon \
  --maskable
```

## Testing Your Icons

1. **Maskable icons test:** Visit [https://maskable.app/editor](https://maskable.app/editor) and upload your maskable icons to verify they look good with different mask shapes.

2. **PWA testing:** Use Chrome DevTools:
   - Open DevTools (F12)
   - Go to Application tab
   - Check Manifest section
   - Verify all icons are loading correctly

3. **Install the PWA:** Test on a real device by:
   - Opening the app in a mobile browser
   - Triggering the "Add to Home Screen" prompt
   - Verifying the icon looks correct on the home screen

## Current Status

The following placeholder files need to be created:
- [ ] `/public/icon-72.png`
- [ ] `/public/icon-96.png`
- [ ] `/public/icon-128.png`
- [ ] `/public/icon-144.png`
- [ ] `/public/icon-152.png`
- [ ] `/public/icon-192.png`
- [ ] `/public/icon-384.png`
- [ ] `/public/icon-512.png`
- [ ] `/public/icon-maskable-192.png`
- [ ] `/public/icon-maskable-512.png`

## Source File

Create a high-resolution source file (1024x1024 or larger) named `logo-source.png` in the `/public` directory before running any generation tools.

## Apple Touch Icons

For iOS devices, also create:
- `/public/apple-touch-icon.png` (180x180)

This can be done with the same tools mentioned above.
