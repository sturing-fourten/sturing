"use client";
import { ICONS } from "@/constant/icons";
import { useFilterStore, useSearchTabMenuStore } from "@/store/FilterStore";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
interface SearchBarProps {
  placeholder: string;
}

export default function SearchBar({ placeholder, ...props }: SearchBarProps) {
  const [inputValue, setValue] = useState("");
  const { setSearchQuery, resetFilters } = useFilterStore();
  const { setTabMenu } = useSearchTabMenuStore();
  const router = useRouter();

  const handleInputSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      setTabMenu("total");
      resetFilters();
      setSearchQuery(inputValue);
      router.push(`/search/result?search=${inputValue}`);
      setValue("");
    }
  };

  return (
    <form
      onSubmit={handleInputSubmit}
      className="flex items-center px-[20px] justify-between w-full rounded-full bg-main-100">
      <input
        type="text"
        name="search"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setValue(e.target.value)}
        {...props}
        className="items-center w-full flex pr-[10px] py-3 gap-[10px] bg-main-100 focus-visible:outline-none placeholder:text-gray-700 placeholder:text-[14px] placeholder:font-medium placeholder:tracking-[-0.42px] placeholder:leading-[22px] text-[14px] tracking-[-0.42px] leading-[22px] font-semibold text-gray-1000"
      />
      <button type="submit" className="flex justify-center items-center float-right">
        <img src={ICONS.searchBlue.src} alt={ICONS.searchBlue.alt} width={24} height={24} />
      </button>
    </form>
  );
}
