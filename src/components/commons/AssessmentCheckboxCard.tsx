import Image from "next/image";
import { checkOn, checkOff } from "../../../public/icons/icons";

interface IAssessmentCheckboxCardProps {
  option: {
    text: string;
    image?: { src: string; alt: string };
  };
}

export function AssessmentCheckboxCard({ option }: IAssessmentCheckboxCardProps) {
  // TODO checkbox toggle
  const isChecked = true;
  return (
    <li>
      <label
        className={`flex justify-between items-center h-14 p-4 rounded border ${
          isChecked ? "border-main-500 bg-main-100" : "border-gray-300 bg-white"
        }`}>
        <input type="checkbox" className="hidden" />
        <div className="flex justify-start items-center gap-2">
          {option.image && <Image src={option.image.src} alt={option.image.alt} width={16} height={16} />}
          <div className="text-black text-sm font-medium leading-tight">{option.text}</div>
        </div>
        {isChecked ? (
          <Image src={checkOn} alt="체크박스 아이콘" width={24} height={24} />
        ) : (
          <Image src={checkOff} alt="체크박스 아이콘" width={24} height={24} />
        )}
      </label>
    </li>
  );
}
