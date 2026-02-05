'use client'

import {
  Search,
  Rocket,
  GitBranch,
  Database,
  Presentation,
  Sparkles,
} from 'lucide-react'
import { capabilities } from '@/content/config'
import { useMode } from '@/context/ModeContext'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Rocket,
  GitBranch,
  Database,
  Presentation,
  Sparkles,
}

export function CapabilityGrid() {
  const { mode } = useMode()

  return (
    <section id="capabilities" className="py-24 bg-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            What I Do Best
          </h2>
          <p className="text-surface-400 max-w-2xl mx-auto">
            Full-stack implementation capability—from discovery through launch and beyond.
          </p>
          {/* Mode indicator */}
          <p className="mt-4 text-sm">
            <span className="text-surface-500">Viewing as: </span>
            <span className={cn(
              'font-semibold',
              mode === 'consultant' ? 'text-blue-400' : 'text-green-400'
            )}>
              {mode === 'consultant' ? '💼 Consultant' : '🔧 Builder'}
            </span>
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, i) => {
            const Icon = iconMap[capability.icon]
            return (
              <div
                key={`${capability.id}-${mode}`}
                className="group relative animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500/20 to-accent-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                <div className="relative bg-surface-900/60 border border-surface-700/50 rounded-xl p-6 hover:border-accent-500/30 transition-colors h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-accent-500/10 flex items-center justify-center mb-4 group-hover:bg-accent-500/20 transition-colors">
                    {Icon && <Icon className="w-6 h-6 text-accent-400" />}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {capability.title}
                  </h3>

                  {/* Description */}
                  <p className="text-surface-400 text-sm mb-4 leading-relaxed">
                    {capability.description}
                  </p>

                  {/* Mode-specific highlight */}
                  <div
                    className={cn(
                      'text-xs px-3 py-2 rounded-lg transition-all duration-300',
                      mode === 'consultant'
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                        : 'bg-green-500/10 text-green-400 border border-green-500/20'
                    )}
                  >
                    <span className="font-medium">
                      {mode === 'consultant' ? '💼 ' : '🔧 '}
                    </span>
                    {mode === 'consultant'
                      ? capability.consultantHighlight
                      : capability.builderHighlight}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
