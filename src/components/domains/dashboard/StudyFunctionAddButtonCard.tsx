import Image from "next/image";
import { addBlue } from "@/../public/icons/icons";

export default function StudyFunctionAddButtonCard({ title }: { title: string }) {
  return (
    <button className="flex flex-col justify-center items-center gap-3 w-full h-28 px-5 py-6 bg-white rounded border border-gray-300">
      <div className="text-[#212121] text-base font-semibold leading-normal">{title}</div>
      <Image src={addBlue} alt="" width={24} height={24} />
    </button>
  );
}
