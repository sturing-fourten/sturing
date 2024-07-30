"use client";
import Image from "next/image";
import { checkBlueOn } from "@/../public/icons/icons";

export default function Checkbox({
  isChecked,
  type = "attendance",
  isMyCheckItem,
}: {
  isChecked: boolean;
  type?: "attendance" | "checkList";
  isMyCheckItem: boolean;
}) {
  return (
    <button
      className={`w-5 h-5 rounded-full cursor-pointer disabled:cursor-not-allowed ${
        !isChecked && "border-2 border-gray-400 bg-gray-200"
      }`}
      disabled={getIsDisabled(isMyCheckItem, type, isChecked)}>
      {isChecked && <Image src={checkBlueOn} alt="체크 아이콘" width={20} height={20} />}
    </button>
  );
}

function getIsDisabled(isMyCheckItem: boolean, type: string, isChecked: boolean) {
  // 체크리스트는 내 체크리스트가 아닌 경우 무조건 disabled
  if (isMyCheckItem === false) return true;
  // 출석 체크는 체크한 뒤로 수정이 불가하므로 체크된 경우 무조건 disabled
  if (type === "attendance" && isChecked) return true;
  // 그 외에는 disabled 되어야 하는 경우 없음
  else return false;
}
