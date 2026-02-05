'use client'

import { Check, Loader2, Circle } from 'lucide-react'
import { systemStatusSteps } from '@/content/config'
import { cn } from '@/lib/utils'

export function SystemStatus() {
  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-accent-500/20 via-accent-400/10 to-accent-600/20 rounded-2xl blur-xl" />

      {/* Card */}
      <div className="relative bg-surface-900/80 backdrop-blur-sm border border-surface-700/50 rounded-xl p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75" />
            </div>
            <span className="font-mono text-sm text-surface-300">System Status</span>
          </div>
          <span className="text-xs text-surface-500 font-mono">LIVE</span>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {systemStatusSteps.map((step, i) => (
            <div
              key={step.id}
              className="flex items-center gap-4 animate-slide-in"
              style={{ animationDelay: `${500 + i * 150}ms` }}
            >
              {/* Status indicator */}
              <div className={cn(
                'w-10 h-10 rounded-lg flex items-center justify-center transition-all',
                step.status === 'complete' && 'bg-green-500/20 text-green-400',
                step.status === 'active' && 'bg-accent-500/20 text-accent-400 animate-glow-pulse',
                step.status === 'pending' && 'bg-surface-800 text-surface-500'
              )}>
                {step.status === 'complete' && <Check className="w-5 h-5" />}
                {step.status === 'active' && <Loader2 className="w-5 h-5 animate-spin" />}
                {step.status === 'pending' && <Circle className="w-5 h-5" />}
              </div>

              {/* Label */}
              <div className="flex-1">
                <div className={cn(
                  'font-medium transition-colors',
                  step.status === 'complete' && 'text-green-400',
                  step.status === 'active' && 'text-accent-400',
                  step.status === 'pending' && 'text-surface-500'
                )}>
                  {step.label}
                </div>
                <div className="text-xs text-surface-500">
                  {step.status === 'complete' && 'Completed'}
                  {step.status === 'active' && 'In Progress'}
                  {step.status === 'pending' && 'Queued'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom info */}
        <div className="mt-6 pt-4 border-t border-surface-700/50">
          <div className="flex items-center justify-between text-xs">
            <span className="text-surface-500">Current engagement</span>
            <span className="text-accent-400 font-mono">Building solutions</span>
          </div>
        </div>
      </div>
    </div>
  )
}
