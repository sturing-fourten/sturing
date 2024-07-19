export interface DashboardNoticeState {
  title: string;
  setTitle: (title: string) => void;
  textarea: string;
  setTextarea: (textarea: string) => void;
  mustRead: boolean;
  setMustRead: (mustRead: boolean) => void;
}
