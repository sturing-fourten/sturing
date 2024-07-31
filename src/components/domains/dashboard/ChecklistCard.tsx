"use client";

import DashboardCardLayout from "./DashboardCardLayout";
import DashboardCardTitle from "../DashboardCardTitle";
import { TCheckListData } from "@/types/dashboard";
import { format, startOfDay } from "date-fns";
import { useDashboardScheduleStore } from "@/store/dashboardScheduleStore";
import MyCheckList from "./MyCheckList";
import { DASHBOARD_FUNCTION_TYPE } from "@/constant/dashboard";

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
      <DashboardCardTitle title={DASHBOARD_FUNCTION_TYPE.checkList}>
        <span className="text-gray-600 text-sm font-medium leading-snug">{format(new Date(), "M월 d일")}</span>

        <span className="ml-auto pb-0.5 text-main-500 text-sm font-medium leading-snug">
          {currentDateCheckListDataItem
            ? `${checkedListCount}/${currentDateCheckListDataItem?.contentList.length}`
            : ""}
        </span>
      </DashboardCardTitle>

      <MyCheckList
        studyId={studyId}
        currentDate={currentDate}
        contentList={currentDateCheckListDataItem?.contentList ?? []}
      />
    </DashboardCardLayout>
  );
}
