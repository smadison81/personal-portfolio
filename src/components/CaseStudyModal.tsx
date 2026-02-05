'use client'

import { useEffect } from 'react'
import {
  X,
  Building2,
  Clock,
  User,
  ChevronRight,
  ArrowUpRight,
  Target,
  AlertCircle,
  Lightbulb,
  Wrench,
  Layers,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { caseStudies } from '@/content/config'

interface CaseStudyModalProps {
  study: typeof caseStudies[0]
  onClose: () => void
}

export function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  // Close on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 overflow-y-auto animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-surface-950/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl bg-surface-900 border border-surface-700/50 rounded-2xl shadow-2xl mb-8 animate-fade-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-surface-400 hover:text-white hover:bg-surface-800 rounded-lg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-surface-700/50">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 text-sm font-medium bg-accent-500/10 text-accent-400 rounded-md">
              {study.industry}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-surface-400">
              <Building2 className="w-4 h-4" />
              {study.client}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-surface-400">
              <Clock className="w-4 h-4" />
              {study.duration}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-surface-400">
              <User className="w-4 h-4" />
              {study.role}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            {study.title}
          </h2>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Outcomes - Hero section */}
          <div className="bg-gradient-to-br from-accent-500/10 to-accent-600/5 border border-accent-500/20 rounded-xl p-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
              <Target className="w-4 h-4" />
              Key Outcomes
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {study.outcomes.map((outcome, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                    {outcome.metric}
                  </div>
                  <div className="text-sm text-surface-300">{outcome.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* One minute summary - Collapsible */}
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer p-4 bg-surface-800/50 rounded-lg hover:bg-surface-800 transition-colors list-none">
              <span className="font-medium text-white">One-Minute Summary</span>
              <ChevronRight className="w-5 h-5 text-surface-400 group-open:rotate-90 transition-transform" />
            </summary>
            <div className="mt-2 p-4 bg-surface-800/30 rounded-lg">
              <p className="text-surface-300 leading-relaxed">{study.oneMinuteSummary}</p>
            </div>
          </details>

          {/* Context */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-surface-200 uppercase tracking-wider mb-3">
              <Layers className="w-4 h-4 text-surface-400" />
              Context
            </h3>
            <p className="text-surface-300 leading-relaxed">{study.context}</p>
          </div>

          {/* Problem */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-surface-200 uppercase tracking-wider mb-3">
              <AlertCircle className="w-4 h-4 text-orange-400" />
              The Problem
            </h3>
            <p className="text-surface-300 leading-relaxed">{study.problem}</p>
          </div>

          {/* Approach */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-surface-200 uppercase tracking-wider mb-3">
              <Lightbulb className="w-4 h-4 text-yellow-400" />
              Approach
            </h3>
            <ul className="space-y-3">
              {study.approach.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-surface-300">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-surface-200 uppercase tracking-wider mb-3">
              <Wrench className="w-4 h-4 text-green-400" />
              Solution
            </h3>
            {/* Architecture */}
            <div className="mb-4 p-4 bg-surface-800/50 rounded-lg font-mono text-sm text-accent-300 overflow-x-auto">
              {study.solution.architecture}
            </div>
            {/* Key components */}
            <div className="grid sm:grid-cols-2 gap-2">
              {study.solution.keyComponents.map((component, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 bg-surface-800/30 rounded-lg text-sm text-surface-300"
                >
                  <ChevronRight className="w-4 h-4 text-accent-400 flex-shrink-0" />
                  {component}
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div>
            <h3 className="text-sm font-semibold text-surface-200 uppercase tracking-wider mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {study.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-surface-800 text-surface-300 text-sm rounded-lg border border-surface-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* What next */}
          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-blue-400 mb-2">
              <ArrowUpRight className="w-4 h-4" />
              What I&apos;d Do Next
            </h3>
            <p className="text-surface-300 text-sm">{study.whatNext}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
