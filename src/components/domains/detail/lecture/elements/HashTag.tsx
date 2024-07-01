export default function HashTag({ tag }: { tag: string }) {
  return (
    <>
      <p className="text-main-500 text-[14px] font-medium leading-[150%]">#{tag}</p>
    </>
  );
}
