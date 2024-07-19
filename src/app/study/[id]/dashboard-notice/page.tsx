"use client";

import React from "react";
import Button from "@/components/commons/Button";
import TopBar from "@/components/commons/TopBar";
import WriteContent from "@/components/domains/dashboard/board/WriteContent";
import Title from "@/components/domains/recruit/commons/Title";
import { ICONS } from "@/constant/icons";
import { useDashBordNoticestore } from "@/store/dashboard-noticeStore";

export default function DashBoardNoticePage() {
  const { title, textarea, mustRead, setTitle, setTextarea, setMustRead } = useDashBordNoticestore();

  const handleWriteChange = (title: string, text: string) => {
    setTitle(title);
    setTextarea(text);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    handleWriteChange(newTitle, textarea);
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setTextarea(newText);
    handleWriteChange(title, newText);
  };

  const handleMustRead = () => {
    setMustRead(!mustRead);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("textarea", textarea);
    formData.append("mustRead", mustRead.toString());

    try {
    } catch (error) {
      console.error("POST 요청 실패:", error);
    }
  };

  const isInputEmpty = title.trim().length === 0 || textarea.trim().length === 0;

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full h-dvh flex-col inline-flex">
        <TopBar variant="back" />
        <div className="w-full px-[22px] py-[16px] flex-col gap-5 flex flex-1">
          <Title>공지 글을 작성해 주세요</Title>
          <WriteContent
            title={title}
            textarea={textarea}
            onTitleChange={handleTitleChange}
            onTextareaChange={handleTextareaChange}
          />
          <div
            className="flex items-center gap-[6px] w-fit text-neutral-400 text-m font-normal leading-snug cursor-pointer"
            onClick={handleMustRead}>
            {mustRead ? (
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
