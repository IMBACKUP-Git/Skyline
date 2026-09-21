import type { StaticImageData } from "next/image";

import mainImage from "../app/BlogInternal/image.png";

import image1 from "../app/Blog/BlogCards/image1.png";
import image2 from "../app/Blog/BlogCards/image2.png";
import image3 from "../app/Blog/BlogCards/image3.png";
import image4 from "../app/Blog/BlogCards/image4.png";
import image5 from "../app/Blog/BlogCards/image5.png";
import image6 from "../app/Blog/BlogCards/image6.png";
import featuredImage from "../app/Blog/BlogHero/image.png";

export type RelatedBlog = {
  slug: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  image: StaticImageData;
};

export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type Blog = {
  slug: string;
  category: string;
  title: string;
  image: StaticImageData;
  featuredImage?: StaticImageData;
  readTime: string;
  intro: string;
  content: BlogSection[];
  related: RelatedBlog[];
};

const dummyIntro =
  "Every buyer who walks into a conversation about Dubai real estate eventually asks the same question: off-plan or ready?";

const dummyContent: BlogSection[] = [
  {
    heading: "What you're actually buying",
    paragraphs: [
      "An off-plan property is a promise — a unit in a development that's still under construction, sold against architectural plans and a payment schedule. A ready property is one you can walk through today: what you see is what you own, from day one.",
      "That distinction shapes everything else about the decision.",
    ],
  },
  {
    heading: "Payment plans and upfront cost",
    paragraphs: [
      "Off-plan developments typically ask for a smaller down payment — often 10–20% — with the balance spread across construction milestones and, in many cases, a post-handover plan that extends payments for a year or more after you receive the keys. Ready properties usually require the full purchase price (or mortgage down payment) at the point of sale, plus the standard transfer costs.",
      "If preserving cash flow matters more than immediate occupancy, off-plan's staged payments are the more comfortable route.",
    ],
  },
  {
    heading: "Timeline and certainty",
    paragraphs: [
      "Ready properties close the gap between decision and move-in — you can be signing a title deed within weeks. Off-plan requires patience: delivery dates can shift, and even well-regarded developers occasionally revise handover timelines. Buyers who need a home now, or who want a rental generating income immediately, are usually better served by ready stock.",
    ],
  },
  {
    heading: "Value and appreciation potential",
    paragraphs: [
      'Off-plan units are typically priced below comparable ready properties in the same area, since the developer is pricing in construction risk and time-to-market. That gap is where much of off-plan\'s upside lives — buyers who hold through completion often see appreciation simply from the property moving from "on paper" to "delivered." Ready properties, by contrast, are priced at current market value, so the entry cost is higher but the outcome is known.',
    ],
  },
  {
    heading: "Rental yield considerations",
    paragraphs: [
      "A ready property can start earning rental income immediately, which matters if cash flow is the priority. An off-plan unit earns nothing until handover — but buyers entering early sometimes secure a lower basis, which can translate into a stronger yield once the property is tenanted, assuming the area's rental market holds up as projected.",
    ],
  },
  {
    heading: "Which one fits you",
    list: [
      "Choose off-plan if: you have a longer investment horizon, want to spread payments over time, and are comfortable with construction-stage uncertainty in exchange for a lower entry price.",
      "Choose ready if: you want immediate occupancy or rental income, prefer to see exactly what you're buying, and would rather pay current market value than wait on a delivery date.",
    ],
  },
];

const dummyRelated: RelatedBlog[] = [
  {
    slug: "off-plan-vs-ready-properties",
    category: "Market",
    title: "Off-Plan vs. Ready Properties: What Dubai Buyers Should Know",
    description:
      "Compare investment potential, payment plans, rental yields, and ownership timelines to choose the right property.",
    readTime: "4 min read",
    image: image1,
  },
  {
    slug: "first-time-buyer-guide-dubai-real-estate",
    category: "Market",
    title: "A First-Time Buyer's Guide to Dubai Real Estate",
    description:
      "From budgeting and mortgage pre-approval to choosing the right property and understanding the buying process.",
    readTime: "4 min read",
    image: image2,
  },
  {
    slug: "dubai-hills-vs-dubai-marina",
    category: "Market",
    title: "Dubai Hills vs. Dubai Marina: Which Fits Your Lifestyle?",
    description:
      "Two of the city's most sought-after communities, compared on price, lifestyle, amenities, and location.",
    readTime: "4 min read",
    image: image3,
  },
];

export const blogs: Blog[] = [
  {
    slug: "off-plan-vs-ready-properties",
    category: "Market",
    title: "Off-Plan vs. Ready Properties: What Dubai Buyers Should Know",
    image: mainImage,
    readTime: "4 min read",
    intro: dummyIntro,
    content: dummyContent,
    related: dummyRelated,
  },

  {
    slug: "first-time-buyer-guide-dubai-real-estate",
    category: "Market",
    title: "A First-Time Buyer's Guide to Dubai Real Estate",
    image: featuredImage,
    featuredImage: featuredImage,
    readTime: "4 min read",
    intro: dummyIntro,
    content: dummyContent,
    related: dummyRelated,
  },

  {
    slug: "dubai-hills-vs-dubai-marina",
    category: "Market",
    title: "Dubai Hills vs. Dubai Marina: Which Fits Your Lifestyle?",
    image: image3,
    readTime: "4 min read",
    intro: dummyIntro,
    content: dummyContent,
    related: dummyRelated,
  },

  {
    slug: "dubai-rental-yields-2026",
    category: "Market",
    title: "Where Dubai's Rental Yields Are Headed in 2026",
    image: image4,
    readTime: "4 min read",
    intro: dummyIntro,
    content: dummyContent,
    related: dummyRelated,
  },

  {
    slug: "golden-visa-property-buyers",
    category: "Market",
    title: "Understanding the Golden Visa and Its Impact on Property Buyers",
    image: image5,
    readTime: "4 min read",
    intro: dummyIntro,
    content: dummyContent,
    related: dummyRelated,
  },

  {
    slug: "international-buyers-dubai-property",
    category: "Market",
    title: "What International Buyers Should Know Before Purchasing in Dubai",
    image: image6,
    readTime: "4 min read",
    intro: dummyIntro,
    content: dummyContent,
    related: dummyRelated,
  },
];
