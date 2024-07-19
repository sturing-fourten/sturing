import TabMenuButton from "../commons/TabMenuButton";
import ModalContainer from "./ModalContainer";
import Button from "../commons/Button";
import { ICONS } from "@/constant/icons";
import CategoryFilter from "../domains/search/filter/CategoryFilter";
import LocationFilter from "../domains/search/filter/LocationFilter";
import NumberOfTeamMemberFilter from "../domains/search/filter/NumberOfTeamMemberFilter";
import PeriodFilter from "../domains/search/filter/PeriodFilter";
import JobLevelFilter from "../domains/search/filter/JobLevelFilter";
import RoleFilter from "../domains/search/filter/RoleFilter";
import { TFilterMenuId } from "@/types/filter";
import { FILTER_MENU, FILTER_MENU_LIST } from "@/constant/filter";
import { useFilterStore, useSearchTabMenuStore } from "@/store/FilterStore";
import { useSearchResultStore } from "@/store/SearchResultStore";

const { CATEGORY, LOCATION, NUMBER_OF_TEAM, PERIOD, LEVEL, ROLE } = FILTER_MENU;

interface FilterModalProps {
  onClose: () => void;
  onClick: (menuId: TFilterMenuId) => void;
  menu: TFilterMenuId;
}

export default function FilterModal({ onClose, onClick, menu }: FilterModalProps) {
  const { resetFilters } = useFilterStore();
  const { studyList, lectureList } = useSearchResultStore();
  const { menu: SearchTabMenu } = useSearchTabMenuStore();
  const handleFilterModalClose = () => {
    onClick(CATEGORY.id);
    onClose();
  };

  const resultCount = () => {
    switch (SearchTabMenu) {
      case "total":
        return studyList.length + lectureList.length;
      case "study":
        return studyList.length;
      case "lecture":
        return lectureList.length;
    }
  };

  return (
    <>
      <ModalContainer onClose={handleFilterModalClose} isCloseClickOutside isBottomFixed>
        <div className="w-screen sm:w-[600px] bg-white rounded-t-2xl">
          <div className="px-4 pt-3 pb-5">
            <div className="flex justify-center">
              <div className="w-8 h-1 bg-gray-400 rounded-[5px] mb-3" />
            </div>
            <h1 className="w-full text-lg font-medium leading-normal text-gray-1000">필터</h1>
          </div>
          <section>
            <nav className="px-4 flex justify-between items-center gap-3 bg-white border-b border-gray-300">
              {FILTER_MENU_LIST.map((filterMenu) => (
                <TabMenuButton
                  key={filterMenu.id}
                  onClick={() => onClick(filterMenu.id)}
                  title={filterMenu.title}
                  isSelected={menu === filterMenu.id}
                  isUnderlined
                  isFilterTab
                />
              ))}
            </nav>
            <div className="pt-[30px] px-4 h-[453px] overflow-y-auto ">
              {menu === CATEGORY.id && <CategoryFilter />}
              {menu === LOCATION.id && <LocationFilter />}
              {menu === NUMBER_OF_TEAM.id && <NumberOfTeamMemberFilter />}
              {menu === PERIOD.id && <PeriodFilter />}
              {menu === LEVEL.id && <JobLevelFilter />}
              {menu === ROLE.id && <RoleFilter />}
            </div>
            <div className="px-4 py-5 flex items-center gap-[10px]">
              <Button
                onClick={resetFilters}
                varient="ghost"
                addStyle="border-gray-300 rounded-lg py-3 w-[109px] text-gray-600 shrink-0">
                <img src={ICONS.reset.src} alt={ICONS.reset.alt} className="mr-1" />
                초기화
              </Button>
              <Button onClick={onClose} varient="filled" addStyle="bg-main-500 w-full py-3 text-white rounded-lg">
                {resultCount()}개의 결과 보기
              </Button>
            </div>
          </section>
        </div>
      </ModalContainer>
    </>
  );
}
