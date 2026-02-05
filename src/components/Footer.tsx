'use client'

import { siteConfig, footerContent } from '@/content/config'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-surface-950 border-t border-surface-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-sm text-surface-500">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </div>

          {/* Witty tagline */}
          <div className="text-sm text-surface-600 italic">
            {footerContent.tagline}
          </div>

          {/* Last updated */}
          <div className="text-xs text-surface-600">
            Last updated: {siteConfig.lastUpdated}
          </div>
        </div>
      </div>
    </footer>
  )
}
