export interface DashboardNoticeState {
  title: string;
  setTitle: (title: string) => void;
  textarea: string;
  setTextarea: (textarea: string) => void;
  mustRead: boolean;
  setMustRead: (mustRead: boolean) => void;
}

export interface DashboardFreeState {
  title: string;
  setTitle: (title: string) => void;
  textarea: string;
  setTextarea: (textarea: string) => void;
  image: string;
  setImage: (image: string) => void;
}
export interface DashboardTaskState {
  title: string;
  setTitle: (title: string) => void;
  textarea: string;
  setTextarea: (textarea: string) => void;
  image: string;
  setImage: (image: string) => void;
}
