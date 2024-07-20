"use client";

import GoBackButton from "@/components/commons/GoBackButton";
import { ICONS } from "@/constant/icons";
import { useFilterStore } from "@/store/FilterStore";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

export default function TopSearchBar() {
  const params = useSearchParams();
  const search = params.get("search");
  const { setSearchQuery, resetFilters } = useFilterStore();
  const [inputValue, setValue] = useState("");
  const router = useRouter();

  const handleInputSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    resetFilters();
    if (inputValue) {
      setSearchQuery(inputValue);

      router.push(`/search/result?search=${inputValue}`);
    }
  };

  useEffect(() => {
    if (search) {
      setValue(search);
      setSearchQuery(search);
    }
  }, [search]);

  return (
    <>
      <section className="h-[54px] px-4 flex items-center gap-2 mt-5">
        <GoBackButton />
        <form className="w-full">
          <div className="relative">
            <input
              type="text"
              name="search"
              value={inputValue || ""}
              onChange={(e) => setValue(e.target.value)}
              placeholder="관심 스터디 분야나 강의명을 검색해 보세요"
              className="w-full h-9 bg-main-100 focus-visible:outline-none rounded-full pl-4 py-[7px] pr-[46px] text-sm leading-snug font-semibold text-gray-1000 placeholder:text-gray-600"
            />
            <button
              onClick={handleInputSubmit}
              type="submit"
              className="absolute right-0 pr-4 top-2"
              disabled={!inputValue}>
              <img src={ICONS.search.src} alt={ICONS.search.alt} />
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
