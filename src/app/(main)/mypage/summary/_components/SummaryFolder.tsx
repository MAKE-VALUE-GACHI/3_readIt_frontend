import React from 'react'
import { Storage, Arrow } from '@/components/icon'
import { SummaryFileType } from '../_hooks/useSummaryList'

interface SummaryFolderProps {
  id: number
  name: string
  files: SummaryFileType[]
  open: boolean
  onToggle: (id: number) => void
  children?: React.ReactNode
}

export default function SummaryFolder({ id, name, files, open, onToggle, children }: SummaryFolderProps) {
  return (
    <div className="mb-2">
      <div
        className={`flex cursor-pointer items-center justify-between rounded-lg px-4 py-3 transition-colors ${
          open ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'
        }`}
        onClick={() => onToggle(id)}
      >
        <div className="flex items-center gap-3">
          <Storage />
          <div>
            <div className="text-foreground text-sm font-medium">{name}</div>
            <div className="text-gray-medium text-xs">{files.length}개 파일</div>
          </div>
        </div>
        <div className={`transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-90'}`}>
          <Arrow />
        </div>
      </div>
      {open && <div className="ml-6 mt-2 space-y-1">{children}</div>}
    </div>
  )
}
