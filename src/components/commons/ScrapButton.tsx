"use client";

import Image from "next/image";
import { BOOKMARK } from "@/constant/icons";
import {
  createLectureBookmarkAction,
  deleteLectureBookmarkAction,
  getLecturebookmarks,
} from "@/lib/database/action/lecture";
import { useEffect, useState } from "react";

interface ScrapButtonProps {
  variant: "detail" | "card";
  lectureId: string;
}

export default function ScrapButton({ variant, lectureId }: ScrapButtonProps) {
  // const lectureBookmarkData = await getLecturebookmarks(lectureId);
  const [isChecked, setChecked] = useState<boolean>();
  // const scrapCount = lectureBookmarkData.length;
  const isDetail = variant === "detail";
  const sampleUserId = "668bcc45f6265b4ece271a16";

  // const handleBookmark = async () => {
  //   if (isChecked) {
  //     await createLectureBookmarkAction(lectureId, sampleUserId);
  //   } else {
  //     await deleteLectureBookmarkAction(lectureId, lectureBookmarkData._id);
  //   }
  // };

  return (
    <>
      <div className={isDetail ? "w-[52px] h-[50px] flex flex-col items-center justify-center" : ""}>
        <form className="w-[26px] h-[26px]">
          <button type="button">
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
            {/* {scrapCount} */}
          </span>
        )}
      </div>
    </>
  );
}
