"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/commons/Button";
import TopBar from "@/components/commons/TopBar";
import WriteContent from "@/components/domains/dashboard/board/WriteContent";
import Title from "@/components/domains/recruit/commons/Title";
import { ICONS } from "@/constant/icons";
import { useDashBordNoticestore } from "@/store/dashboard-noticeStore";
import { useRouter } from "next/navigation";
import { postBoardAction } from "@/lib/database/action/board";

export default function DashBoardNoticePage({ params }: { params: { id: string } }) {
  const { id: studyId } = params;
  const router = useRouter();

  const { title, content, isImportant, setTitle, setContent, setIsImportant } = useDashBordNoticestore();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleWriteChange = (title: string, text: string) => {
    setTitle(title);
    setContent(text);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    handleWriteChange(newTitle, content);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = event.target.value;
    setContent(newContent);
    handleWriteChange(title, newContent);
  };

  const handleIsImportant = () => {
    setIsImportant(!isImportant);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("studyId", studyId);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("postType", "notice");
    formData.append("isImportant", isImportant.toString());

    try {
      const res = await postBoardAction(formData);

      if (res.status !== 200) {
        throw new Error(res.message);
      }
      setIsSubmitted(true);
      router.replace(`/study/${studyId}/dashboard-notice/success`);
    } catch (error) {
      console.error("POST 요청 실패:", error);
    }
  };

  const isInputEmpty = title.trim().length === 0 || content.trim().length === 0;

  useEffect(() => {
    if (isSubmitted) {
      setTitle("");
      setContent("");
      setIsImportant(false);
    }
  }, [isSubmitted]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full h-dvh flex-col inline-flex">
        <TopBar variant="back" />
        <hr className="w-full" />
        <div className="w-full px-[22px] py-[16px] flex-col gap-5 flex flex-1">
          <Title>공지 글을 작성해 주세요</Title>
          <WriteContent
            title={title}
            content={content}
            onTitleChange={handleTitleChange}
            onContentChange={handleContentChange}
          />
          <div
            className="flex items-center gap-[6px] w-fit text-neutral-400 text-m font-normal leading-snug cursor-pointer"
            onClick={handleIsImportant}>
            {isImportant ? (
              <img src={ICONS.toggleCheckBlue.src} alt={ICONS.toggleCheckBlue.alt} />
            ) : (
              <img src={ICONS.toggleCheckGray.src} alt={ICONS.toggleCheckGray.alt} />
            )}
            필독
          </div>
        </div>
        <div className="w-full py-3 px-4 flex gap-2.5">
          <Button
            type="submit"
            varient="filled"
            addStyle="w-full h-12 bg-blue-500 text-white font-semibold rounded"
            disabled={isInputEmpty}>
            등록하기
          </Button>
        </div>
      </div>
    </form>
  );
}
