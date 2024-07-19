type AlertMessage = {
  src: string;
  alt: string;
  title: string;
  content: string;
};

export type AlertMessageConfig = {
  matching: AlertMessage;
  recruit: AlertMessage;
  apply: AlertMessage;
  notFound: AlertMessage;
  preparing: AlertMessage;
  board: AlertMessage;
};
