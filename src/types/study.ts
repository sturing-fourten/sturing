export type TTabMenuLinkUnderlinedItem = {
  id: string;
  title: string;
  href: string;
  count?: number;
};

export type TTabMenuButtonUnderlinedItem = {
  id: string;
  title: string;
  onClick: () => void;
};

type StudyCategory = {
  src: string;
  alt: string;
};

export type StudyCategoryMenu = {
  DESIGN: StudyCategory;
  DEVELOP: StudyCategory;
  MARKETING: StudyCategory;
  BUSINESS: StudyCategory;
  ECONOMY: StudyCategory;
  LANGUAGE: StudyCategory;
  LICENSE: StudyCategory;
  "SELF-DEVELOPMENT": StudyCategory;
};

export type UserFavoriteFieldType = {
  friendly: StudyCategory;
  professional: StudyCategory;
  serious: StudyCategory;
  systematic: StudyCategory;
  passionate: StudyCategory;
  responsible: StudyCategory;
  learningFocused: StudyCategory;
  collaborative: StudyCategory;
  proactive: StudyCategory;
  freewheeling: StudyCategory;
};
