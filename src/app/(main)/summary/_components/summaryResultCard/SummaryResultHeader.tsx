import { Copy, ClipDefault } from '@/components/icon'
import { useSummaryQuery } from '@/hooks/fetch/useSummaryQuery'

export function SummaryResultHeader() {
  const { data: summaryData } = useSummaryQuery()
  const { content } = summaryData?.data?.data ?? {}

  const handleCopy = async () => {
    try {
      if (!content) return
      await navigator.clipboard.writeText(content)
    } catch (err) {
      console.error('복사 실패:', err)
    }
  }
  return (
    <div className="mb-5 flex justify-between">
      <span className="text-xl font-bold">요약내용</span>
      <div className="flex">
        <button className="mr-6 flex cursor-pointer items-center" onClick={handleCopy}>
          복사하기
          <Copy className="ml-1" />
        </button>
        <button className="flex items-center">
          스크랩
          <ClipDefault className="ml-1 h-4 w-4" color="black" />
        </button>
      </div>
    </div>
  )
}
