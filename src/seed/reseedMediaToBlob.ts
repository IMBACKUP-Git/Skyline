import 'dotenv/config'
import { getPayload } from 'payload'

import config from '../payload.config'

async function run() {
  const payload = await getPayload({ config })

  const { docs: blogs } = await payload.find({ collection: 'blogs', limit: 100, depth: 0 })

  for (const blog of blogs) {
    await payload.delete({ collection: 'blogs', id: blog.id })
    console.log(`Deleted blog: ${blog.slug}`)
  }

  const { docs: media } = await payload.find({ collection: 'media', limit: 100, depth: 0 })

  for (const doc of media) {
    await payload.delete({ collection: 'media', id: doc.id })
    console.log(`Deleted media: ${doc.filename}`)
  }

  console.log('Cleared old local-storage media and blogs.')
  process.exit(0)
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
