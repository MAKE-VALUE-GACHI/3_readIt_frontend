'use client'

import { useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'

import { Summary32px, Close } from '@/components/icon'
import { addSummary } from '@/services/summary'

export interface SummaryForm {
  url: string
  content: string
  type: string
}

export function SummaryFormCard() {
  const router = useRouter()
  const { register, handleSubmit, watch, control } = useForm<SummaryForm>()

  const onSubmit = async (data: SummaryForm) => {
    data.type = 'basic'
    const response = await addSummary(data)

    if (response.status === 202) {
      console.log('요청 성공')
      router.push(`/summary/${response.data.data.task_id}`)
    } else {
      alert('요약을 실패하였습니다. 다시 시도해주세요.')
    }
  }

  const urlValue = watch('url') || ''
  const contentValue = watch('content') || ''
  const contentLength = contentValue.length

  const isFilled = urlValue.trim() !== '' || contentValue.trim() !== ''

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
            {urlValue.length > 0 && <Close />}
          </div>
        </div>

        <div>
          <label className="text-base font-semibold">내용 정리</label>
          <div className="rounded-xl border-[1.5px] border-[#EEEEEE] bg-[#F8F8F8] p-3">
            <Controller
              name="content"
              control={control}
              defaultValue=""
              rules={{ maxLength: { value: 500, message: '최대 500자까지 입력이 가능합니다.' } }}
              render={({ field, fieldState }) => (
                <>
                  <textarea
                    {...field}
                    onChange={e => {
                      if (e.target.value.length <= 500) field.onChange(e)
                    }}
                    placeholder="입력해 주세요"
                    className="min-h-70 w-full resize-none outline-none"
                  />

                  {fieldState.error && <p>{fieldState.error.message}</p>}
                </>
              )}
            />
            <div className="text-end text-sm text-[#AAAAAA]">{contentLength}/500</div>
          </div>
        </div>

        <button
          disabled={!isFilled}
          type="submit"
          className={`absolute inset-x-10 bottom-10 h-14 rounded-lg text-lg font-semibold text-[#aaaaaa] ${
            isFilled ? 'bg-primary text-white' : 'bg-[#F8F8F8] text-[#aaaaaa]'
          }`}
        >
          자동완성
        </button>
      </form>
    </div>
  )
}
