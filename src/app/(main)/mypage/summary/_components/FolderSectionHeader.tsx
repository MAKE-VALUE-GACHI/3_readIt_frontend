import React from 'react'
import FolderCreateInput from './FolderCreateInput'
import { Folder } from '@/components/icon'

interface FolderSectionHeaderProps {
  folderCount: number
  creating: boolean
  onCreateClick: () => void
  onCreateFolder: (name: string) => void
  onCancelCreate: () => void
}

export default function FolderSectionHeader({
  folderCount,
  creating,
  onCreateClick,
  onCreateFolder,
  onCancelCreate,
}: FolderSectionHeaderProps) {
  return (
    <div className="mb-4 flex flex-col gap-4">
      <h2 className="text-gray-medium text-sm font-medium">폴더 {folderCount}</h2>
      {creating ? (
        <FolderCreateInput onCreate={onCreateFolder} onCancel={onCancelCreate} />
      ) : (
        <button
          className="text-primary flex h-[52px] cursor-pointer items-center gap-1 text-sm font-medium"
          onClick={onCreateClick}
        >
          <Folder />새 폴더 생성
        </button>
      )}
    </div>
  )
}
