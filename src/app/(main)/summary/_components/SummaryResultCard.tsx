'use client'

import Image from 'next/image'

import { Copy, ClipDefault, Again } from '@/components/icon'
import { useSummaryQuery } from '@/hooks/fetch/useSummaryQuery'

export function SummaryResultCard() {
  const { data: summaryData, isLoading } = useSummaryQuery()

  if (!summaryData) return

  const { status, subject, content } = summaryData?.data?.data ?? {}

  return (
    <>
      {status === 'completed' || isLoading ? (
        <>
          <div className="mb-5 flex justify-between">
            <span className="text-xl font-bold">요약내용</span>
            <div className="flex">
              <button className="mr-6 flex items-center">
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
                <button className="rounded-4xl mr-2 border px-4 py-2 text-sm">기본 요약</button>
                <button className="rounded-4xl mr-2 border px-4 py-2 text-sm">한 줄 요약</button>
                <button className="rounded-4xl mr-2 border px-4 py-2 text-sm">핵심 요약</button>
              </div>
              <div className="inline-flex rounded-full bg-[linear-gradient(90deg,#BEBDFF_0%,#9F6BC4_48%,#E26466_100%)] p-[1px]">
                <button className="flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm text-black">
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
