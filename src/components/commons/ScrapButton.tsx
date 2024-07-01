import Image from "next/image";
import { BOOKMARK } from "@/constant/icons";

interface ScrapButtonProps {
  isChecked: boolean;
  variant: "detail" | "card";
}

export default function ScrapButton({ isChecked, variant }: ScrapButtonProps) {
  const isDetail = variant === "detail";
  const scrapCount = 34;

  return (
    <>
      <div className={isDetail ? "w-[52px] h-[50px] flex flex-col items-center justify-center" : ""}>
        <form action="" className="w-[26px] h-[26px]">
          <button>
            {isChecked ? (
              <Image src={BOOKMARK.blueOn.src} alt={BOOKMARK.blueOn.alt} width={26} height={26} />
            ) : (
              <Image src={BOOKMARK.grayOff.src} alt={BOOKMARK.grayOff.alt} width={26} height={26} />
            )}
          </button>
        </form>
        {isDetail && (
          <span
            className={`text-[12px] leading-[150%] tracking-tight font-normal ${
              isChecked ? "text-main-500" : "text-gray-700"
            }`}>
            {scrapCount}
          </span>
        )}
      </div>
    </>
  );
}
