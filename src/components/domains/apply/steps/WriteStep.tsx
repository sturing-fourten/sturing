"use client";

import TextField from "@/components/commons/TextField";
import Title from "@/components/domains/apply/Title";
import { useApplyStore } from "@/store/applyStore";
import ApplyExample from "../applyExample";

interface WriteStepProps {
  onWriteChange: (title: string, text: string) => void;
}

export default function WriteStep({ onWriteChange }: WriteStepProps) {
  const title = useApplyStore((state) => state.title);
  const setTitle = useApplyStore((state) => state.setTitle);
  const resolution = useApplyStore((state) => state.resolution);
  const setResolution = useApplyStore((state) => state.setResolution);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    onWriteChange(newTitle, resolution);
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setResolution(newText);
    onWriteChange(title, newText);
  };

  return (
    <div className="flex-col justify-between w-full px-4 mt-5">
      <Title>스터디 지원글을 작성해주세요</Title>
      <div className="w-full mt-5">
        <div className="flex flex-col gap-3 w-full">
          <span className="text-gray-900 text-[14px] font-medium tracking-[-0.42px] leading-[22px]">
            스터디 지원글 제목
          </span>
          <TextField
            type="text"
            name="제목"
            placeholder="스터디 모집자에게 나를 어필할 수 있는 한마디"
            addStyle="w-full text-gray-900"
            maxLength={24}
            value={title}
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
            value={resolution}
            onChange={handleTextareaChange}
          />
          <div className="flex justify-end gap-1">
            <span className="text-end text-[12px] font-normal tracking-[-0.36px] leading-[18px] text-gray-900">
              {resolution.length}
            </span>
            <span className="text-end text-[12px] font-normal tracking-[-0.36px] leading-[18px] text-gray-400">
              / 500
            </span>
          </div>
        </div>
        <div className="w-full">
          <ApplyExample />
        </div>
      </div>
    </div>
  );
}
