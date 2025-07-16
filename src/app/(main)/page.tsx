import Image from 'next/image'

import { MessageSearch, DocumentCode } from '@/components/icon'

export default function Home() {
  return (
    <div className="min-h-full w-full rounded-xl bg-white">
      <div className="max-w-1/2 mx-auto mt-40 items-center">
        <div className="max-w-1/3 mx-auto">
          <Image src="/assets/logo.png" alt="logo" width={200} height={200} />
        </div>
        <div className="border-gray-light max-w-2/3 mx-auto mt-12 flex rounded-xl border p-3">
          <MessageSearch />
          <input placeholder="제목으로 검색" className="ml-1 text-base text-[#888888] outline-none" />
        </div>
        <div className="mt-16">
          <div className="border-gray-light mb-4 flex items-center rounded-xl border p-4 shadow-xl">
            <DocumentCode />
            <div className="ml-2">
              <div className="text-base">리드잇은 어떤 서비스일까?</div>
              <div className="text-sm text-[#888888]">2025.07.14</div>
            </div>
          </div>
          <div className="border-gray-light mb-4 flex items-center rounded-xl border p-4 shadow-xl">
            <DocumentCode />
            <div className="ml-2">
              <div className="text-base">귀농하려면 해야 할 것</div>
              <div className="text-sm text-[#888888]">2025.07.15</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
