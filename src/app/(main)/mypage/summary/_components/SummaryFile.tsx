import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import SummaryDefault from '@/components/icon/SummaryDefault'
import { Dot, Copy } from '@/components/icon'
import { useRouter } from 'next/navigation'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

interface SummaryFileProps {
  id: number
  name: string
  date: string
  onShare?: () => void
  onDelete?: () => void
}

export default function SummaryFile({ id, name, date, onShare, onDelete }: SummaryFileProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <div
      className="flex items-center justify-between rounded-lg bg-white px-4 py-3 transition-colors hover:bg-gray-50"
      onClick={(e) => {
        e.stopPropagation()
        router.push(`/summary/${id}`)
      }}
    >
      <div className="flex items-center gap-3">
        <SummaryDefault />
        <div>
          <div className="text-foreground text-sm font-medium">{name}</div>
          <div className="text-gray-medium text-xs">{date}</div>
        </div>
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="SUMMARY_BUTTON"
            className="active:bg-gray-light flex h-8 w-8 items-center justify-center rounded-lg pl-1"
            onClick={e => {
              e.stopPropagation()
            }}
          >
            <Dot />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-auto p-0">
          <div className="flex min-w-[100px] flex-col rounded-lg bg-white py-1">
            <Button
              className="text-foreground active:bg-gray-light flex items-center justify-start gap-2 px-3 py-2 text-sm hover:bg-gray-50 active:text-black"
              onClick={(e) => {
                e.stopPropagation()
                onShare?.()
                setOpen(false)
              }}
            >
              <Copy />
              공유
            </Button>
            <Button
              className="active:bg-gray-light justify-start px-3 py-2 text-sm text-red-600 hover:bg-gray-50 active:text-red-600"
              onClick={(e) => {
                e.stopPropagation()
                onDelete?.()
                setOpen(false)
              }}
            >
              삭제
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
