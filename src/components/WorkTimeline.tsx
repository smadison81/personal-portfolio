'use client'

import { Briefcase, MapPin, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'
import { workHistory } from '@/content/config'

export function WorkTimeline() {
  return (
    <section id="experience" className="py-24 bg-surface-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Career Journey
          </h2>
          <p className="text-surface-400 max-w-2xl mx-auto">
            15+ years building systems and leading implementations across healthcare, energy, and enterprise software.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/50 via-accent-500/20 to-transparent" />

          {/* Glowing dot at top */}
          <div className="absolute left-4 md:left-1/2 top-0 w-px h-32 bg-gradient-to-b from-accent-400 to-transparent opacity-60 blur-sm" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {workHistory.map((job, index) => (
              <div
                key={job.id}
                className={cn(
                  'relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 animate-fade-up',
                  index % 2 === 0 ? 'md:text-right' : ''
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline Node */}
                <div
                  className={cn(
                    'absolute left-4 md:left-1/2 w-3 h-3 rounded-full border-2 -translate-x-1/2 mt-2',
                    job.current
                      ? 'bg-accent-500 border-accent-400 shadow-glow-sm'
                      : 'bg-surface-900 border-surface-600'
                  )}
                >
                  {job.current && (
                    <span className="absolute inset-0 rounded-full bg-accent-500 animate-ping opacity-30" />
                  )}
                </div>

                {/* Content - alternates sides on desktop */}
                <div
                  className={cn(
                    'pl-10 md:pl-0',
                    index % 2 === 0
                      ? 'md:pr-12 md:col-start-1'
                      : 'md:pl-12 md:col-start-2'
                  )}
                >
                  <div
                    className={cn(
                      'group p-6 rounded-xl bg-surface-900/50 border border-surface-800 hover:border-surface-700 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/5',
                      job.current && 'border-accent-500/30 bg-accent-500/5'
                    )}
                  >
                    {/* Header */}
                    <div className={cn('mb-4', index % 2 === 0 ? 'md:text-right' : 'text-left')}>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        {job.current && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-accent-500/20 text-accent-400 rounded-full">
                            Current
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-sm text-surface-500">
                          <Calendar className="w-3 h-3" />
                          {job.startDate} — {job.endDate}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-accent-400 transition-colors">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 text-surface-400 mt-1 flex-wrap">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4 text-accent-500" />
                          {job.company}
                        </span>
                        <span className="text-surface-600">•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className={cn('space-y-2 mb-4', index % 2 === 0 ? 'md:text-right' : 'text-left')}>
                      {job.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-surface-400 flex items-start gap-2"
                        >
                          <span className={cn('text-accent-500 mt-1 flex-shrink-0', index % 2 === 0 && 'md:order-2')}>•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Tags */}
                    <div className={cn('flex flex-wrap gap-2', index % 2 === 0 ? 'md:justify-end' : 'justify-start')}>
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-surface-800 text-surface-400 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty column for alternating layout */}
                <div className={cn('hidden md:block', index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1')} />
              </div>
            ))}
          </div>

          {/* Timeline End */}
          <div className="absolute left-4 md:left-1/2 bottom-0 w-2 h-2 rounded-full bg-surface-700 -translate-x-1/2" />
        </div>
      </div>
    </section>
  )
}
