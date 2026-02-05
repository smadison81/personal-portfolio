'use client'

import { useState } from 'react'
import { ChevronDown, FileText } from 'lucide-react'
import { playbookSteps } from '@/content/config'
import { cn } from '@/lib/utils'

export function PlaybookTimeline() {
  const [activeStep, setActiveStep] = useState<string | null>('discover')

  return (
    <section id="playbook" className="py-24 bg-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            My Delivery Playbook
          </h2>
          <p className="text-surface-400 max-w-2xl mx-auto">
            A proven process from discovery to iteration. Click any step to see what I produce.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop: Horizontal timeline */}
          <div className="hidden lg:block">
            {/* Connection line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-surface-700" />

            <div className="grid grid-cols-7 gap-4">
              {playbookSteps.map((step, i) => (
                <div
                  key={step.id}
                  className="relative animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Step dot */}
                  <button
                    onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                    className={cn(
                      'relative z-10 w-12 h-12 mx-auto rounded-full border-2 flex items-center justify-center transition-all',
                      activeStep === step.id
                        ? 'bg-accent-500 border-accent-500 text-surface-950'
                        : 'bg-surface-900 border-surface-600 text-surface-300 hover:border-accent-500/50'
                    )}
                  >
                    <span className="text-sm font-bold">{i + 1}</span>
                  </button>

                  {/* Step label */}
                  <button
                    onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                    className="mt-4 text-center w-full"
                  >
                    <div className={cn(
                      'font-semibold transition-colors',
                      activeStep === step.id ? 'text-accent-400' : 'text-white'
                    )}>
                      {step.title}
                    </div>
                    <div className="text-xs text-surface-500 mt-1">
                      {step.subtitle}
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {/* Expanded content */}
            {activeStep && (
              <div className="mt-12 animate-fade-up">
                {playbookSteps
                  .filter(s => s.id === activeStep)
                  .map(step => (
                    <div
                      key={step.id}
                      className="bg-surface-900/60 border border-surface-700/50 rounded-xl p-6"
                    >
                      <p className="text-surface-300 mb-6 max-w-3xl">
                        {step.description}
                      </p>
                      <div>
                        <h4 className="flex items-center gap-2 text-sm font-semibold text-surface-200 mb-4">
                          <FileText className="w-4 h-4 text-accent-400" />
                          Key Artifacts
                        </h4>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          {step.artifacts.map((artifact, i) => (
                            <div
                              key={i}
                              className="px-4 py-3 bg-surface-800/50 rounded-lg text-sm text-surface-300 border border-surface-700/30"
                            >
                              {artifact}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* Mobile: Vertical accordion */}
          <div className="lg:hidden space-y-3">
            {playbookSteps.map((step, i) => (
              <div
                key={step.id}
                className="animate-fade-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <button
                  onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  className={cn(
                    'w-full flex items-center gap-4 p-4 rounded-lg border transition-all text-left',
                    activeStep === step.id
                      ? 'bg-surface-800/80 border-accent-500/50'
                      : 'bg-surface-900/60 border-surface-700/50 hover:border-surface-600'
                  )}
                >
                  <div className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0',
                    activeStep === step.id
                      ? 'bg-accent-500 text-surface-950'
                      : 'bg-surface-800 text-surface-300'
                  )}>
                    {i + 1}
                  </div>
                  <div className="flex-grow">
                    <div className={cn(
                      'font-semibold',
                      activeStep === step.id ? 'text-accent-400' : 'text-white'
                    )}>
                      {step.title}
                    </div>
                    <div className="text-xs text-surface-500">{step.subtitle}</div>
                  </div>
                  <ChevronDown className={cn(
                    'w-5 h-5 text-surface-400 transition-transform',
                    activeStep === step.id && 'rotate-180'
                  )} />
                </button>

                {activeStep === step.id && (
                  <div className="overflow-hidden animate-fade-in">
                    <div className="p-4 pt-2">
                      <p className="text-surface-300 text-sm mb-4">
                        {step.description}
                      </p>
                      <div className="space-y-2">
                        {step.artifacts.map((artifact, j) => (
                          <div
                            key={j}
                            className="px-3 py-2 bg-surface-800/50 rounded text-xs text-surface-300"
                          >
                            {artifact}
                          </div>
                        ))}
                      </div>
                    </div>
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
