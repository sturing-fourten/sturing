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
  imageSrc: string;
  imageAlt: string;
};

export type StudyCategoryMenu = {
  design: StudyCategory;
  develop: StudyCategory;
  marketing: StudyCategory;
  business: StudyCategory;
  economic: StudyCategory;
  language: StudyCategory;
  certificate: StudyCategory;
  selfDevelop: StudyCategory;
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
