"use client";
import { useParams } from "next/navigation";
import { useDashboardTeamStore } from "@/store/dashboardTeamStore";
import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";
import CheckItem from "../CheckItem";

interface ICheckItemWrapperProps {
  checkItem: any;
}

export function CheckItemWrapper(props: ICheckItemWrapperProps) {
  const { checkItem } = props;
  const { id: studyId } = useParams();

  const { selectedUserId } = useDashboardTeamStore();
  const { user, fetchUser } = useUserStore();
  const userId = user ? user._id.toString() : null;
  const isMyCheckItem = userId === selectedUserId;

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, [user, fetchUser]);

  if (!studyId) return <></>;
  return <CheckItem checkItem={checkItem} studyId={studyId} isMyCheckItem={isMyCheckItem} />;
}

{
  /* @todo 리액션 추후 개발
  <form>
    <label
      className={`flex justify-center items-center gap-1 w-[38px] h-[22px] rounded-3xl border text-xs cursor-pointer ${
        isIncludingMe ? "border-main-500 bg-main-100 text-gray-1000" : "border-gray-200 bg-gray-100 text-gray-300"
      }`}
      htmlFor={""}>
      <input
        className="appearance-none absolute"
        id={""}
        type="checkbox"
        checked={isChecked}
        onChange={onChangeChecked}
      />
      <span>👍</span>
      <span>10</span>
    </label>
  </form> */
}
