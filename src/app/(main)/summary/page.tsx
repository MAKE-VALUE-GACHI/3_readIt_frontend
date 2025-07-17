'use client'

import { SummaryFormCard, SummaryIntro } from './_components'

const SummaryPage = () => {
  return (
    <div className="flex min-h-full w-full">
      <SummaryFormCard />
      <div className="relative flex basis-2/3 flex-col rounded-xl bg-white px-10 py-4">
        <SummaryIntro />
      </div>
    </div>
  )
}

export default SummaryPage
