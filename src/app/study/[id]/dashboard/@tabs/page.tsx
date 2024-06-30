import StudyAddFunctionCard from "@/components/domains/dashboard/StudyFunctionAddButtonCard";
import StudyFunctionEditButton from "@/components/domains/dashboard/StudyFunctionEditButton";
import StudyMemberProgressCard from "@/components/domains/dashboard/StudyMemberProgressCard";
import StudyMemberChecklistCard from "@/components/domains/dashboard/StudyMemberChecklistCard";
import StudyMemberAttendanceCard from "@/components/domains/dashboard/StudyMemberAttendanceCard";

export default function Tab1() {
  const data = {
    progress: {}, // "진척도"
    attendance: {}, // "출석체크"
    checkList: [{}], // "체크리스트"
    proofList: [], // "사진 인증"
  };

  const isAnyFeatureActive = data.progress || data.attendance || data.checkList.length > 0 || data.proofList.length > 0;

  return (
    <section className="flex flex-col py-7 px-4">
      {isAnyFeatureActive && <StudyFunctionEditButton />}

      <div className="flex flex-col gap-4">
        {data.progress ? <StudyMemberProgressCard /> : <StudyAddFunctionCard title="진척도" />}
        {data.attendance ? <StudyMemberAttendanceCard /> : <StudyAddFunctionCard title="출석체크" />}
        {data.checkList.length > 0 ? <StudyMemberChecklistCard /> : <StudyAddFunctionCard title="체크리스트" />}
        {data.proofList.length > 0 ? (
          <article className="py-6 px-4 bg-white rounded border border-gray-300">사진 인증</article>
        ) : (
          <StudyAddFunctionCard title="사진 인증" />
        )}
      </div>
    </section>
  );
}
