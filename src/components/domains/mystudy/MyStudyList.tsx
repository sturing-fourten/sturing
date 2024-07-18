import { fetchMyStudyListByListType } from "@/lib/database/action/myStudyList";
import { TMyStudyListType, useMyStudyListStore } from "@/store/myStudyListStore";
import NoList from "./NoList";
import StudyOnGoingCard from "@/components/commons/card/StudyOnGoingCard";
import StudyRecruitingCard from "@/components/commons/card/StudyRecruitingCard";
import StudyApplyingCard from "@/components/commons/card/StudyApplyingCard";
import StudyDoneCard from "@/components/commons/card/StudyDoneCard";

function convertMyStudyListTypeToKorean(myStudyListType: TMyStudyListType) {
  switch (myStudyListType) {
    case "PROGRESS":
      return "진행 중";
    case "RECRUIT_END":
      return "진행 예정";
    case "RECRUIT_START_OWNER":
      return "모집 중";
    case "RECRUIT_START_MEMBER":
      return "지원 중";
    case "DONE":
      return "완료";
  }
}

export default async function MyStudyList({ myStudyListType }: { myStudyListType: TMyStudyListType }) {
  await fetchMyStudyListByListType(myStudyListType);
  const myStudyList = useMyStudyListStore.getState().currentStudyList;

  if (!myStudyList || myStudyList.length === 0)
    return <NoList>{convertMyStudyListTypeToKorean(myStudyListType)} 스터디가 없어요.</NoList>;
  else {
    return (
      <>
        <div className="flex flex-col pt-5 gap-4 px-4">
          {myStudyListType === "PROGRESS" &&
            myStudyList.map((study) => <StudyOnGoingCard key={study._id.toString()} isStarted={true} study={study} />)}
          {myStudyListType === "RECRUIT_END" &&
            myStudyList.map((study) => <StudyOnGoingCard key={study._id.toString()} isStarted={false} study={study} />)}
          {myStudyListType === "RECRUIT_START_OWNER" &&
            myStudyList.map((study) => <StudyRecruitingCard key={study._id.toString()} study={study} />)}
          {myStudyListType === "RECRUIT_START_MEMBER" &&
            myStudyList.map((study) => <StudyApplyingCard key={study._id.toString()} study={study} />)}
          {myStudyListType === "DONE" &&
            myStudyList.map((study) => <StudyDoneCard key={study._id.toString()} study={study} />)}
        </div>
      </>
    );
  }
}
