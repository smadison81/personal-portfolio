'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Mode = 'consultant' | 'builder'

interface ModeContextType {
  mode: Mode
  toggleMode: () => void
}

const ModeContext = createContext<ModeContextType | undefined>(undefined)

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>('consultant')

  const toggleMode = () => {
    setMode(prev => prev === 'consultant' ? 'builder' : 'consultant')
  }

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  )
}

export function useMode() {
  const context = useContext(ModeContext)
  if (context === undefined) {
    throw new Error('useMode must be used within a ModeProvider')
  }
  return context
}
