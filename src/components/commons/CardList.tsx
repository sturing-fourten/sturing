interface CardListProps {
  children: React.ReactNode;
  isSingleLine?: boolean;
}

export default function CardList({ children, isSingleLine = false }: CardListProps) {
  return (
    <>
      <div
        className={`${
          isSingleLine
            ? "flex items-center whitespace-nowrap gap-[16px] min-w-full scrollbar-hide overflow-auto overflow-x-scroll"
            : "grid grid-cols-2 gap-x-2 gap-y-5 sm:gap-x-4"
        }`}>
        {children}
      </div>
    </>
  );
}
