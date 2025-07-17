'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Copy, ClipDefault, Again } from '@/components/icon'
import { useSummaryQuery } from '@/hooks/fetch/useSummaryQuery'
import { SummaryForm } from './SummaryFormCard'
import { addSummary } from '@/services/summary'

const summaryBtnStyle = 'rounded-4xl mr-2 border px-4 py-2 text-sm cursor-pointer'
const activeBtnStyle = 'bg-black text-white'

const summaryTypes = [
  { key: 'basic', label: '기본 요약' },
  { key: 'oneline', label: '한 줄 요약' },
  { key: 'fiveline', label: '다섯 줄 요약' },
  { key: 'insight', label: '인사이트' },
] as const

export function SummaryResultCard() {
  const router = useRouter()
  const { data: summaryData, isLoading } = useSummaryQuery()

  if (!summaryData) return

  const { status, subject, content, text, type, origin_url: originUrl } = summaryData?.data?.data ?? {}

  if (status === 'failed') {
    alert('요약에 실패하였습니다. 다시 시도해주세요.')
    router.push(`/summary`)
  }

  const onSubmit = async (data: SummaryForm) => {
    const response = await addSummary(data)

    if (response.status === 202) {
      router.push(`/summary/${response.data.data.task_id}`)
    } else {
      alert('요약을 실패하였습니다. 다시 시도해주세요.')
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content)
    } catch (err) {
      console.error('복사 실패:', err)
    }
  }

  return (
    <>
      {status === 'completed' || isLoading ? (
        <>
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
          <hr className="-mx-10 h-px border-[#EEEEEE]" />
          <div className="flex-1 overflow-auto">
            <div className="mx-auto mb-5 max-w-2xl text-3xl font-semibold">
              <div className="mt-10 leading-[1.5]">{subject}</div>
            </div>
            <div className="flex justify-between">
              <div>
                {summaryTypes.map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => onSubmit({ url: originUrl, content: text, type: key })}
                    className={`${summaryBtnStyle} ${type === key ? activeBtnStyle : ''}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="inline-flex rounded-full bg-[linear-gradient(90deg,#BEBDFF_0%,#9F6BC4_48%,#E26466_100%)] p-[1px]">
                <button
                  className="flex cursor-pointer items-center gap-1 rounded-full bg-white px-4 py-2 text-sm text-black"
                  onClick={() => onSubmit({ url: originUrl, content: text, type })}
                >
                  재요약
                  <Again />
                </button>
              </div>
            </div>
            <hr className="mb-9 mt-4 border border-[#EEEEEE]" />
            <div>{content}</div>
          </div>
        </>
      ) : (
        <div className="flex h-full items-center justify-center">
          <Image src={'/assets/loading.gif'} alt="loading" width={100} height={100} />
        </div>
      )}
    </>
  )
}
