import Gnb from "@/components/commons/Gnb";
import TapBar from "@/components/commons/TapBar";
import Banner from "@/components/domains/home/Banner";
import SearchBar from "@/components/commons/SearchBar";
import Contents from "@/components/domains/home/Contents";
import CreateStudyButton from "@/components/commons/CreateStudyButton";

export default function Home() {
  return (
    <>
      <Gnb />
      <TapBar />
      <Banner />
      <div className="flex w-full py-[32px] px-[16px]">
        <SearchBar placeholder="관심 스터디 분야나 강의명을 검색해 보세요." />
      </div>
      <Contents />
      <CreateStudyButton />
    </>
  );
}
