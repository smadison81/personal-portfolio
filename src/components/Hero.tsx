'use client'

import { ArrowDown, Calendar } from 'lucide-react'
import { heroContent, siteConfig } from '@/content/config'
import { SystemStatus } from './SystemStatus'

export function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-950">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-950/50 to-surface-950" />
        {/* Glow effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="animate-fade-up">
            {/* Name tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-800/60 border border-surface-700/50 text-sm text-surface-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {siteConfig.title}
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              {heroContent.headline.split(' ').map((word, i) => {
                const highlightWords = ['implementation', 'systems', 'risk', 'outcomes']
                const isHighlight = highlightWords.some(hw => word.toLowerCase().includes(hw))
                return (
                  <span key={i}>
                    {isHighlight ? (
                      <span className="text-accent-400">{word}</span>
                    ) : (
                      word
                    )}{' '}
                  </span>
                )
              })}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-surface-300 mb-8 leading-relaxed max-w-xl">
              {heroContent.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => handleScroll('#case-studies')}
                className="px-6 py-3 bg-accent-500 hover:bg-accent-400 text-surface-950 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent-500/25"
              >
                {heroContent.ctaPrimary}
              </button>
              <button
                onClick={() => handleScroll('#contact')}
                className="px-6 py-3 border border-surface-600 hover:border-accent-500/50 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                {heroContent.ctaSecondary}
              </button>
            </div>

            {/* Proof chips */}
            <div className="flex flex-wrap gap-3">
              {heroContent.proofChips.map((chip, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-surface-800/40 border border-surface-700/50 rounded-lg"
                >
                  <div className="text-lg font-bold text-white">{chip.label}</div>
                  <div className="text-xs text-surface-400">{chip.sublabel}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: System Status Widget */}
          <div className="hidden lg:block animate-fade-in">
            <SystemStatus />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
          <button
            onClick={() => handleScroll('#capabilities')}
            className="flex flex-col items-center gap-2 text-surface-500 hover:text-accent-400 transition-colors"
            aria-label="Scroll to content"
          >
            <span className="text-xs uppercase tracking-wider">Explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}
