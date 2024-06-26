import Button from "@/components/commons/Button";
import Gnb from "@/components/commons/Gnb";
import SearchBar from "@/components/commons/SearchBar";
import TapBar from "@/components/commons/TapBar";

import Contents from "@/components/domains/home/Contents";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full mb-[48px] mx-auto scroll-smooth">
      <Gnb />
      <TapBar />

      <div className="flex w-full py-[32px] px-[16px]">
        <SearchBar />
      </div>

      <div className="flex w-full">
        <Contents />
      </div>

      <Button varient="circle" addStyle="w-[56px] h-[56px] shrink-0 fixed sm:absolute bottom-[20px] right-[20px] z-10">
        <Image src="icons/add.svg" alt="> 아이콘" width={32} height={32} />
      </Button>
    </div>
  );
}
