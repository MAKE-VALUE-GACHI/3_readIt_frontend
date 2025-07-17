'use client'

import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'
import { useSummaryList } from './_hooks/useSummaryList'
import SearchBar from './_components/SearchBar'
import FolderSectionHeader from './_components/FolderSectionHeader'
import SummaryFolder from './_components/SummaryFolder'
import SummaryFile from './_components/SummaryFile'
import { User, CheckGreen } from '@/components/icon'
import React from 'react'

export default function SummaryPage() {
  const {
    filteredFolders,
    filteredAllFiles,
    openFolders,
    creating,
    search,
    sortMenuOpen,
    setSearch,
    setCreating,
    setSortMenuOpen,
    toggleFolder,
    handleShare: originalHandleShare,
    handleDelete,
    handleCreateFolder,
    handleSort,
    sortFiles,
  } = useSummaryList()

  const handleShare = async (fileId: number) => {
    await originalHandleShare(fileId)
    toast.success('복사 완료', {
      position: 'bottom-center',
      icon: <CheckGreen />,
      style: {
        width: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        background: 'white',
        color: 'black',
        border: 'none',
        borderRadius: '999px',
        fontFamily: 'Pretendard',
        padding: '16px 32px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        fontSize: '16px',
      },
    })
  }

  return (
    <div className="relative max-h-screen w-full flex-1 overflow-hidden rounded-xl bg-white p-[44px]">
      <div className="relative max-h-full w-full bg-white">
        <div className="mb-8">
          <span className="mb-6 flex items-center gap-4 text-lg font-bold">
            <User />
            내가 만든 요약 리스트
          </span>
          <SearchBar
            value={search}
            onChange={setSearch}
            sortMenuOpen={sortMenuOpen}
            setSortMenuOpen={setSortMenuOpen}
            onSort={handleSort}
          />
        </div>

        <div className="custom-scrollbar h-[calc(100vh-240px)] w-full overflow-y-scroll">
          <div className="flex h-fit flex-col gap-8">
            <section>
              <FolderSectionHeader
                folderCount={filteredFolders.length}
                creating={creating}
                onCreateClick={() => setCreating(true)}
                onCreateFolder={handleCreateFolder}
                onCancelCreate={() => setCreating(false)}
              />
              <div className="space-y-2">
                {filteredFolders.map(folder => (
                  <SummaryFolder
                    key={folder.id}
                    id={folder.id}
                    name={folder.name}
                    files={folder.files}
                    open={!!openFolders[folder.id]}
                    onToggle={toggleFolder}
                  >
                    {sortFiles(folder.files.filter(file => file.name.toLowerCase().includes(search.toLowerCase()))).map(
                      file => (
                        <SummaryFile
                          key={file.id}
                          id={file.id}
                          name={file.name}
                          date={file.date}
                          onShare={() => handleShare(file.id)}
                          onDelete={() => handleDelete(file.id)}
                        />
                      ),
                    )}
                  </SummaryFolder>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-gray-medium mb-4 text-sm font-medium">모든 파일</h2>
              <div className="space-y-2">
                {filteredAllFiles.map(file => (
                  <SummaryFile
                    key={file.id}
                    id={file.id}
                    name={file.name}
                    date={file.date}
                    onShare={() => handleShare(file.id)}
                    onDelete={() => handleDelete(file.id)}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}
