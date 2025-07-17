'use client'

import React from 'react'
import { motion, AnimatePresence, Easing } from 'framer-motion'

interface CollapseProps {
  children: React.ReactNode
  isOpen: boolean
  duration?: number
  ease?: Easing | Easing[]
  className?: string
}

export const Collapse: React.FC<CollapseProps> = ({
  children,
  isOpen,
  duration = 0.3,
  ease = 'easeInOut',
  className = '',
}) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration, ease }}
          className={className}
          style={{ overflow: 'hidden' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
