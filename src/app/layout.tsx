import type { Metadata } from 'next'
import { siteConfig, heroContent } from '@/content/config'
import { ModeProvider } from '@/context/ModeContext'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://yourname.com'), // TODO: Replace with your domain
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: heroContent.subheadline,
  keywords: [
    'Implementation Consultant',
    'Presales',
    'Quickbase',
    'Solution Design',
    'Integration',
    'Project Delivery',
    'Systems Architecture',
    'Enterprise Software',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourname.com', // TODO: Replace
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: heroContent.subheadline,
    siteName: siteConfig.name,
    images: [
      {
        url: '/og-image.png', // TODO: Create and add
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: heroContent.subheadline,
    images: ['/og-image.png'], // TODO: Create and add
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// Structured data for Person
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  url: 'https://yourname.com', // TODO: Replace
  sameAs: [siteConfig.linkedIn, siteConfig.github],
  knowsAbout: [
    'Implementation Consulting',
    'Solution Architecture',
    'Quickbase',
    'Integration Development',
    'Project Management',
    'Presales',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ModeProvider>{children}</ModeProvider>
      </body>
    </html>
  )
}
