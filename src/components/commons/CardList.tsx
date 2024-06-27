interface CardListProps {
  children: React.ReactNode;
}

export default function CardList({ children }: CardListProps) {
  return (
    <>
      <div className="flex items-center whitespace-nowrap gap-[16px] min-w-full scrollbar-hide overflow-auto overflow-x-scroll">
        {children}
      </div>
    </>
  );
}
