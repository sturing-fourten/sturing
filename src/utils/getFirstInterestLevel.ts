type TInterestLevel = {
  interest: string;
  level: string;
};

export function getFirstInterestLevel(jsonStr: string): { interest: string; level: string } {
  const parsedArray: TInterestLevel[] = JSON.parse(jsonStr);

  const { interest, level } = parsedArray[0];
  return { interest, level };
}
