interface CardListProps {
  children: React.ReactNode;
  isSingleLine?: boolean;
}

export default function CardList({ children, isSingleLine = false }: CardListProps) {
  return (
    <>
      <div
        className={`shrink-0 w-full ${
          isSingleLine
            ? "flex items-center gap-4 w-full scrollbar-hide overflow-auto overflow-x-scroll pr-4 sm:pr-0"
            : "grid grid-cols-2 gap-x-2 gap-y-5 sm:gap-x-4"
        }`}>
        {children}
      </div>
    </>
  );
}
