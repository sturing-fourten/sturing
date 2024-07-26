type StudyCardButtonProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void> | void;
};

export default function StudyCardButton({ children, onClick, type }: StudyCardButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex items-center justify-center w-full h-[42px] rounded-[5px] border border-gray-400 bg-white text-gray-1000 text-[14px] font-semibold tracking-[-0.42px]">
      {children}
    </button>
  );
}
