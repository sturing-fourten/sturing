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
import { useState } from "react";
import { TFilterMenuId } from "@/types/filter";
import { FILTER_MENU } from "@/constant/filter";

const { CATEGORY, LOCATION, NUMBER_OF_TEAM, PERIOD, LEVEL, ROLE } = FILTER_MENU;

interface FilterModalProps {
  onClose: () => void;
}

export default function FilterModal({ onClose }: FilterModalProps) {
  const [menu, setMenu] = useState<TFilterMenuId>(CATEGORY.id);

  return (
    <>
      <ModalContainer onClose={onClose} isCloseClickOutside isBottomFixed>
        <div className="w-screen sm:w-[600px] bg-white rounded-t-2xl">
          <div className="px-4 pt-3 pb-5">
            <div className="flex justify-center">
              <div className="w-8 h-1 bg-gray-400 rounded-[5px] mb-3" />
            </div>
            <h1 className="w-full text-lg font-medium leading-normal text-gray-1000">필터</h1>
          </div>
          <section>
            <nav className="px-4 flex justify-between items-center gap-3 bg-white border-b border-gray-300">
              <TabMenuButton
                onClick={() => setMenu(CATEGORY.id)}
                title={CATEGORY.title}
                isSelected={menu === CATEGORY.id}
                isUnderlined
                isFilterTab
              />
              <TabMenuButton
                onClick={() => setMenu(LOCATION.id)}
                title={LOCATION.title}
                isSelected={menu === LOCATION.id}
                isUnderlined
                isFilterTab
              />
              <TabMenuButton
                onClick={() => setMenu(NUMBER_OF_TEAM.id)}
                title={NUMBER_OF_TEAM.title}
                isSelected={menu === NUMBER_OF_TEAM.id}
                isUnderlined
                isFilterTab
              />
              <TabMenuButton
                onClick={() => setMenu(PERIOD.id)}
                title={PERIOD.title}
                isSelected={menu === PERIOD.id}
                isUnderlined
                isFilterTab
              />
              <TabMenuButton
                onClick={() => setMenu(LEVEL.id)}
                title={LEVEL.title}
                isSelected={menu === LEVEL.id}
                isUnderlined
                isFilterTab
              />
              <TabMenuButton
                onClick={() => setMenu(ROLE.id)}
                title={ROLE.title}
                isSelected={menu === ROLE.id}
                isUnderlined
                isFilterTab
              />
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
              <Button varient="ghost" addStyle="border-gray-300 rounded-lg py-3 w-[109px] text-gray-600 shrink-0">
                <img src={ICONS.reset.src} alt={ICONS.reset.alt} className="mr-1" />
                초기화
              </Button>
              <Button varient="filled" addStyle="bg-main-500 w-full py-3 text-white rounded-lg">
                {"20"}개의 결과 보기
              </Button>
            </div>
          </section>
        </div>
      </ModalContainer>
    </>
  );
}
