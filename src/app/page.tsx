import CreateButton from "@/components/commons/CreateButton";
import Gnb from "@/components/commons/Gnb";
import SearchBar from "@/components/commons/SearchBar";
import TapBar from "@/components/commons/TapBar";
import Banner from "@/components/domains/home/Banner";

import Contents from "@/components/domains/home/Contents";

export default function Home() {
  return (
    <div className="flex flex-col items-center mb-[48px] mx-auto w-screen sm:w-[600px] scroll-smooth relative">
      <Gnb />
      <TapBar />
      <Banner />

      <div className="flex w-full py-[32px] px-[16px]">
        <SearchBar />
      </div>

      <div className="flex w-full">
        <Contents />
      </div>
      <CreateButton />
    </div>
  );
}
