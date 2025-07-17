import React from 'react'
import { Button } from '@/components/ui/Button'
import Copy from '@/components/icon/Copy'

interface MoreMenuProps {
  onClose: () => void
  onShare: () => void
  onDelete: () => void
}

export default function MoreMenu({ onClose, onShare, onDelete }: MoreMenuProps) {
  return (
    <div className="flex min-w-[100px] flex-col rounded-lg bg-white py-1">
      <Button
        className="text-foreground active:bg-gray-light flex items-center justify-start gap-2 px-3 py-2 text-sm hover:bg-gray-50 active:text-black"
        onClick={() => {
          onShare()
          onClose()
        }}
      >
        <Copy />
        공유
      </Button>
      <Button
        className="active:bg-gray-light justify-start px-3 py-2 text-sm text-red-600 hover:bg-gray-50 active:text-red-600"
        onClick={() => {
          onDelete()
          onClose()
        }}
      >
        삭제
      </Button>
    </div>
  )
}
