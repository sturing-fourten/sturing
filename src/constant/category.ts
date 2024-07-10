export const CATEGORY = (category: string): string | undefined => {
  const categoryList: Record<string, string> = {
    design: "디자인",
    develop: "개발 · 테크",
    marketing: "마케팅",
    business: "비즈니스",
    economic: "경제",
    language: "외국어",
    certificate: "자격증",
    selfDevelop: "자기 계발",
  };

  return categoryList[category];
};
