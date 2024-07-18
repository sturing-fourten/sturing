"use client";

import { useRouter } from "next/navigation";

interface SaveButtonProps {
  onCancel: () => void;
  onSave: () => void;
}

export default function SaveButton({ onCancel, onSave }: SaveButtonProps) {
  const router = useRouter();
  const prevPage = () => {
    router.back();
  };

  return (
    <>
      <button
        type="button"
        className="text-gray-600 text-[14px] tracking-[-0.42px] leading-[22px]"
        onClick={() => {
          onCancel();
          prevPage();
        }}>
        취소
      </button>
      <button
        type="button"
        className="text-gray-600 text-[14px] tracking-[-0.42px] leading-[22px]"
        onClick={() => {
          onSave();
          prevPage();
        }}>
        임시저장
      </button>
    </>
  );
}
