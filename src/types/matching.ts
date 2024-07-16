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

export interface MatchingType {
  userId: string;
  levels: string;
  progressWay: "online" | "offline" | "irrelevant";
  locations: string;
  locationIsVisible: boolean;
  moods: string;
}

export interface level {
  interest: string;
  level: string;
}

export interface location {
  city: string;
  district: string;
}

export interface LevelsState {
  levels: level[];
  setLevels: (levels: level[]) => void;
}

export interface ProgressWayState {
  progressWay: string;
  setProgressWay: (progressWay: string) => void;
}

export interface LocationsState {
  locations: location[];
  setLocations: (locations: location[]) => void;
}

export interface MoodsState {
  moods: string[];
  setMoods: (moods: string[]) => void;
}

export interface MatchingState {
  matching: MatchingType | null;
  fetchMatching: () => Promise<void>;
  setMatching: (matching: MatchingType) => void;
}
