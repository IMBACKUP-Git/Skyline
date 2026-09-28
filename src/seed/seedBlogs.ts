import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'
import {
  defaultEditorConfig,
  sanitizeServerEditorConfig,
  convertMarkdownToLexical,
} from '@payloadcms/richtext-lexical'

import config from '../payload.config'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const frontendDir = path.resolve(dirname, '../app/(frontend)')

const dummyIntro =
  "Every buyer who walks into a conversation about Dubai real estate eventually asks the same question: off-plan or ready?"

const contentMarkdown = `## What you're actually buying

An off-plan property is a promise — a unit in a development that's still under construction, sold against architectural plans and a payment schedule. A ready property is one you can walk through today: what you see is what you own, from day one.

That distinction shapes everything else about the decision.

## Payment plans and upfront cost

Off-plan developments typically ask for a smaller down payment — often 10–20% — with the balance spread across construction milestones and, in many cases, a post-handover plan that extends payments for a year or more after you receive the keys. Ready properties usually require the full purchase price (or mortgage down payment) at the point of sale, plus the standard transfer costs.

If preserving cash flow matters more than immediate occupancy, off-plan's staged payments are the more comfortable route.

## Timeline and certainty

Ready properties close the gap between decision and move-in — you can be signing a title deed within weeks. Off-plan requires patience: delivery dates can shift, and even well-regarded developers occasionally revise handover timelines. Buyers who need a home now, or who want a rental generating income immediately, are usually better served by ready stock.

## Value and appreciation potential

Off-plan units are typically priced below comparable ready properties in the same area, since the developer is pricing in construction risk and time-to-market. That gap is where much of off-plan's upside lives — buyers who hold through completion often see appreciation simply from the property moving from "on paper" to "delivered." Ready properties, by contrast, are priced at current market value, so the entry cost is higher but the outcome is known.

## Rental yield considerations

A ready property can start earning rental income immediately, which matters if cash flow is the priority. An off-plan unit earns nothing until handover — but buyers entering early sometimes secure a lower basis, which can translate into a stronger yield once the property is tenanted, assuming the area's rental market holds up as projected.

## Which one fits you

- Choose off-plan if: you have a longer investment horizon, want to spread payments over time, and are comfortable with construction-stage uncertainty in exchange for a lower entry price.
- Choose ready if: you want immediate occupancy or rental income, prefer to see exactly what you're buying, and would rather pay current market value than wait on a delivery date.
`

type SeedBlog = {
  slug: string
  category: string
  title: string
  imagePath: string
  readTime: string
}

const seedBlogs: SeedBlog[] = [
  {
    slug: 'off-plan-vs-ready-properties',
    category: 'Market',
    title: 'Off-Plan vs. Ready Properties: What Dubai Buyers Should Know',
    imagePath: path.join(frontendDir, 'BlogInternal', 'image.png'),
    readTime: '4 min read',
  },
  {
    slug: 'first-time-buyer-guide-dubai-real-estate',
    category: 'Buying guide',
    title: "A First-Time Buyer's Guide to Dubai Real Estate",
    imagePath: path.join(frontendDir, 'Blog', 'BlogHero', 'image.png'),
    readTime: '4 min read',
  },
  {
    slug: 'dubai-hills-vs-dubai-marina',
    category: 'Neighborhood',
    title: 'Dubai Hills vs. Dubai Marina: Which Fits Your Lifestyle?',
    imagePath: path.join(frontendDir, 'Blog', 'BlogCards', 'image3.png'),
    readTime: '4 min read',
  },
  {
    slug: 'dubai-rental-yields-2026',
    category: 'Investments',
    title: "Where Dubai's Rental Yields Are Headed in 2026",
    imagePath: path.join(frontendDir, 'Blog', 'BlogCards', 'image4.png'),
    readTime: '4 min read',
  },
  {
    slug: 'golden-visa-property-buyers',
    category: 'Legal & Process',
    title: 'Understanding the Golden Visa and Its Impact on Property Buyers',
    imagePath: path.join(frontendDir, 'Blog', 'BlogCards', 'image5.png'),
    readTime: '4 min read',
  },
  {
    slug: 'international-buyers-dubai-property',
    category: 'Buying guide',
    title: 'What International Buyers Should Know Before Purchasing in Dubai',
    imagePath: path.join(frontendDir, 'Blog', 'BlogCards', 'image6.png'),
    readTime: '4 min read',
  },
]

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

async function run() {
  const payload = await getPayload({ config })

  const editorConfig = await sanitizeServerEditorConfig(defaultEditorConfig, payload.config)
  const longDescription = convertMarkdownToLexical({ editorConfig, markdown: contentMarkdown })

  // 1. Categories
  const categoryNames = Array.from(new Set(seedBlogs.map((b) => b.category)))
  const categoryIdByName = new Map<string, number>()

  for (const name of categoryNames) {
    const existing = await payload.find({
      collection: 'categories',
      where: { name: { equals: name } },
      limit: 1,
    })

    if (existing.docs[0]) {
      categoryIdByName.set(name, existing.docs[0].id)
      continue
    }

    const created = await payload.create({
      collection: 'categories',
      data: { name, slug: slugify(name) },
    })
    categoryIdByName.set(name, created.id)
  }

  // 2. Blogs (+ media upload for each)
  const blogIdBySlug = new Map<string, number>()

  for (const [index, seedBlog] of seedBlogs.entries()) {
    const existing = await payload.find({
      collection: 'blogs',
      where: { slug: { equals: seedBlog.slug } },
      limit: 1,
    })

    if (existing.docs[0]) {
      blogIdBySlug.set(seedBlog.slug, existing.docs[0].id)
      console.log(`Skipping existing blog: ${seedBlog.slug}`)
      continue
    }

    const media = await payload.create({
      collection: 'media',
      data: { alt: seedBlog.title },
      filePath: seedBlog.imagePath,
    })

    const created = await payload.create({
      collection: 'blogs',
      data: {
        title: seedBlog.title,
        slug: seedBlog.slug,
        featuredImage: media.id,
        shortDescription: dummyIntro,
        longDescription,
        category: categoryIdByName.get(seedBlog.category)!,
        readTime: seedBlog.readTime,
        featured: index === 1,
        metaTitle: seedBlog.title,
        metaDescription: dummyIntro,
      },
    })

    blogIdBySlug.set(seedBlog.slug, created.id)
    console.log(`Created blog: ${seedBlog.slug}`)
  }

  // 3. Related blogs — link each post to the next 3 posts in the list (wrapping around)
  const slugs = seedBlogs.map((b) => b.slug)

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i]
    const id = blogIdBySlug.get(slug)
    if (!id) continue

    const relatedSlugs = [slugs[(i + 1) % slugs.length], slugs[(i + 2) % slugs.length], slugs[(i + 3) % slugs.length]]
    const relatedIds = relatedSlugs.map((s) => blogIdBySlug.get(s)).filter((v): v is number => Boolean(v))

    await payload.update({
      collection: 'blogs',
      id,
      data: { relatedBlogs: relatedIds },
    })
  }

  // 4. Backfill `_order` for any blog that doesn't have one yet (e.g. re-running this
  // script against blogs created before `orderable` was enabled). Processed in seed
  // sequence so the drag-to-reorder list starts in the intended order.
  for (const seedBlog of seedBlogs) {
    const id = blogIdBySlug.get(seedBlog.slug)
    if (!id) continue

    const doc = await payload.findByID({ collection: 'blogs', id, depth: 0 })

    if (!doc._order) {
      await payload.update({
        collection: 'blogs',
        id,
        data: {},
      })
      console.log(`Backfilled order for: ${seedBlog.slug}`)
    }
  }

  console.log('Seed complete.')
  process.exit(0)
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
