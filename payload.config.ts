import { buildConfig, PayloadRequest } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'

import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

import { Teams } from './collections/Teams'
import { Players } from './collections/Players'
import { Matches } from './collections/Matches'
import { Sponsors } from './collections/Sponsors'
import { Content } from './collections/Content'
import { Media } from './collections/Media'
import { Users } from './collections/Users'


import { lexicalEditor } from '@payloadcms/richtext-lexical'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
      // Disable views that might use Monaco editor
      views: {},
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
  },
  collections: [
    Users,
    Teams,
    Players,
    Matches,
    Sponsors,
    Content,
    Media,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key-here',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [],
})
