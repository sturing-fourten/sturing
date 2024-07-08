"use client";

import { useEffect, useState } from "react";
import ProgressBar from "@/components/commons/ProgressBar";
import TopBar from "@/components/commons/TopBar";
import BottomButton from "@/components/domains/matching/BottomButton";
import InterestStep from "@/components/domains/matching/steps/InterestStep";
import LevelStep from "@/components/domains/matching/steps/LevelStep";
import TypeStep from "@/components/domains/matching/steps/TypeStep";
import LocationStep from "@/components/domains/matching/steps/LocationStep";
import MoodStep from "@/components/domains/matching/steps/MoodStep";

export default function MatchingPage() {
  const [steps, setSteps] = useState<number>(1);
  const [isInterestSelected, setIsInterestSelected] = useState<boolean>(false);
  const [isLevelSelected, setIsLevelSelected] = useState<boolean>(false);
  const [isTypeSelected, setIsTypeSelected] = useState<boolean>(false);
  const [isLocationSelected, setIsLocationSelected] = useState<boolean>(false);
  const [isModeSelected, setIsModeSelected] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handlePrevSection = () => {
    if (steps !== 1) setSteps((prevSteps) => prevSteps - 1);
  };

  const handleNextSection = () => {
    if (isNextButtonDisabled()) return;
    setSteps((prevSteps) => prevSteps + 1);
  };

  const isPrevButtonDisabled = () => {
    return steps === 1;
  };

  const isNextButtonDisabled = () => {
    if (steps === 1) return !isInterestSelected;
    if (steps === 2) return !isLevelSelected;
    if (steps === 3) return !isTypeSelected;
    if (steps === 4) return !isLocationSelected;
    if (steps === 5) return !isModeSelected;
    return false;
  };

  useEffect(() => {
    if (isModeSelected) {
      setIsSubmitted(true);
    }
  }, [isModeSelected]);

  const goToSuccessPage = () => {
    setIsSubmitted(true);
  };

  return (
    <form>
      <div className="flex flex-col w-full min-h-screen sm:h-dvh gap-5">
        <TopBar variant="back" />
        <ProgressBar maxSteps={5} steps={steps} />
        {steps === 1 && <InterestStep setIsSelected={setIsInterestSelected} />}
        {steps === 2 && <LevelStep setIsSelected={setIsLevelSelected} />}
        {steps === 3 && <TypeStep setIsSelected={setIsTypeSelected} />}
        {steps === 4 && <LocationStep setIsSelected={setIsLocationSelected} />}
        {steps === 5 && <MoodStep setIsSelected={setIsModeSelected} />}
        <BottomButton
          steps={steps}
          handlePrevSection={handlePrevSection}
          handleNextSection={handleNextSection}
          isPrevButtonDisabled={isPrevButtonDisabled}
          isNextButtonDisabled={isNextButtonDisabled}
          goToSuccessPage={goToSuccessPage}
          isSubmitted={isSubmitted}
        />
      </div>
    </form>
  );
}
