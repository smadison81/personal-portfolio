'use client'

import { Briefcase, Code2 } from 'lucide-react'
import { useMode } from '@/context/ModeContext'
import { cn } from '@/lib/utils'

export function ModeToggle() {
  const { mode, toggleMode } = useMode()

  return (
    <button
      onClick={toggleMode}
      className="relative flex items-center rounded-full bg-surface-800/80 border border-surface-700 hover:border-accent-500/50 transition-colors overflow-hidden"
      aria-label={`Switch to ${mode === 'consultant' ? 'builder' : 'consultant'} mode`}
    >
      {/* Sliding background indicator */}
      <div
        className={cn(
          'absolute top-0 bottom-0 bg-gradient-to-r from-accent-600/30 to-accent-500/20 rounded-full transition-all duration-300 ease-out',
          mode === 'consultant' ? 'left-0 right-[45%]' : 'left-[50%] right-0'
        )}
      />

      {/* Consultant option */}
      <span
        className={cn(
          'relative z-10 flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors duration-300',
          mode === 'consultant' ? 'text-accent-400' : 'text-surface-400'
        )}
      >
        <Briefcase className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Consultant</span>
      </span>

      {/* Builder option */}
      <span
        className={cn(
          'relative z-10 flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors duration-300',
          mode === 'builder' ? 'text-accent-400' : 'text-surface-400'
        )}
      >
        <Code2 className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Builder</span>
      </span>
    </button>
  )
}
