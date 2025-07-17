import { useState } from 'react'

export interface SummaryFileType {
  id: number
  name: string
  date: string
}

export interface SummaryFolderType {
  id: number
  name: string
  files: SummaryFileType[]
  isNew?: boolean
}

export type SortType = 'latest' | 'oldest'

export const useSummaryList = () => {
  const [folders, setFolders] = useState<SummaryFolderType[]>([
    {
      id: 1,
      name: '요약리스트01',
      files: [
        { id: 11, name: '유튜브 요약본', date: '2025.05.30' },
        { id: 12, name: '유튜브 요약본', date: '2025.05.30' },
      ],
    },
    {
      id: 2,
      name: '요약리스트02',
      files: [
        { id: 21, name: '유튜브 요약본', date: '2025.05.29' },
        { id: 22, name: '유튜브 요약본', date: '2025.05.28' },
      ],
    },
    {
      id: 3,
      name: '요약리스트03',
      files: [
        { id: 31, name: '유튜브 요약본', date: '2025.04.30' },
        { id: 32, name: '유튜브 요약본', date: '2025.03.30' },
      ],
    },
  ])

  const [openFolders, setOpenFolders] = useState<{ [key: number]: boolean }>({})
  const [openMenus, setOpenMenus] = useState<{ [fileId: number]: boolean }>({})
  const [creating, setCreating] = useState(false)
  const [search, setSearch] = useState('')
  const [sortType, setSortType] = useState<SortType>('latest')
  const [sortMenuOpen, setSortMenuOpen] = useState(false)

  const allFiles = folders.flatMap(folder => folder.files)

  const sortFiles = (files: SummaryFileType[]) => {
    return [...files].sort((a, b) => {
      if (sortType === 'latest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      }
    })
  }

  const sortFolders = (folders: SummaryFolderType[]) => {
    return [...folders].sort((a, b) => {
      if (sortType === 'latest') {
        return b.id - a.id
      } else {
        return a.id - b.id
      }
    })
  }

  const filteredFolders = sortFolders(
    folders.filter(
      folder =>
        folder.name.toLowerCase().includes(search.toLowerCase()) ||
        folder.files.some((file: SummaryFileType) => file.name.toLowerCase().includes(search.toLowerCase())),
    ),
  )

  const filteredAllFiles = sortFiles(allFiles.filter(file => file.name.toLowerCase().includes(search.toLowerCase())))

  const toggleFolder = (id: number) => {
    setOpenFolders(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const handleMenuOpen = (fileId: number, open: boolean) => {
    setOpenMenus(prev => ({ ...prev, [fileId]: open }))
  }

  //링크 교체 해야함
  const handleShare = async (fileId: number, shareUrl = 'https://google.com') => {
    await navigator.clipboard.writeText(shareUrl)
    setOpenMenus(prev => ({ ...prev, [fileId]: false }))
  }

  const handleDelete = (fileId: number) => {
    //삭제로직 추가
    setOpenMenus(prev => ({ ...prev, [fileId]: false }))
  }

  const handleCreateFolder = (name: string) => {
    const newFolder = { id: Date.now(), name, files: [], isNew: true }
    setFolders(prev => [...prev, newFolder])
    setCreating(false)

    setTimeout(() => {
      setFolders(prev => prev.map(folder => (folder.id === newFolder.id ? { ...folder, isNew: false } : folder)))
    }, 500)
  }

  const handleSort = (type: SortType) => {
    setSortType(type)
    setSortMenuOpen(false)
  }

  return {
    folders,
    allFiles,
    filteredFolders,
    filteredAllFiles,
    openFolders,
    openMenus,
    creating,
    search,
    sortType,
    sortMenuOpen,
    setSearch,
    setCreating,
    setSortMenuOpen,
    toggleFolder,
    handleMenuOpen,
    handleShare,
    handleDelete,
    handleCreateFolder,
    handleSort,
    sortFiles,
  }
}
