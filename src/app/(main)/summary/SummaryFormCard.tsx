export function SummaryFormCard() {
  return (
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
  )
}
