export default function HorizontalDivider({ addStyle }: { addStyle?: string }) {
  return (
    <>
      <div className={`h-[1px] w-full bg-gray-300 ${addStyle}`} />
    </>
  );
}
