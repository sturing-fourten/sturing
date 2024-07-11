import { Dispatch, SetStateAction } from "react";

export type NextStepList = {
  id: string;
  href: string;
};

export type TypeContentConfig = {
  online: string;
  offline: string;
  irrelevant: string;
};

type LevelConfig = {
  name: string;
  explanation: string;
};

export type LevelContentConfig = {
  beginner: LevelConfig;
  newcomer: LevelConfig;
  junior: LevelConfig;
  senior: LevelConfig;
};

export type StepsProps = {
  userNickname?: string;
  setIsSelected: Dispatch<SetStateAction<boolean>>;
};

export interface MatchingType {
  userId: string;
  levels: string;
  progressWay: "online" | "offline" | "irrelevant";
  locations: string;
  locationIsVisible: boolean;
  moods: string;
}
