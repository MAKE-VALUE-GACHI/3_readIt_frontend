'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useSummaryQuery } from '@/hooks/fetch/useSummaryQuery'
import { SummaryResultHeader } from './SummaryResultHeader'
import { SummaryTabNavigation } from './SummaryTabNavigation'

export function SummaryResultCard() {
  const router = useRouter()
  const { data: summaryData, isLoading } = useSummaryQuery()

  const { status, subject, content } = summaryData?.data?.data ?? {}

  useEffect(() => {
    if (status === 'failed') {
      alert('요약에 실패하였습니다. 다시 시도해주세요.')
      router.push(`/summary`)
    }
  }, [status, router])

  if (!summaryData) return null

  return (
    <>
      {status === 'completed' || isLoading ? (
        <>
          <SummaryResultHeader />
          <hr className="border-gray-light -mx-10 h-px" />

          <div className="flex-1 overflow-auto">
            <div className="mx-auto mb-5 max-w-2xl text-3xl font-semibold">
              <div className="mt-10 leading-[1.5]">{subject}</div>
            </div>
            <SummaryTabNavigation />
            <hr className="border-gray-light mb-9 mt-4 border" />
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
