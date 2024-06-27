import Image from "next/image";
import { searchBlue } from "../../../public/icons/icons";

interface SearchBarProps {}

export default function SearchBar({ ...props }: SearchBarProps) {
  return (
    <form action="" className="flex items-center px-[20px] justify-between w-full rounded-full bg-main-100">
      <input
        type="text"
        name="searchBar"
        placeholder="관심 스터디 분야나 강의명을 검색해 보세요."
        {...props}
        className="items-center w-full flex pr-[10px] py-3 gap-[10px] rounded-full bg-main-100 focus-visible:outline-none placeholder:text-gray-700 placeholder:text-[14px] placeholder:font-medium placeholder:tracking-[-0.42px] placeholder:leading-[22px] text-[14px] tracking-[-0.42px] leading-[22px] font-semibold text-gray-1000"
      />
      <button type="submit" className="flex justify-center items-center float-right">
        <Image src={searchBlue} alt="돋보기 파란색 아이콘" width={24} height={24} />
      </button>
    </form>
  );
}
