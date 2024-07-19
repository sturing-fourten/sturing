"use client";

import FilterModal from "@/components/modal/FilterModal";
import { ICONS } from "@/constant/icons";
import useOpenToggle from "@/hooks/useOpenToggle";
import FilterShortCutButton from "./FilterShortCutButton";
import { TFilterMenuId } from "@/types/filter";
import { useState } from "react";
import { FILTER_MENU, FILTER_MENU_LIST } from "@/constant/filter";
import { useFilterStore } from "@/store/FilterStore";

export default function TopFilterBar() {
  const { isOpen, openToggle } = useOpenToggle();
  const [menu, setMenu] = useState<TFilterMenuId>(FILTER_MENU.CATEGORY.id);
  const { categories, locations, memberCount, startDate, endDate, levels, roles } = useFilterStore();

  const handleFilterMenu = (menuId: TFilterMenuId) => {
    setMenu(menuId);
  };

  const handleFilterShortCutClick = (menuId: TFilterMenuId) => {
    setMenu(menuId);
    openToggle();
  };

  const handleActive = (filterMenu: TFilterMenuId) => {
    switch (filterMenu) {
      case "category":
        return categories.length > 0;
      case "location":
        return locations.length > 0;
      case "memberCount":
        return memberCount > 0;
      case "period":
        return !!startDate || !!endDate;
      case "level":
        return levels.length > 0;
      case "role":
        return roles.length > 0;
    }
  };

  return (
    <>
      <section className="px-4 py-[19px] flex items-center gap-2 border-b-[6px] border-gray-200">
        <div className="w-full flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {FILTER_MENU_LIST.map((filterMenu) => (
            <FilterShortCutButton
              isActive={handleActive(filterMenu.id)}
              onClick={() => handleFilterShortCutClick(filterMenu.id)}
              key={filterMenu.id}
              text={filterMenu.title}
            />
          ))}
        </div>
        <button onClick={openToggle}>
          <img src={ICONS.searchFilter.src} alt={ICONS.searchFilter.alt} />
        </button>
      </section>
      {isOpen && <FilterModal onClose={openToggle} onClick={handleFilterMenu} menu={menu} />}
    </>
  );
}
