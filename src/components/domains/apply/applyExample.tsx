import { useState } from "react";

export default function ApplyExample() {
  const [openExample, setOpenExample] = useState(false);

  const handleOpenExample = () => {
    setOpenExample((prev) => !prev);
  };

  return (
    <>
      <button type="button" onClick={handleOpenExample}>
        <div className="flex gap-1.5 items-center">
          <img className="w-8 h-5" src="/icons/tip.svg" alt="tip 아이콘" />
          <p className="text-neutral-400 text-xs font-normal leading-none">스터디 지원 예시가 궁금하다면?</p>
        </div>
      </button>
      {openExample && (
        <div className="w-80 border border-gray-300 rounded p-3">
          <img src="/images/study-example.png" alt="스터디 소개 예시" />
        </div>
      )}
    </>
  );
}
