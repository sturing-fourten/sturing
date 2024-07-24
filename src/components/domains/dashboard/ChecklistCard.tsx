"use client";

import Checkbox from "./Checkbox";
import DashboardCardLayout from "./DashboardCardLayout";
import DashboardCardTitle from "../DashboardCardTitle";
import { TCheckListData } from "@/types/dashboard";
import { postCheckItemAction } from "@/lib/database/action/dashboard";
import { startOfDay } from "date-fns";
import NoList from "../mystudy/NoList";
import { useDashboardScheduleStore } from "@/store/dashboardScheduleStore";
import { useState } from "react";

interface IChecklistCardProps {
  checkListData: TCheckListData[];
  studyId: any;
}

export default function ChecklistCard({ checkListData, studyId }: IChecklistCardProps) {
  const { currentDate } = useDashboardScheduleStore();
  const [newCheckItemContent, setNewCheckItemContent] = useState("");

  if (!currentDate || !checkListData) return <></>;

  const currentDateCheckListDataItem = checkListData.find(
    (checkItem: any) => startOfDay(checkItem.date).getTime() === startOfDay(currentDate).getTime(),
  );

  const checkedListCount = currentDateCheckListDataItem?.contentList.filter((item) => item.isChecked === true).length;

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await postCheckItemAction({
      studyId,
      newCheckItemDate: currentDate.toString(),
      newCheckItemContent,
    });
    setNewCheckItemContent("");
  };

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

      {/** @todo 임시 UI 개선해서 모달로 변경
       */}
      <form className="flex justify-start items-center gap-2 w-full" onSubmit={handleFormSubmit}>
        <input type="hidden" name="studyId" value={studyId} />
        <input type="hidden" name="newCheckItemDate" value={currentDate.toString()} />
        <input
          type="text"
          className="w-full border p-2 rounded focus:outline-none text-gray-900 text-sm font-medium leading-tight"
          placeholder="체크리스트를 입력해주세요"
          value={newCheckItemContent}
          onChange={(e) => setNewCheckItemContent(e.target.value)}
        />
      </form>

      <ul className="mt-4">
        {currentDateCheckListDataItem ? (
          currentDateCheckListDataItem.contentList.map((checkItem, index) => (
            <TodoItem key={index} checkItem={checkItem} />
          ))
        ) : (
          <NoList>해당 날짜에 체크리스트가 없어요.</NoList>
        )}
      </ul>
    </DashboardCardLayout>
  );
}

function TodoItem({ checkItem }: { checkItem: any }) {
  const { content, isChecked, _id: checkItemId } = checkItem;
  return (
    <li className="flex justify-between items-center py-2 rounded-sm">
      <form className="flex justify-start items-center gap-2" action={""}>
        <Checkbox isChecked={isChecked} />
        <div className="text-gray-900 text-sm font-medium leading-tight">{content}</div>
      </form>
    </li>
  );
}
