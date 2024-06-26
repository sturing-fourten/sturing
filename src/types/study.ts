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
