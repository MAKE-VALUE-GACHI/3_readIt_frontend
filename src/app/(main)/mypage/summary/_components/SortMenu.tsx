import React from 'react'
import { Button } from '@/components/ui/Button'

interface SortMenuProps {
  onClose: () => void
  onSort: (type: 'latest' | 'oldest') => void
}

export default function SortMenu({ onClose, onSort }: SortMenuProps) {
  return (
    <div className="flex min-w-[120px] flex-col rounded-lg bg-white py-1 shadow-lg">
      <Button
        className="text-foreground hover:bg-gray-50hover:bg-gray-50 active:bg-gray-light justify-start px-3 py-2 text-sm active:text-black"
        onClick={() => {
          onSort('latest')
          onClose()
        }}
      >
        최신순
      </Button>
      <Button
        className="text-foreground active:bg-gray-light justify-start px-3 py-2 text-sm hover:bg-gray-50 active:text-black"
        onClick={() => {
          onSort('oldest')
          onClose()
        }}
      >
        오래된순
      </Button>
    </div>
  )
}
