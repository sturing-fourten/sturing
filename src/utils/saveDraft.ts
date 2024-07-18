export const saveDraft = (data: any, STORAGE_KEY: string) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const loadDraft = (STORAGE_KEY: string) => {
  const savedDraft = localStorage.getItem(STORAGE_KEY);
  return savedDraft ? JSON.parse(savedDraft) : null;
};

export const clearDraft = (STORAGE_KEY: string) => {
  localStorage.removeItem(STORAGE_KEY);
};
