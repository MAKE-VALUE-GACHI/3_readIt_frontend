'use client'

import { SummaryFormHeader, SummaryForm } from '.'

export function SummaryFormCard() {
  return (
    <div className="relative mr-4 basis-1/3 rounded-xl bg-white p-10">
      <SummaryFormHeader />
      <SummaryForm />
    </div>
  )
}
