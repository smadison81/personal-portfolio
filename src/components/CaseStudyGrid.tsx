'use client'

import { useState } from 'react'
import { ArrowRight, Building2, Clock } from 'lucide-react'
import { caseStudies } from '@/content/config'
import { CaseStudyModal } from './CaseStudyModal'

export function CaseStudyGrid() {
  const [selectedStudy, setSelectedStudy] = useState<typeof caseStudies[0] | null>(null)

  return (
    <section id="case-studies" className="py-24 bg-surface-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Featured Case Studies
          </h2>
          <p className="text-surface-400 max-w-2xl mx-auto">
            Real transformations with measurable outcomes. Click any card to see the full story.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <div
              key={study.id}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <button
                onClick={() => setSelectedStudy(study)}
                className="w-full text-left group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500/20 to-accent-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                <div className="relative bg-surface-900 border border-surface-700/50 rounded-xl p-6 hover:border-accent-500/30 transition-all h-full flex flex-col">
                  {/* Industry badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 text-xs font-medium bg-accent-500/10 text-accent-400 rounded-md">
                      {study.industry}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-400 transition-colors">
                    {study.title}
                  </h3>

                  {/* Outcomes */}
                  <div className="space-y-2 mb-4 flex-grow">
                    {study.outcomes.slice(0, 3).map((outcome, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-accent-400">
                          {outcome.metric}
                        </span>
                        <span className="text-sm text-surface-400">
                          {outcome.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-surface-500 pt-4 border-t border-surface-800">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5" />
                      {study.client}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {study.duration}
                    </span>
                  </div>

                  {/* View more */}
                  <div className="flex items-center gap-2 mt-4 text-sm text-accent-400 group-hover:text-accent-300">
                    <span>View case study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedStudy && (
        <CaseStudyModal
          study={selectedStudy}
          onClose={() => setSelectedStudy(null)}
        />
      )}
    </section>
  )
}
