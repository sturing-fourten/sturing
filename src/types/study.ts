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
  name: string;
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
