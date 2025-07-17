import { useState, useCallback } from 'react'

interface UseCollapseOptions {
  defaultOpen?: boolean
  onToggle?: (isOpen: boolean) => void
}

export const useCollapse = (options: UseCollapseOptions = {}) => {
  const { defaultOpen = false, onToggle } = options
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const toggle = useCallback(() => {
    setIsOpen(prev => {
      const newState = !prev
      onToggle?.(newState)
      return newState
    })
  }, [onToggle])

  const open = useCallback(() => {
    setIsOpen(true)
    onToggle?.(true)
  }, [onToggle])

  const close = useCallback(() => {
    setIsOpen(false)
    onToggle?.(false)
  }, [onToggle])

  return {
    isOpen,
    toggle,
    open,
    close,
    setIsOpen,
  }
}