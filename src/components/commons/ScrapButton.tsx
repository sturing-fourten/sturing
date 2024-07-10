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

export interface Bookmark {
  lectureId: string;
  userId: string;
  _id: string;
}

export default function ScrapButton({ variant, lectureId }: ScrapButtonProps) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [isChecked, setChecked] = useState<boolean>(false);
  const [scrapCount, setScrapCount] = useState<number>(0);
  const isDetail = variant === "detail";
  const sampleUserId = "668bcc45f6265b4ece271a16";

  useEffect(() => {
    const fetchLectureBookmarkData = async () => {
      try {
        const data = await getLecturebookmarks(lectureId);
        const filteredBookmarks = data.filter((bookmark: Bookmark) => bookmark.lectureId === lectureId);
        setBookmarks(filteredBookmarks);
        setScrapCount(filteredBookmarks.length);
        setChecked(filteredBookmarks.some((bookmark: Bookmark) => bookmark.userId === sampleUserId));
      } catch (error) {
        console.error("Error fetching bookmarks:", error);
      }
    };
    fetchLectureBookmarkData();
  }, [lectureId]);

  const handleBookmark = async () => {
    try {
      if (isChecked) {
        const bookmarkToDelete = bookmarks.find((bookmark: Bookmark) => bookmark.userId === sampleUserId);
        if (bookmarkToDelete) {
          const { _id } = bookmarkToDelete;
          await deleteLectureBookmarkAction(lectureId, _id);
          setScrapCount((prevCount) => prevCount - 1);
        }
      } else {
        await createLectureBookmarkAction(lectureId, sampleUserId);
        setScrapCount((prevCount) => prevCount + 1);
      }
      setChecked(!isChecked);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={isDetail ? "w-[52px] h-[50px] flex flex-col items-center justify-center" : ""}>
      <form className="w-[26px] h-[26px]">
        <button type="button" onClick={handleBookmark}>
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
  );
}
