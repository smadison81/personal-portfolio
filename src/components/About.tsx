'use client'

import { aboutContent, siteConfig } from '@/content/config'
import { Linkedin, Github, MapPin } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-24 bg-surface-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Bio */}
          <div className="animate-fade-up">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
              About Me
            </h2>

            <p className="text-xl text-accent-400 font-medium mb-6">
              {aboutContent.intro}
            </p>

            <div className="space-y-4 text-surface-300 leading-relaxed">
              {aboutContent.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-surface-800/80 border border-surface-700 rounded-lg text-surface-300 hover:text-white hover:border-accent-500/50 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
              {siteConfig.github && (
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-surface-800/80 border border-surface-700 rounded-lg text-surface-300 hover:text-white hover:border-accent-500/50 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">GitHub</span>
                </a>
              )}
              <div className="flex items-center gap-2 px-4 py-2 text-surface-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{siteConfig.location}</span>
              </div>
            </div>
          </div>

          {/* Right: Principles */}
          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-semibold text-white mb-6">
              Principles I Work By
            </h3>

            <div className="space-y-4">
              {aboutContent.principles.map((principle, i) => (
                <div
                  key={i}
                  className="p-4 bg-surface-900/60 border border-surface-700/50 rounded-lg animate-fade-up"
                  style={{ animationDelay: `${300 + i * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-400 font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {principle.title}
                      </h4>
                      <p className="text-sm text-surface-400">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
