'use client'

import React from 'react'
import { Sidebar } from '@/components/common/sidebar'

const MainUiLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative flex h-screen w-screen gap-4 p-4">
      {/**gradation layer */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#d1b3ff] via-[#b266ff] to-[#b266ff]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-tl from-[#ff6f91] to-transparent opacity-70 mix-blend-overlay" />
      <Sidebar />
      {children}
    </main>
  )
}

export default MainUiLayout
