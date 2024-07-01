import Image from "next/image";
import Checkbox from "./Checkbox";
import DashboardCardLayout from "./DashboardCardLayout";
import DashboardCardTitle from "../DashboardCardTitle";

export default function StudyMemberChecklistCard() {
  const isEditing = true;

  return (
    <DashboardCardLayout>
      <DashboardCardTitle isEditing={isEditing} title="체크리스트">
        <span className="text-main-500 text-sm font-semibold leading-snug">3/4</span>
      </DashboardCardTitle>

      <ul className="flex gap-4 justify-between overflow-y-scroll scrollbar-hide my-4">
        {[1, 2, 3, 4, 5, 6].map((member, index) => (
          <MemberItem key={index} />
        ))}
      </ul>

      <ul className="flex flex-col gap-0.5">
        {[1, 2].map((todo, index) => (
          <TodoItem key={index} />
        ))}
      </ul>
    </DashboardCardLayout>
  );
}

function MemberItem() {
  const isCurrent = true;
  const isMe = false;

  return (
    <li className="flex-shrink-0 flex flex-col items-center justify-end gap-2 w-[66px]">
      {!isMe && (
        <button
          className={`w-[56px] h-[28px] pb-[5px] bg-[url('/icons/alert-bg-56.svg')] bg-center bg-[length:56px] bg-no-repeat text-center text-[#787878] text-[11px] font-medium leading-none`}>
          노크하기
        </button>
      )}
      <div
        className={`flex flex-col justify-center items-center gap-1 py-[10px] px-2 rounded border ${
          isCurrent && "border-main-500 bg-main-100"
        }`}>
        <Image src="" alt="" width={40} height={40} />
        <div
          className={`text-center text-[14px] font-medium leading-tight tracking-[-0.28px] ${
            isMe ? "text-main-500" : "text-black"
          }`}>
          갓생살자
        </div>
        <div className="text-center text-stone-500 text-xs font-normal leading-none">일정팀장</div>
      </div>
    </li>
  );
}

function TodoItem() {
  const isChecked = true;
  const isIncludingMe = true;

  return (
    <li className="flex justify-between items-center py-2 rounded-sm">
      <form className="flex justify-start items-center gap-2">
        <label className="" htmlFor={""}>
          <input id={""} type="hidden" checked={isChecked} />
          <Checkbox isChecked={isChecked} />
        </label>
        <div className="text-gray-900 text-sm font-medium leading-tight">2강 듣고 과제노트 작성하기</div>
      </form>
      <form>
        <label
          className={`flex justify-center items-center gap-1 w-[38px] h-[22px] rounded-3xl border text-xs cursor-pointer ${
            isIncludingMe ? "border-main-500 bg-main-100 text-gray-1000" : "border-gray-200 bg-gray-100 text-gray-300"
          }`}
          htmlFor={""}>
          <input className="appearance-none absolute" id={""} type="checkbox" checked={isChecked} />
          <span>👍</span>
          <span>10</span>
        </label>
      </form>
    </li>
  );
}
