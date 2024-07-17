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
  setIsSelected?: Dispatch<SetStateAction<boolean>>;
};

export type MatchingType = {
  userId: string;
  levels: string;
  progressWay: "online" | "offline" | "irrelevant";
  locations: string;
  locationIsVisible: boolean;
  moods: string;
} | null;

export type level = {
  interest: string;
  level: string;
};

export type location = {
  city: string;
  district: string;
};

export type LevelsState = {
  levels: level[];
  setLevels: (levels: level[]) => void;
};

export type ProgressWayState = {
  progressWay: string;
  setProgressWay: (progressWay: string) => void;
};

export type LocationsState = {
  locations: location[];
  setLocations: (locations: location[]) => void;
};

export type MoodsState = {
  moods: string[];
  setMoods: (moods: string[]) => void;
};

export type MatchingState = {
  matching: MatchingType | null;
  fetchMatching: () => Promise<void>;
  setMatching: (matching: MatchingType) => void;
};
