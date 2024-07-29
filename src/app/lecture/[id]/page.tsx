import FixedBottomBar from "@/components/domains/detail/FixedBottomBar";
import Header from "@/components/domains/detail/Header";
import Contents from "@/components/domains/detail/lecture/Contents";
import { getLectureAction } from "@/lib/database/action/lecture";
import { notFound } from "next/navigation";

export default async function LectureDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const lectureData = await getLectureAction(id);

  const lectureId = lectureData.lecture?._id;
  if (!lectureId) notFound();

  return (
    <>
      <div className="flex-col inline-flex w-full h-dvh">
        <div className="flex-1 overflow-auto scrollbar-hide">
          <Header page="lecture" lectureInfo={lectureData.lecture} />
          <Contents lectureData={lectureData} />
        </div>
        <FixedBottomBar page="lecture" id={id} />
      </div>
    </>
  );
}
