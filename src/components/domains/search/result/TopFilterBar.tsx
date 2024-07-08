"use client";

import FilterModal from "@/components/modal/FilterModal";
import { ICONS } from "@/constant/icons";
import useOpenToggle from "@/hooks/useOpenToggle";
import FilterShortCutButton from "./FilterShortCutButton";

export default function TopFilterBar() {
  const { isOpen, openToggle } = useOpenToggle();

  return (
    <>
      <section className="px-4 py-[19px] flex items-center gap-2 border-b-[6px] border-gray-200">
        <div className="w-full flex items-center gap-2 overflow-x-auto scrollbar-hide">
          <FilterShortCutButton text="분야" />
          <FilterShortCutButton text="지역" />
          <FilterShortCutButton text="인원" />
          <FilterShortCutButton text="기간" />
          <FilterShortCutButton text="수준" />
          <FilterShortCutButton text="역할" />
        </div>
        <button onClick={openToggle}>
          <img src={ICONS.searchFilter.src} alt={ICONS.searchFilter.alt} />
        </button>
      </section>
      {isOpen && <FilterModal onClose={openToggle} />}
    </>
  );
}
