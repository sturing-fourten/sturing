"use client";

import TextField from "@/components/commons/TextField";
import Button from "@/components/commons/Button";
import { useState } from "react";
import Link from "next/link";

export default function WriteContent() {
  const [title, setTitle] = useState("");
  const [textarea, setTextarea] = useState("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(event.target.value);
  };

  const isInputEmpty = title.trim().length === 0 || textarea.trim().length === 0;

  return (
    <div className="flex flex-col justify-between items-center h-full">
      <div className="w-full">
        <div className="flex flex-col gap-3 w-full">
          <span className="text-gray-900 text-[14px] font-medium tracking-[-0.42px] leading-[22px]">
            스터디 지원글 제목
          </span>
          <TextField
            type="text"
            name="제목"
            placeholder="스터디 모집자에게 나를 어필할 수 있는 한마디"
            addStyle="w-full placeholder:text-gray-600 text-gray-900"
            maxLength={24}
            onChange={handleTitleChange}
          />
          <div className="flex justify-end gap-1">
            <span className="text-end text-[12px] font-normal tracking-[-0.36px] leading-[18px] text-gray-900">
              {title.length}
            </span>
            <span className="text-end text-[12px] font-normal tracking-[-0.36px] leading-[18px] text-gray-400">
              / 24
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <span className="text-gray-900 text-[14px] font-medium tracking-[-0.42px] leading-[22px]">나의 각오</span>
          <textarea
            name="나의 각오"
            placeholder="지원글을 입력해 주세요 (ex. 나의 성격, 장점, 지원동기)"
            className="w-full h-[230px] py-3 px-4 resize-none rounded-[5px] border border-gray-300 text-[14px] font-medium text-gray-900 placeholder:text-gray-600 placeholder:font-medium focus-visible:outline-none focus:border-main-500"
            maxLength={500}
            onChange={handleTextareaChange}
          />
          <div className="flex justify-end gap-1">
            <span className="text-end text-[12px] font-normal tracking-[-0.36px] leading-[18px] text-gray-900">
              {textarea.length}
            </span>
            <span className="text-end text-[12px] font-normal tracking-[-0.36px] leading-[18px] text-gray-400">
              / 500
            </span>
          </div>
        </div>
        <div className="w-full">
          <button type="button" className="flex items-center gap-[6px] ">
            <span className="flex justify-center items-center w-[32px] h-[20px] bg-main-100 rounded-full text-center text-[11px] font-normal text-main-400 tracking-[-0.22px] leading-[16px]">
              TIP
            </span>
            <span className="text-gray-600 text-[12px] font-normal tracking-[-0.36px] leading-[18px]">
              스터디 지원 예시가 궁금하다면?
            </span>
          </button>
        </div>
      </div>
      <Link href="/apply/role" className="w-full">
        <Button
          varient="filled"
          addStyle="w-full h-[50px] rounded-[5px] bg-main-500 text-white"
          disabled={isInputEmpty}>
          다음
        </Button>
      </Link>
    </div>
  );
}
