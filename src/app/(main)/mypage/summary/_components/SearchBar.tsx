import React from 'react'
import { Button } from '@/components/ui/Button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import SortMenu from './SortMenu'
import { SortType } from '../_hooks/useSummaryList'
import { Arrow, Filter, Search } from '@/components/icon'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  sortMenuOpen: boolean
  setSortMenuOpen: (open: boolean) => void
  onSort: (type: SortType) => void
}

export default function SearchBar({ value, onChange, sortMenuOpen, setSortMenuOpen, onSort }: SearchBarProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-[480px]">
        <div className="text-gray-medium absolute left-3 top-1/2 -translate-y-1/2">
          <Search />
        </div>
        <input
          type="text"
          placeholder="제목으로 검색"
          value={value}
          onChange={e => onChange(e.target.value)}
          className="border-gray-light text-foreground placeholder-gray-medium focus:ring-primary/20 w-full rounded-lg border bg-white py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2"
        />
      </div>

      <Popover open={sortMenuOpen} onOpenChange={setSortMenuOpen}>
        <PopoverTrigger asChild>
          <Button className="active:bg-gray-light bg-gray-extraLight hover:bg-gray-light flex w-fit items-center rounded-lg px-4 py-3">
            <Filter />
            <Arrow />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-auto p-0">
          <SortMenu onClose={() => setSortMenuOpen(false)} onSort={onSort} />
        </PopoverContent>
      </Popover>
    </div>
  )
}
