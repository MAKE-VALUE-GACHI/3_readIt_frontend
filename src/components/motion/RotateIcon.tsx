'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface RotateIconProps {
  children: React.ReactNode
  isRotated: boolean
  rotation?: number
  duration?: number
  className?: string
}

export const RotateIcon: React.FC<RotateIconProps> = ({
  children,
  isRotated,
  rotation = 90,
  duration = 0.2,
  className = '',
}) => {
  return (
    <motion.div
      animate={{ rotate: isRotated ? rotation : 0 }}
      transition={{ duration, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}