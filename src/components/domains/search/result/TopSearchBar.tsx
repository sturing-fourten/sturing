import GoBackButton from "@/components/commons/GoBackButton";
import { ICONS } from "@/constant/icons";

export default function TopSearchBar() {
  return (
    <>
      <section className="h-[54px] px-4 flex items-center gap-2">
        <GoBackButton />
        <form action={""} className="w-full">
          <div className="relative">
            <input
              type="text"
              name="search"
              placeholder="관심 스터디 분야나 강의명을 검색해 보세요"
              className="w-full h-9 bg-main-100 focus-visible:outline-none rounded-full pl-4 py-[7px] pr-[46px] text-sm leading-snug font-semibold text-gray-1000 placeholder:text-gray-600"
            />
            <button className="absolute right-0 pr-4 top-2">
              <img src={ICONS.search.src} alt={ICONS.search.alt} />
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
