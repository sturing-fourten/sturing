export default function TapBar() {
  return (
    <div className="bg-white w-full h-[48px] flex justify-between items-center px-4 py-3">
      <button className="w-full flex justify-center items-center text-gray-700 text-4 font-medium tracking-[-0.48px] leading-[24px] focus:text-gray-1000 focus:font-semibold">
        추천
      </button>
      <button className="w-full flex justify-center items-center text-gray-700 text-4 font-medium tracking-[-0.48px] leading-[24px] focus:text-gray-1000 focus:font-semibold">
        검색
      </button>
      <button className="w-full flex justify-center items-center text-gray-700 text-4 font-medium tracking-[-0.48px] leading-[24px] focus:text-gray-1000 focus:font-semibold">
        내 스터디
      </button>
    </div>
  );
}
