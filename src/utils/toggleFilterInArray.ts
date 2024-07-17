const toggleFilterInArray = <T>(array: T[], item: T): T[] => {
  if (!item) return array;
  return array.includes(item) ? array.filter((i) => i !== item) : [...array, item];
};

export default toggleFilterInArray;
