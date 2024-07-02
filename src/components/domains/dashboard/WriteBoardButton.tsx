export default function WriteBoardButton() {
  return (
    <button className="inline-flex justify-start items-center gap-1 h-6 px-1.5 py-1 ml-auto bg-blue-500 rounded-sm text-white text-xs font-medium leading-none">
      <img src="/icons/write-board.svg" alt="" width={16} height={16} />
      작성하기
    </button>
  );
}
