import Link from "next/link";

interface writeBoardLinkProps {
  studyId: string;
  type: string;
}

export default function WriteBoardLink({ studyId, type }: writeBoardLinkProps) {
  return (
    <Link
      className="inline-flex justify-center items-center gap-1 h-6 px-1.5 py-1 ml-auto bg-blue-500 rounded-sm text-center text-white text-xs font-medium leading-none"
      href={`/study/${studyId}/dashboard-${type}`}>
      <img src="/icons/write-board.svg" alt="" width={16} height={16} />
      작성하기
    </Link>
  );
}
