"use client";

import { toggleCheckItemAction } from "@/lib/database/action/dashboard";
import Checkbox from "../Checkbox";
import { useOptimistic } from "react";
import mongoose from "mongoose";

type State = { isChecked: boolean; requestIds: string[] };
type Value = { requestId: string };

export default function MyCheckItem({ checkItem, studyId }: { checkItem: any; studyId: any }) {
  const { content, isChecked, _id: checkItemId } = checkItem;

  const initState = {
    isChecked,
    requestIds: [],
  };

  const [optimisticState, addOptimisticValue] = useOptimistic<State, Value>(initState, (state, { requestId }) => {
    // 이미 처리된 request라면 무시
    if (state.requestIds.includes(requestId)) {
      console.log("무시");
      return state;
    }

    return {
      ...state,
      isChecked: !state.isChecked,
      requestIds: [...state.requestIds, requestId],
    };
  });

  const formAction = async () => {
    const requestId = new mongoose.Types.ObjectId().toString();
    addOptimisticValue({ requestId });

    await toggleCheckItemAction({
      studyId,
      checkItemId,
    });
  };

  return (
    <li className="flex justify-between items-center py-2 rounded-sm">
      <form className="flex justify-start items-center gap-2 text-[0px]" action={formAction}>
        <Checkbox isChecked={optimisticState.isChecked} type="checkList" isMyCheckItem={true} />
        <div className="text-gray-900 text-sm font-medium leading-tight">{content}</div>
      </form>
    </li>
  );
}
