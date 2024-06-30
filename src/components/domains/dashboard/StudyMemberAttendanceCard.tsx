import Image from "next/image";
import { checkBlueOn, deleteBlue } from "@/../public/icons/icons";
import Checkbox from "./Checkbox";

export default function StudyMemberAttendanceCard() {
  const isEditing = true;
  return (
    <article className="py-6 px-4 bg-white rounded border border-gray-300">
      <div className="flex items-center gap-2">
        <span className="text-black text-base font-semibold leading-normal">출석체크</span>
        <span className="text-gray-600 text-sm font-medium leading-snug">06.03(월)</span>
        {isEditing && (
          <button className="ml-auto">
            <Image src={deleteBlue} alt="" width={24} height={24} />
          </button>
        )}
      </div>

      <hr className="mt-3 mb-4 bg-gray-300" />

      <ul className="flex gap-4 justify-between overflow-y-scroll scrollbar-hide">
        {[1, 2, 3, 4, 5, 6].map((member, index) => (
          <MemberItem key={index} />
        ))}
      </ul>
    </article>
  );
}

function MemberItem() {
  const isMe = false;
  const isChecked = false;

  return (
    <li className="flex-shrink-0 flex flex-col items-center justify-end gap-2 w-[66px] py-2">
      {!isMe && (
        <button
          className={`w-[66px] h-[28px] pb-[5px] bg-[url('/icons/alert-bg-66.svg')] bg-[length:66px] bg-no-repeat text-center text-[#787878] text-[11px] font-medium leading-none tracking-[-0.33px]`}>
          출석 알리기
        </button>
      )}
      <form className="flex flex-col justify-center items-center gap-2">
        <label htmlFor={""}>
          <input id={""} type="hidden" checked={isChecked} />
          <Checkbox isChecked={isChecked} />
        </label>
        <div
          className={`text-center text-[14px] font-medium leading-tight tracking-[-0.28px] ${
            isMe ? "text-main-500" : "text-black"
          }`}>
          갓생살자
        </div>
      </form>
    </li>
  );
}
