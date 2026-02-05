'use client'

import { Quote } from 'lucide-react'
import { testimonials } from '@/content/config'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            What People Say
          </h2>
          <p className="text-surface-400 max-w-2xl mx-auto">
            Feedback from clients and colleagues who&apos;ve seen the work firsthand.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="relative group animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500/20 to-accent-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
              <div className="relative bg-surface-900/60 border border-surface-700/50 rounded-xl p-6 h-full flex flex-col">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-accent-500/30 mb-4" />

                {/* Quote */}
                <blockquote className="text-surface-200 leading-relaxed mb-6 flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-4 pt-4 border-t border-surface-700/50">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-500/20 to-accent-600/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-accent-400">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-surface-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                    <div className="text-xs text-surface-500 mt-0.5">
                      {testimonial.context}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
