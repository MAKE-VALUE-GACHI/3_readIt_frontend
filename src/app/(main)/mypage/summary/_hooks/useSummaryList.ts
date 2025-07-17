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
      name: '아무거나나',
      files: [
        { id: 11, name: '침착맨 삼국지', date: '2025.07.08' },
        { id: 12, name: '주우재 너에게 닿기를 감상록', date: '2025.07.08' },
        { id: 13, name: '안성재 셰프의 김치찌개 잘 끓이는법', date: '2025.07.10' },
      ],
    },
    {
      id: 2,
      name: '책',
      files: [
        { id: 21, name: '눈먼 자들의 도시', date: '2025.07.07' },
        { id: 22, name: '15소년 표류기', date: '2025.07.10' },
        { id: 23, name: '데미안', date: '2025.07.11' },
        { id: 24, name: '운수 좋은 날', date: '2025.07.12' },
        { id: 25, name: '변신', date: '2025.07.12' },
      ],
    },
    {
      id: 3,
      name: '유튜브',
      files: [
        { id: 31, name: '궤도의 미시세계 특강', date: '2025.07.12' },
        { id: 32, name: '노홍철의 남극여행기', date: '2025.07.14' },
        { id: 33, name: '최준 브이로그 10분 요약', date: '2025.07.14' },
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
    setFolders(prev =>
      prev.map(folder => ({
        ...folder,
        files: folder.files.filter(file => file.id !== fileId),
      })),
    )
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
