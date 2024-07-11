"use client";

import { bookmarkGrayOn, bookmarkGrayOff } from "@/../public/icons/icons";
import Image from "next/image";
import { TagMain } from "../tag/TagMain";
import { TagLight } from "../tag/TagLight";
import { TagRate } from "../tag/TagRate";
import Link from "next/link";
import { LectureData } from "@/app/lecture/[id]/page";
import { CATEGORY } from "@/constant/category";
import { useEffect, useState } from "react";
import { Bookmark } from "../ScrapButton";
import {
  createLectureBookmarkAction,
  deleteLectureBookmarkAction,
  getLecturebookmarks,
} from "@/lib/database/action/bookmark";

interface LectureCardProps {
  variant: "card" | "info";
  lecture: LectureData;
}

export default function LectureCard({ variant, lecture }: LectureCardProps) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [isChecked, setChecked] = useState<boolean>(false);

  const sampleUserId = "668bcc45f6265b4ece271a16";

  const isCard = variant === "card";
  const { _id: lectureId, online, category, platform, rating, title, instructor } = lecture;

  useEffect(() => {
    const fetchLectureBookmarkData = async () => {
      try {
        const data = await getLecturebookmarks(lectureId);
        const filteredBookmarks = data.filter((bookmark: Bookmark) => bookmark.lectureId === lectureId);
        setBookmarks(filteredBookmarks);
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
        }
      } else {
        await createLectureBookmarkAction(lectureId, sampleUserId);
      }
      setChecked(!isChecked);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Link href={`/lecture/${lectureId}`}>
      <article className={isCard ? "py-[13px] px-[17px] border border-gray-300 rounded-[5px] bg-white" : ""}>
        <section className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-1">
            <TagMain>{online ? "온라인" : "오프라인"}</TagMain>
            <TagLight>{CATEGORY(category)}</TagLight>
            <TagLight>{platform}</TagLight>
            <TagRate>{rating}</TagRate>
          </div>
          {isCard && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleBookmark();
              }}>
              <Image src={isChecked ? bookmarkGrayOn : bookmarkGrayOff} alt="bookmark icon" width={24} height={24} />
            </button>
          )}
        </section>
        <p className="mb-1 text-[14px] font-semibold tracking-[-0.28px] text-black">{title}</p>
        <p className="text-[12px] font-medium tracking-[-0.36px] text-gray-600">{instructor}</p>
      </article>
    </Link>
  );
}
