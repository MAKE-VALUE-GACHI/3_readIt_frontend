import React, { useState, useRef } from 'react'
import { Button } from '@/components/ui/Button'

interface FolderCreateInputProps {
  onCreate: (name: string) => void
  onCancel: () => void
}

export default function FolderCreateInput({ onCreate, onCancel }: FolderCreateInputProps) {
  const [name, setName] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {
    if (name.trim()) {
      onCreate(name.trim())
    }
  }

  return (
    <div className="bg-gray-extraLight flex w-[480px] items-center gap-2 rounded-lg px-3 py-2">
      <input
        ref={inputRef}
        type="text"
        placeholder="폴더 이름 입력"
        value={name}
        onChange={e => setName(e.target.value)}
        onBlur={onCancel}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleSubmit()
          }
        }}
        className="text-foreground placeholder-gray-medium flex-1 bg-transparent text-sm outline-none"
        autoFocus
      />
      <Button
        variant="MAIN_SIDE_BUTTON"
        className="text-gray-medium flex w-[50px] px-3 py-2 text-sm"
        onMouseDown={handleSubmit}
      >
        완료
      </Button>
    </div>
  )
}
