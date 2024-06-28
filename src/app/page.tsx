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
      <SearchBar />
      <Contents />
      <CreateStudyButton />
    </>
  );
}
