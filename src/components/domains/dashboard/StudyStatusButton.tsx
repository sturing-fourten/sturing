"use client";

import Button from "@/components/commons/Button";
import { showToast } from "@/components/commons/Toast";
import { startStudyAction } from "@/lib/database/action/dashboard";
import { FormEvent } from "react";

const STUDY_STATUS_BUTTON_TYPE = {
  toProgress: {
    label: "스터디 시작하기",
  },
  toDone: {
    label: "스터디 종료하기",
  },
};
export default function StudyStatusButton({ studyId, type }: { studyId: any; type: "toProgress" | "toDone" }) {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("studyId", studyId);

    if (type === "toProgress") {
      await startStudyAction(formData);
      showToast("스터디가 시작되었어요.🎉");
    }
    if (type === "toDone") {
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Button
        varient="filled"
        className="w-full h-12 bg-blue-500 rounded text-white text-base font-semibold leading-normal">
        {STUDY_STATUS_BUTTON_TYPE[type].label}
      </Button>
    </form>
  );
}
