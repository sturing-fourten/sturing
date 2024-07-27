export interface DashboardNoticeState {
  title: string;
  setTitle: (title: string) => void;
  content: string;
  setContent: (content: string) => void;
  isImportant: boolean;
  setIsImportant: (isImportant: boolean) => void;
}

export interface DashboardFreeState {
  title: string;
  setTitle: (title: string) => void;
  content: string;
  setContent: (content: string) => void;
  imageUrl: string;
  setImageUrl: (image: string) => void;
}
export interface DashboardTaskState {
  title: string;
  setTitle: (title: string) => void;
  content: string;
  setContent: (content: string) => void;
  imageUrl: string;
  setImageUrl: (image: string) => void;
}
