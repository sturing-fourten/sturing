import LectureCard from "@/components/commons/card/LectureCard";
import Link from "next/link";

export default function ScrapLecturePage() {
  return (
    <ul className="flex flex-col gap-4 py-5 px-4">
      {[1, 2, 3].map((lecture, index) => (
        <Link href="" key={index}>
          <LectureCard isScraped={true} variant="card" />
        </Link>
      ))}
    </ul>
  );
}
