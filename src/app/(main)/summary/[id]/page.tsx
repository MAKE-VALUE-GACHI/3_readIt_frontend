'use client'

import { SummaryFormCard, SummaryResultCard } from '@/app/(main)/summary/_components'

const SummaryDetailPage = () => {
  return (
    <div className="flex min-h-full w-full">
      <SummaryFormCard />
      <div className="relative flex basis-2/3 flex-col rounded-xl bg-white px-10 py-4">
        <SummaryResultCard />
      </div>
    </div>
  )
}

export default SummaryDetailPage
