"use client";

import { useDashboardTeamStore } from "@/store/dashboardTeamStore";
import { useEffect } from "react";
import { CheckItemWrapper } from "./CheckItemWrapper";

export default function SelectedUserCheckList({ allMemberTodayCheckList }: { allMemberTodayCheckList: any }) {
  const { selectedUserId, setSelectedUserId } = useDashboardTeamStore();
  const selectedUserCheckList = allMemberTodayCheckList.find((item: any) => item.userId === selectedUserId)?.data[0]
    ?.contentList;

  useEffect(() => {
    if (!selectedUserId) setSelectedUserId(allMemberTodayCheckList[0].userId);
  }, [selectedUserId]);

  return (
    <ul className="flex flex-col gap-0.5">
      {selectedUserId &&
        selectedUserCheckList &&
        selectedUserCheckList.map((checkItem: any) => <CheckItemWrapper key={checkItem._id} checkItem={checkItem} />)}
    </ul>
  );
}
