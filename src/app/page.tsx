import Button from "@/components/commons/Button";
import CreateButton from "@/components/commons/CreateButton";
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
      <CreateButton />
    </div>
  );
}
