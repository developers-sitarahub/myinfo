import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const SITE_URL = 'https://vikaskamat.in'
const FULL_NAME = 'Vikas Kamat'
const TITLE = `${FULL_NAME} — CEO & Business Professional`
const DESCRIPTION =
  'Official link-in-bio page for Vikas Kamat, Chief Executive Officer. Explore his ventures — Indo Global Trade Fair & National Franchise Investment Summit — and connect on LinkedIn, Instagram, and X.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  /* ── Core ─────────────────────────────────────────── */
  title: {
    default: TITLE,
    template: `%s | ${FULL_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'Vikas Kamat',
    'CEO',
    'Business Professional',
    'Indo Global Trade Fair',
    'National Franchise Investment Summit',
    'IGTF',
    'NFIS',
    'Franchise',
    'Trade Fair',
    'India Business',
  ],
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  category: 'business',

  /* ── Canonical & robots ────────────────────────────── */
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },

  /* ── Open Graph ────────────────────────────────────── */
  openGraph: {
    type: 'profile',
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: FULL_NAME,
    locale: 'en_IN',
    images: [
      {
        url: '/ccec4ceb-54ed-411c-a787-190cdca939d2.png',
        width: 800,
        height: 800,
        alt: `${FULL_NAME} — Profile Photo`,
      },
    ],
  },

  /* ── Twitter / X card ──────────────────────────────── */
  twitter: {
    card: 'summary',
    site: '@vikaskamat',
    creator: '@vikaskamat',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/ccec4ceb-54ed-411c-a787-190cdca939d2.png'],
  },

  /* ── Icons (only files that actually exist) ─────────── */
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
