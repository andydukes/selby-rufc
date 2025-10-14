#!/usr/bin/env node

/**
 * PWA Icon Generator Script
 *
 * This script generates all required PWA icons from a source image.
 *
 * Requirements:
 * - Node.js 18+
 * - A source image at public/logo-source.png (1024x1024 recommended)
 *
 * Usage:
 *   node scripts/generate-icons.js
 *
 * The script will:
 * 1. Check if sharp is installed
 * 2. Read the source image
 * 3. Generate all required icon sizes
 * 4. Save them to the public directory
 */

import { existsSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Check if sharp is available
let sharp
try {
  sharp = (await import('sharp')).default
} catch (error) {
  console.error('❌ Sharp is not installed.')
  console.error('Install it by running: pnpm add -D sharp')
  console.error('Note: Sharp is already in the main dependencies, so this should work.')
  process.exit(1)
}

const SOURCE_IMAGE = join(dirname(__dirname), 'public', 'logo-source.png')
const PUBLIC_DIR = join(dirname(__dirname), 'public')
const BACKGROUND_COLOR = { r: 26, g: 95, b: 63 } // #1a5f3f

// Icon sizes to generate
const ICON_SIZES = [
  { name: 'icon-72.png', size: 72, padding: 10 },
  { name: 'icon-96.png', size: 96, padding: 14 },
  { name: 'icon-128.png', size: 128, padding: 18 },
  { name: 'icon-144.png', size: 144, padding: 20 },
  { name: 'icon-152.png', size: 152, padding: 22 },
  { name: 'icon-192.png', size: 192, padding: 28 },
  { name: 'icon-384.png', size: 384, padding: 56 },
  { name: 'icon-512.png', size: 512, padding: 74 },
  { name: 'apple-touch-icon.png', size: 180, padding: 26 },
]

// Maskable icons need more padding (safe zone: 40%)
const MASKABLE_SIZES = [
  { name: 'icon-maskable-192.png', size: 192, padding: 58 }, // ~30% padding
  { name: 'icon-maskable-512.png', size: 512, padding: 154 }, // ~30% padding
]

async function generateIcon(config) {
  const { name, size, padding } = config
  const outputPath = join(PUBLIC_DIR, name)
  const logoSize = size - padding * 2

  try {
    await sharp(SOURCE_IMAGE)
      .resize(logoSize, logoSize, {
        fit: 'contain',
        background: BACKGROUND_COLOR,
      })
      .extend({
        top: padding,
        bottom: padding,
        left: padding,
        right: padding,
        background: BACKGROUND_COLOR,
      })
      .png()
      .toFile(outputPath)

    console.log(`✅ Generated ${name} (${size}x${size})`)
  } catch (error) {
    console.error(`❌ Failed to generate ${name}:`, error.message)
  }
}

async function main() {
  console.log('🎨 Selby Rugby PWA Icon Generator\n')

  // Check if source image exists
  if (!existsSync(SOURCE_IMAGE)) {
    console.error('❌ Source image not found!')
    console.error(`Expected: ${SOURCE_IMAGE}`)
    console.error('\nPlease create a high-resolution logo file (1024x1024 recommended)')
    console.error('and save it as public/logo-source.png')
    process.exit(1)
  }

  console.log(`📁 Source image: ${SOURCE_IMAGE}`)
  console.log(`📁 Output directory: ${PUBLIC_DIR}\n`)

  // Generate standard icons
  console.log('Generating standard icons...')
  for (const config of ICON_SIZES) {
    await generateIcon(config)
  }

  console.log('\nGenerating maskable icons...')
  for (const config of MASKABLE_SIZES) {
    await generateIcon(config)
  }

  console.log('\n✨ Icon generation complete!')
  console.log('\nNext steps:')
  console.log('1. Verify icons in the /public directory')
  console.log('2. Test maskable icons at https://maskable.app/editor')
  console.log('3. Run `pnpm dev` and test the PWA functionality')
}

main().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})
