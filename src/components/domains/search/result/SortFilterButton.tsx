import { MAPPING_SORT_BY, SORT_BY_FILTER } from "@/constant/filter";
import { ICONS } from "@/constant/icons";
import useOpenToggle from "@/hooks/useOpenToggle";
import { useFilterStore } from "@/store/FilterStore";

export default function SortFilterButton() {
  const { isOpen, openToggle, ref } = useOpenToggle();
  const { sortBy, setSortByFilter } = useFilterStore();

  return (
    <>
      <div ref={ref} className="relative">
        <button
          onClick={openToggle}
          className="text-gray-800 text-sm font-semibold leading-normal flex items-center gap-[5px]">
          {MAPPING_SORT_BY[sortBy]}
          <img src={ICONS.rightArrowBlack.src} alt="sort" width={13} className="rotate-90" />
        </button>
        {isOpen && (
          <div className="absolute top-6 right-0 w-20  py-2 flex flex-col gap-2 items-end border border-gray-300 bg-white rounded-lg z-popover">
            {SORT_BY_FILTER.map((filter) => (
              <li
                key={filter.value}
                onClick={() => {
                  setSortByFilter(filter.value);
                  openToggle();
                }}
                className="list-none w-full py-1 text-center text-gray-800 text-sm font-medium hover:bg-gray-00">
                {filter.option}
              </li>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
