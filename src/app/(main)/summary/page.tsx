import { Copy, ClipDefault, Again } from '@/components/icon'

const SummaryPage = () => {
  return (
    <div className="flex min-h-full w-full">
      <div className="relative mr-4 basis-1/3 rounded-xl bg-white p-10">
        <div>
          <h2 className="mb-5 text-xl font-bold text-[#222222]">요약</h2>
          <div className="mb-3">
            <label className="text-base font-semibold">링크 요약 정리</label>
            <div className="rounded-xl border-[1.5px] border-[#EEEEEE] bg-[#F8F8F8] p-3">
              <input type="text" placeholder="https://" />
            </div>
          </div>

          <div>
            <label className="text-base font-semibold">내용 정리</label>
            <div className="rounded-xl border-[1.5px] border-[#EEEEEE] bg-[#F8F8F8] p-3">
              <textarea
                className="min-h-70 w-full resize-none outline-none"
                placeholder="요약하고 싶은 내용을 입력해 주세요."
              ></textarea>
              <div className="text-end text-sm text-[#AAAAAA]">0/500</div>
            </div>
          </div>
        </div>

        <button className="absolute inset-x-10 bottom-10 h-14 rounded-lg bg-[#F8F8F8] text-lg font-semibold text-[#aaaaaa]">
          자동완성
        </button>
      </div>
      <div className="flex basis-2/3 flex-col rounded-xl bg-white px-10 py-4">
        {/* 요약 시작 컴포넌트 */}
        {/*  <div className="absolute bottom-40 left-1/2 -translate-x-1/2">
          <Image src="/assets/summary.svg" alt="text" width={329} height={84} />
          </div>*/}

        {/* 내용 입력 */}
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
        {/* 본문 */}
        <div className="flex-1 overflow-auto">
          {/* 타이틀 */}
          <div className="mx-auto mb-5 max-w-2xl text-3xl font-semibold">
            <div className="mt-10 leading-[1.5]">
              [sub] 6월20일이 1년 중 가장 행복한 날이라고? 완전 럭키 비키잖아~🍀 l 혜메코 ep7 장원영 메이크업
            </div>
          </div>
          {/* 필터 */}
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
          <div>본문 내용</div>
          <>
            가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나
          </>
        </div>
      </div>
    </div>
  )
}

export default SummaryPage
