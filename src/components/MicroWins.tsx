'use client'

import { Zap } from 'lucide-react'
import { microWins } from '@/content/config'

export function MicroWins() {
  return (
    <section className="py-16 bg-surface-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-8 animate-fade-up">
          <h2 className="text-2xl font-display font-bold text-white mb-2 flex items-center justify-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Micro Wins
          </h2>
          <p className="text-surface-400 text-sm">
            Small victories that add up to big impact
          </p>
        </div>
      </div>

      {/* Scrolling strip */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface-950 to-transparent z-10" />

        {/* Scrolling content - CSS animation instead of framer-motion */}
        <div className="flex gap-4 animate-scroll">
          {[...microWins, ...microWins].map((win, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 p-4 bg-surface-900/60 border border-surface-700/50 rounded-lg hover:border-accent-500/30 transition-colors"
            >
              <h3 className="font-semibold text-white text-sm mb-2">
                {win.title}
              </h3>
              <p className="text-surface-400 text-xs mb-3 leading-relaxed">
                {win.result}
              </p>
              <div className="flex flex-wrap gap-1">
                {win.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-2 py-0.5 bg-surface-800 text-surface-400 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
