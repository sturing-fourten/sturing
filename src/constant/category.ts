export const CATEGORY = (category: string): string | undefined => {
  const categoryList: Record<string, string> = {
    DESIGN: "디자인",
    DEVELOP: "개발 · 테크",
    MARKETING: "마케팅",
    BUSINESS: "비즈니스",
    ECONOMY: "경제",
    LANGUAGE: "외국어",
    LICENSE: "자격증",
    "SELF-DEVELOPMENT": "자기 계발",
  };

  return categoryList[category];
};
