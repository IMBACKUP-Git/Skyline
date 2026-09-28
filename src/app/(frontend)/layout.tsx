import React from 'react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import SmoothScroll from './components/SmoothScroll/SmoothScroll'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteDescription =
  "SKRE is a Dubai-based real estate brokerage connecting buyers, sellers, and tenants with the city's best properties — from off-plan investments to ready homes, backed by expert guidance at every step."

export const metadata: Metadata = {
  title: {
    default: 'Skyline Keys Real Estate | Dubai Property Experts',
    template: '%s | Skyline Keys Real Estate',
  },
  description: siteDescription,
  keywords: [
    'Dubai real estate',
    'Dubai property',
    'buy property Dubai',
    'rent property Dubai',
    'off-plan properties Dubai',
    'Dubai real estate agency',
    'Dubai property investment',
    'Dubai property management',
    'Skyline Keys Real Estate',
    'SKRE',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Skyline Keys Real Estate | Dubai Property Experts',
    description: siteDescription,
    siteName: 'Skyline Keys Real Estate',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Skyline Keys Real Estate | Dubai Property Experts',
    description: siteDescription,
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
