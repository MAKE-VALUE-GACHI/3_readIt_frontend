import React from 'react'

const AuthUiLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative flex h-screen w-screen items-center justify-center gap-4 bg-[linear-gradient(to_bottom,_#E7B5FE,_#D2CCFC,_#B4EAF6)]">
      {children}
    </main>
  )
}

export default AuthUiLayout
