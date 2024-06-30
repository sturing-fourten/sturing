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
