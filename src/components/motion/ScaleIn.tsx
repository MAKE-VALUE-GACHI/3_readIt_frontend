'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ScaleInProps {
  children: React.ReactNode
  duration?: number
  delay?: number
  initialScale?: number
  className?: string
  animateKey?: string | number
}

export const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  duration = 0.4,
  delay = 0,
  initialScale = 0.8,
  className = '',
  animateKey,
}) => {
  return (
    <motion.div
      key={animateKey}
      initial={{ scale: initialScale, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}