import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import clsx from 'clsx'

import { Close } from '@/components/icon'
import { SummaryFormData, addSummary } from '@/services/summary'
import { Button } from '@/components/ui/Button'

export function SummaryForm() {
  const router = useRouter()
  const { register, handleSubmit, watch, setValue } = useForm<SummaryFormData>()

  const onSubmit = async (data: SummaryFormData) => {
    const response = await addSummary(data)

    if (response.status === 202) {
      router.push(`/summary/${response.data.data.task_id}`)
    } else {
      alert('요약을 실패하였습니다. 다시 시도해주세요.')
    }
  }

  const urlValue = watch('url')?.trim() || ''
  const contentValue = watch('content')?.trim() || ''
  const contentLength = contentValue.length
  const isFilled = urlValue !== '' || contentValue !== ''

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="text-base font-semibold">링크 요약 정리</label>
        <div className="bg-gray-extraLight border-gray-light flex items-center rounded-xl border-[1.5px] p-3">
          <input type="text" placeholder="https://" className="mr-1 w-full outline-none" {...register('url')} />
          {urlValue.length > 0 && (
            <button onClick={() => setValue('url', '')}>
              <Close />
            </button>
          )}
        </div>
      </div>

      <div>
        <label className="text-base font-semibold">내용 정리</label>
        <div className="border-gray-light bg-gray-extraLight rounded-xl border-[1.5px] p-3">
          <textarea
            {...register('content', {
              maxLength: { value: 500, message: '최대 500자까지 입력이 가능합니다.' },
            })}
            placeholder="입력해 주세요"
            className="min-h-70 w-full resize-none outline-none"
            maxLength={500}
          />
          <div className="text-gray-medium text-end text-sm">{contentLength}/500</div>
        </div>
      </div>

      <Button
        type="submit"
        disabled={!isFilled}
        variant={'SUMMARY_SUBMIT_BUTTON'}
        textAlign={'justify-center'}
        className={clsx({ 'bg-primary text-white': isFilled })}
      >
        자동완성
      </Button>
    </form>
  )
}
