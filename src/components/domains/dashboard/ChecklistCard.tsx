"use client";

import DashboardCardLayout from "./DashboardCardLayout";
import DashboardCardTitle from "../DashboardCardTitle";
import { TCheckListData } from "@/types/dashboard";
import { startOfDay } from "date-fns";
import { useDashboardScheduleStore } from "@/store/dashboardScheduleStore";
import MyCheckList from "./MyCheckList";

interface IChecklistCardProps {
  checkListData: TCheckListData[];
  studyId: any;
}

export default function ChecklistCard({ checkListData, studyId }: IChecklistCardProps) {
  const { currentDate } = useDashboardScheduleStore();

  if (!currentDate) return <></>;

  const currentDateCheckListDataItem = checkListData?.find(
    (checkItem: any) => startOfDay(checkItem.date).getTime() === startOfDay(currentDate).getTime(),
  );

  const checkedListCount = currentDateCheckListDataItem?.contentList.filter((item) => item.isChecked === true).length;

  return (
    <DashboardCardLayout>
      <DashboardCardTitle title="체크리스트">
        <span className="pb-0.5 text-main-500 text-sm font-medium leading-snug">
          {currentDateCheckListDataItem
            ? `${checkedListCount}/${currentDateCheckListDataItem?.contentList.length}`
            : ""}
        </span>
        {/* <button className="ml-auto">
          <Image src={addBlue} alt="" width={24} height={24} />
        </button> */}
      </DashboardCardTitle>

      <MyCheckList
        studyId={studyId}
        currentDate={currentDate}
        contentList={currentDateCheckListDataItem?.contentList ?? []}
      />
    </DashboardCardLayout>
  );
}
