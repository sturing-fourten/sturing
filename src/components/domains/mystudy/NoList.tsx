export default function NoList({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center py-6 px-5 rounded-lg text-gray-700 text-[12px] font-semibold tracking-[-0.36px]">
      {children}
    </div>
  );
}
