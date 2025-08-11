import { useSummaryQuery } from '@/hooks/fetch/useSummaryQuery'
import { SummaryTabNavigation } from './SummaryTabNavigation'

export function SummaryContentSection() {
  const { data: summaryData } = useSummaryQuery()
  const { subject, content } = summaryData?.data?.data ?? {}

  return (
    <div className="flex-1 overflow-auto">
      <div className="mx-auto mb-5 max-w-2xl text-3xl font-semibold">
        <div className="mt-10 leading-[1.5]">{subject}</div>
      </div>
      <SummaryTabNavigation />
      <hr className="border-gray-light mb-9 mt-4 border" />
      <div>{content}</div>
    </div>
  )
}
