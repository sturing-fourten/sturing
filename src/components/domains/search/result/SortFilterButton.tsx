import { ICONS } from "@/constant/icons";
import useOpenToggle from "@/hooks/useOpenToggle";

export default function SortFilterButton() {
  const { isOpen, openToggle, ref } = useOpenToggle();

  return (
    <>
      <div ref={ref} className="relative">
        <button
          onClick={openToggle}
          className="text-gray-800 text-sm font-semibold leading-normal flex items-center gap-[5px]">
          최신순
          <img src={ICONS.rightArrowBlack.src} alt="sort" width={13} className="rotate-90" />
        </button>
        {isOpen && (
          <div className="absolute top-6 right-0 w-20  py-2 flex flex-col gap-2 items-end border border-gray-300 bg-white rounded-lg z-popover">
            <li className="list-none w-full py-1 text-center text-gray-800 text-sm font-medium hover:bg-gray-00">
              최신순
            </li>
            <li className="list-none w-full py-1 text-center text-gray-800 text-sm font-medium">마감순</li>
            <li className="list-none w-full py-1 text-center text-gray-800 text-sm font-medium">인기순</li>
          </div>
        )}
      </div>
    </>
  );
}
