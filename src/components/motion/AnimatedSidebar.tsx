'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AnimatedSidebarProps {
  children: React.ReactNode
  isOpen: boolean
  width?: number
  duration?: number
  className?: string
}

export const AnimatedSidebar: React.FC<AnimatedSidebarProps> = ({
  children,
  isOpen,
  width = 272,
  duration = 0.3,
  className = '',
}) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: width, opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration, ease: 'easeInOut' }}
          className={className}
          style={{ overflow: 'hidden' }}
        >
          <div style={{ width: width }}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}