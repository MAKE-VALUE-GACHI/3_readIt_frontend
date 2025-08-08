import { useRouter } from 'next/navigation'

import { SummaryFormData, addSummary } from '@/services/summary'
import { Again } from '@/components/icon'
import { Button } from '@/components/ui/Button'
import { useSummaryQuery } from '@/hooks/fetch/useSummaryQuery'

const summaryTypes = [
  { key: 'basic', label: '기본 요약' },
  { key: 'oneline', label: '한 줄 요약' },
  { key: 'fiveline', label: '다섯 줄 요약' },
  { key: 'insight', label: '인사이트' },
] as const

const activeBtnStyle = 'bg-black text-white'

export function SummaryTabNavigation() {
  const router = useRouter()
  const { data: summaryData } = useSummaryQuery()

  const { text, type, origin_url: originUrl } = summaryData?.data?.data ?? {}

  const onSubmit = async (data: SummaryFormData) => {
    const response = await addSummary(data)

    if (response.status === 202) {
      router.push(`/summary/${response.data.data.task_id}`)
    } else {
      alert('요약을 실패하였습니다. 다시 시도해주세요.')
    }
  }
  return (
    <div className="flex justify-between">
      <div>
        {summaryTypes.map(({ key, label }) => (
          <Button
            key={key}
            onClick={() => onSubmit({ url: originUrl ?? '', content: text ?? '', type: key })}
            variant={'SUMMARY_CATEGORY_BUTTON'}
            className={type === key ? activeBtnStyle : ''}
          >
            {label}
          </Button>
        ))}
      </div>
      <div className="inline-flex rounded-full bg-[linear-gradient(90deg,#BEBDFF_0%,#9F6BC4_48%,#E26466_100%)] p-[1px]">
        <button
          className="flex cursor-pointer items-center gap-1 rounded-full bg-white px-4 py-2 text-sm text-black"
          onClick={() => onSubmit({ url: originUrl ?? '', content: text ?? '', type: type ?? '' })}
        >
          재요약
          <Again />
        </button>
      </div>
    </div>
  )
}
