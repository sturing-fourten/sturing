"use client";

import WriteStep from "@/components/domains/apply/steps/WriteStep";
import RoleStep from "@/components/domains/apply/steps/RoleStep";
import SuccessStep from "@/components/domains/apply/steps/SucessStep";
import { applyAction } from "@/lib/database/action/application";
import ProgressBar from "@/components/commons/ProgressBar";
import { useEffect, useState } from "react";
import { useApplyStore } from "@/store/applyStore";
import Button from "@/components/commons/Button";
import TopBar from "@/components/commons/TopBar";

interface IApplyPageProps {
  params: {
    id: string;
  };
}

export default function ApplyPage({ params: { id } }: IApplyPageProps) {
  const [steps, setSteps] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const title = useApplyStore((state) => state.title);
  const setTitle = useApplyStore((state) => state.setTitle);
  const resolution = useApplyStore((state) => state.resolution);
  const setResolution = useApplyStore((state) => state.setResolution);
  const role = useApplyStore((state) => state.role);
  const setRole = useApplyStore((state) => state.setRole);

  const handleNextSection = () => {
    if (steps === 1 && (!title || !resolution)) return;
    setSteps((prevSteps) => prevSteps + 1);
  };

  const handlePrevSection = () => {
    setSteps((prevSteps) => prevSteps - 1);
  };

  const handleWriteChange = (title: string, resolution: string) => {
    setTitle(title);
    setResolution(resolution);
  };

  const handleRoleChange = (role: string) => {
    setRole(role);
  };

  const isInputEmpty = title.trim().length === 0 || resolution.trim().length === 0;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("studyId", id);
    formData.append("title", title);
    formData.append("resolution", resolution);
    formData.append("role", role);

    try {
      await applyAction(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("POST 요청 실패:", error);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      setTitle("");
      setResolution("");
      setRole("");
      setTitle("");
    }
  }, [isSubmitted]);

  if (isSubmitted) {
    return <SuccessStep />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full h-dvh flex-col inline-flex">
        <TopBar variant="save" />
        <ProgressBar maxSteps={2} steps={steps} />
        <div className="overflow-auto flex-1">
          {steps === 1 && <WriteStep onWriteChange={handleWriteChange} />}
          {steps === 2 && <RoleStep onRoleChange={handleRoleChange} />}
        </div>
        <footer className="flex gap-4 justify-center items-center w-full px-4 py-3">
          {steps === 1 ? (
            <Button
              type="button"
              varient="filled"
              addStyle="w-full h-[50px] rounded-[5px] bg-main-500 text-white"
              disabled={isInputEmpty}
              onClick={handleNextSection}>
              다음
            </Button>
          ) : (
            <>
              <Button
                type="button"
                varient="ghost"
                addStyle="w-1/4 h-[50px] rounded-[8px] text-gray-600 font-medium"
                onClick={handlePrevSection}>
                이전
              </Button>
              <Button
                type="submit"
                varient="filled"
                addStyle="w-3/4 h-[50px] rounded-[8px] bg-main-500 text-white font-medium">
                지원하기
              </Button>
            </>
          )}
        </footer>
      </div>
    </form>
  );
}
