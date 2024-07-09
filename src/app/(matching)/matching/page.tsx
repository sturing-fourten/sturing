"use client";

import { useEffect, useState } from "react";
import ProgressBar from "@/components/commons/ProgressBar";
import TopBar from "@/components/commons/TopBar";
import BottomButton from "@/components/domains/matching/BottomButton";
import InterestStep from "@/components/domains/matching/steps/InterestStep";
import LevelStep from "@/components/domains/matching/steps/LevelStep";
import ProgressWayStep from "@/components/domains/matching/steps/ProgressWayStep";
import LocationStep from "@/components/domains/matching/steps/LocationStep";
import MoodStep from "@/components/domains/matching/steps/MoodStep";
import { useUserStore } from "@/store/userStore";
import { useLevelsStore, useLocationsStore, useMoodsStore, useProgressWayStore } from "@/store/matchingStore";
import { matching } from "@/lib/database/action/matching";

export default function MatchingPage() {
  const { user, fetchUser } = useUserStore();
  const [steps, setSteps] = useState<number>(1);
  const [isInterestSelected, setIsInterestSelected] = useState<boolean>(false);
  const [isLevelSelected, setIsLevelSelected] = useState<boolean>(false);
  const [isProgressWaySelected, setIsProgressWaySelected] = useState<boolean>(false);
  const [isLocationSelected, setIsLocationSelected] = useState<boolean>(false);
  const [isModeSelected, setIsModeSelected] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const userNickname = user?.nickname || "";

  const selectedLevel = useLevelsStore((state) => state.levels);
  const selectedProgressWay = useProgressWayStore((state) => state.progressWay);
  const selectedLocations = useLocationsStore((state) => state.locations);
  const selectedMoods = useMoodsStore((state) => state.moods);
  console.log(selectedLevel, selectedProgressWay, selectedLocations, selectedMoods);

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
    if (steps === 3) return !isProgressWaySelected;
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
    document.getElementById("submitButton")?.click();
  };

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, [user]);

  return (
    <form action={matching}>
      <div className="flex flex-col w-full min-h-screen sm:h-dvh gap-5">
        <TopBar variant="back" />
        <ProgressBar maxSteps={5} steps={steps} />
        {steps === 1 && <InterestStep setIsSelected={setIsInterestSelected} userNickname={userNickname} />}
        {steps === 2 && <LevelStep setIsSelected={setIsLevelSelected} />}
        {steps === 3 && <ProgressWayStep setIsSelected={setIsProgressWaySelected} userNickname={userNickname} />}
        {steps === 4 && <LocationStep setIsSelected={setIsLocationSelected} userNickname={userNickname} />}
        {steps === 5 && <MoodStep setIsSelected={setIsModeSelected} userNickname={userNickname} />}
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
      <input hidden name="levels" value={JSON.stringify(selectedLevel)} onChange={(e) => e.target.value} />
      <input hidden name="progressWay" value={selectedProgressWay} onChange={(e) => e.target.value} />
      <input hidden name="locations" value={JSON.stringify(selectedLocations)} onChange={(e) => e.target.value} />
      <input hidden name="moods" value={JSON.stringify(selectedMoods)} onChange={(e) => e.target.value} />
      {isSubmitted && <button id="submitButton" type="submit" hidden></button>}
    </form>
  );
}
