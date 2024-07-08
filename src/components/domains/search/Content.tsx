import CardList from "@/components/commons/CardList";
import SearchBar from "@/components/commons/SearchBar";
import { StudyRecruitCard } from "@/components/commons/card/StudyRecruitCard";
import SearchTag from "@/components/domains/search/SearchTag";

export default function Content() {
  return (
    <>
      <div className="flex w-full px-4 pt-5 pb-10 ">
        <SearchBar placeholder="관심 스터디 분야나 강의명을 검색해 보세요." />
      </div>

      <section className="px-4 pb-10">
        <div className="pb-5 flex items-center justify-between">
          <h1 className="text-base text-gray-800 font-semibold leading-normal">최근 검색어</h1>
          <button className="text-gray-600 text-sm font-semibold leading-[21px]">전체삭제</button>
        </div>
        <div className="flex items-center gap-x-3 gap-y-[11px] flex-wrap">
          <SearchTag content={"포트폴리오"} type="recent" />
          <SearchTag content={"포트폴리오"} type="recent" />
          <SearchTag content={"포트폴리오"} type="recent" />
          <SearchTag content={"포트폴리오"} type="recent" />
          <SearchTag content={"포트폴리오"} type="recent" />
        </div>
      </section>
      <section className="px-4 pb-10">
        <h1 className="pb-5 text-base text-gray-1000 font-semibold leading-normal">인기 검색어</h1>
        <div className="flex items-center gap-x-3 gap-y-[11px] flex-wrap">
          <SearchTag content="포트폴리오" type="popular" />
          <SearchTag content="포트폴리오" type="popular" />
          <SearchTag content="포트폴리오" type="popular" />
          <SearchTag content="포트폴리오" type="popular" />
          <SearchTag content="포트폴리오" type="popular" />
          <SearchTag content="포트폴리오" type="popular" />
        </div>
      </section>
      <section className="pl-4 pb-10 sm:px-4">
        <h1 className="pb-5 text-base text-gray-1000 font-semibold leading-normal">최근 본 스터디</h1>
        <CardList isSingleLine>
          <StudyRecruitCard isMini={false} isScraped />
          <StudyRecruitCard isMini={false} isScraped />
          <StudyRecruitCard isMini={false} isScraped />
        </CardList>
      </section>
    </>
  );
}
