import Image from "next/image";
import { checkBlueOn } from "@/../public/icons/icons";

export default function Checkbox({
  isChecked,
  type = "attendance",
}: {
  isChecked: boolean;
  type?: "attendance" | "checkList";
}) {
  return (
    <button
      className={`w-5 h-5 rounded-full cursor-pointer ${!isChecked && "border-2 border-gray-400 bg-gray-200"}`}
      disabled={type === "attendance" && isChecked}>
      {isChecked && <Image src={checkBlueOn} alt="체크 아이콘" width={20} height={20} />}
    </button>
  );
}
