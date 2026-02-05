'use client'

import { Trophy, Award, BadgeCheck, Calendar } from 'lucide-react'
import { awards, certifications } from '@/content/config'
import { cn } from '@/lib/utils'

export function AwardsCertifications() {
  return (
    <section id="credentials" className="py-24 bg-surface-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Awards & Certifications
          </h2>
          <p className="text-surface-400 max-w-2xl mx-auto">
            Recognition and credentials that validate expertise and commitment to excellence.
          </p>
        </div>

        {/* Awards */}
        <div className="mb-16">
          <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-6">
            <Trophy className="w-5 h-5 text-yellow-400" />
            Awards
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, i) => (
              <div
                key={i}
                className={cn(
                  'relative p-6 rounded-xl border animate-fade-up',
                  award.highlight
                    ? 'bg-gradient-to-br from-yellow-500/10 to-amber-600/5 border-yellow-500/30'
                    : 'bg-surface-900/60 border-surface-700/50'
                )}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {award.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-500/20 text-yellow-400 rounded-full">
                      Featured
                    </span>
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div className={cn(
                    'w-12 h-12 rounded-lg flex items-center justify-center',
                    award.highlight ? 'bg-yellow-500/20' : 'bg-accent-500/10'
                  )}>
                    <Award className={cn(
                      'w-6 h-6',
                      award.highlight ? 'text-yellow-400' : 'text-accent-400'
                    )} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{award.title}</h4>
                    <p className="text-sm text-surface-400">{award.issuer} · {award.date}</p>
                    <p className="mt-2 text-sm text-surface-300">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-6">
            <BadgeCheck className="w-5 h-5 text-accent-400" />
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="p-4 bg-surface-900/60 border border-surface-700/50 rounded-xl hover:border-accent-500/30 transition-colors animate-fade-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <h4 className="font-semibold text-white text-sm mb-1">{cert.name}</h4>
                <p className="text-xs text-surface-400 mb-2">{cert.issuer}</p>
                <div className="flex items-center gap-2 text-xs text-surface-500">
                  <Calendar className="w-3 h-3" />
                  <span>{cert.date}</span>
                  {cert.expires && (
                    <span className="text-surface-600">· Expires {cert.expires}</span>
                  )}
                </div>
                {cert.skills && (
                  <div className="mt-3 flex flex-wrap gap-1">
                    {cert.skills.map((skill, j) => (
                      <span
                        key={j}
                        className="px-2 py-0.5 bg-surface-800 text-surface-400 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
