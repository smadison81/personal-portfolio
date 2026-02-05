'use client'

import { toolsAndEcosystems } from '@/content/config'

export function ToolChips() {
  return (
    <section id="tools" className="py-24 bg-surface-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Tools & Ecosystems
          </h2>
          <p className="text-surface-400 max-w-2xl mx-auto">
            Deep expertise across platforms, integrations, and modern tooling.
          </p>
        </div>

        {/* Tool groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsAndEcosystems.map((group, i) => (
            <div
              key={group.category}
              className="bg-surface-900/60 border border-surface-700/50 rounded-xl p-6 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {group.category}
              </h3>
              <div className="space-y-3">
                {group.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center justify-between gap-3 p-3 bg-surface-800/50 rounded-lg"
                  >
                    <span className="font-medium text-surface-200 text-sm">
                      {tool.name}
                    </span>
                    <span className="text-xs text-surface-500">
                      {tool.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
