'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SlideProps {
  children: React.ReactNode
  isOpen: boolean
  direction?: 'left' | 'right' | 'top' | 'bottom'
  duration?: number
  distance?: number
  className?: string
}

export const Slide: React.FC<SlideProps> = ({
  children,
  isOpen,
  direction = 'left',
  duration = 0.3,
  distance = 300,
  className = '',
}) => {
  const variants = {
    left: { x: -distance },
    right: { x: distance },
    top: { y: -distance },
    bottom: { y: distance },
  }

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={variants[direction]}
          animate={{ x: 0, y: 0 }}
          exit={variants[direction]}
          transition={{ duration, ease: 'easeInOut' }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}