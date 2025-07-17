'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { Summary32px, Close } from '@/components/icon'
import { addSummary } from '@/services/summary'

interface SummaryForm {
  url: string
  content: string
}
export function SummaryFormCard() {
  const router = useRouter()
  const { register, handleSubmit } = useForm<SummaryForm>()
  const onSubmit = async (data: SummaryForm) => {
    data.url = 'https://n.news.naver.com/mnews/article/421/0008369058'
    const response = await addSummary(data)

    if (response.status === 202) {
      console.log('요청 성공')
      router.push(`/summary/${response.data.data.task_id}`)
    } else {
      console.log('요청 실패')
    }
  }
  return (
    <div className="relative mr-4 basis-1/3 rounded-xl bg-white p-10">
      <header className="mb-5 flex">
        <Summary32px />
        <h2 className="ml-1 text-xl font-bold text-[#222222]">요약</h2>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="text-base font-semibold">링크 요약 정리</label>
          <div className="flex items-center rounded-xl border-[1.5px] border-[#EEEEEE] bg-[#F8F8F8] p-3">
            <input type="text" placeholder="https://" className="mr-1 w-full outline-none" {...register('url')} />
            <Close />
          </div>
        </div>

        <div>
          <label className="text-base font-semibold">내용 정리</label>
          <div className="rounded-xl border-[1.5px] border-[#EEEEEE] bg-[#F8F8F8] p-3">
            <textarea
              className="min-h-70 w-full resize-none outline-none"
              placeholder="요약하고 싶은 내용을 입력해 주세요."
              {...register('content')}
            ></textarea>
            <div className="text-end text-sm text-[#AAAAAA]">0/500</div>
          </div>
        </div>

        <button
          type="submit"
          className="absolute inset-x-10 bottom-10 h-14 rounded-lg bg-[#F8F8F8] text-lg font-semibold text-[#aaaaaa]"
        >
          자동완성
        </button>
      </form>
    </div>
  )
}
