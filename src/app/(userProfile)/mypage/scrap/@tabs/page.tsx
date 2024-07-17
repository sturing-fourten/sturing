import { StudyRecruitCard } from "@/components/commons/card/StudyRecruitCard";
import Link from "next/link";

export default function ScrapStudyPage() {
  return (
    <ul className="grid grid-cols-2 gap-2 py-5 px-4">
      {[1, 2, 3].map((lecture, index) => (
        <Link href="" key={index}>
          {/* <StudyRecruitCard isMini={true} isScraped={true} /> */}
        </Link>
      ))}
    </ul>
  );
}
