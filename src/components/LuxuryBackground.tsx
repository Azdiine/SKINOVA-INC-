import React from 'react'

interface LuxuryBackgroundProps {
  children: React.ReactNode
}

export default function LuxuryBackground({ children }: LuxuryBackgroundProps) {
  return (
    <div className="luxury-background">
      {children}
    </div>
  )
}
