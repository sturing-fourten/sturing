import { InsideMenu } from "@/components/commons/card/element/InsideMenu";
import StudyOnGoingCard from "@/components/commons/card/StudyOnGoingCard";
import NoList from "@/components/domains/mystudy/NoList";
import { fetchProgressStudyListAction, fetchRecruitEndStudyListAction } from "@/lib/database/action/myStudyList";
import { useMyStudyListStore } from "@/store/myStudyListStore";
import { TMyStudy } from "@/types/study";

const menuList = [
  {
    id: "PROGRESS",
    title: "진행 중",
  },
  {
    id: "RECRUIT_END",
    title: "진행 예정",
  },
];

export default async function ProgressTabPage() {
  const myStudyListType = useMyStudyListStore.getState().myStudyListType;
  let myStudyList: TMyStudy[] = [];

  if (myStudyListType === "PROGRESS") {
    myStudyList = await fetchProgressStudyListAction();
  }
  if (myStudyListType === "RECRUIT_END") {
    myStudyList = await fetchRecruitEndStudyListAction();
  }

  return (
    <>
      <nav className="flex gap-3 pt-5 px-4">
        {menuList.map((item, index) => (
          <InsideMenu key={index} id={item.id} title={item.title} />
        ))}
      </nav>
      <div className="flex flex-col py-5 gap-4 px-4">
        {myStudyList &&
          myStudyListType === "PROGRESS" &&
          (myStudyList.length === 0 ? (
            <NoList>진행 중인 스터디가 없어요.</NoList>
          ) : (
            myStudyList.map((study) => <StudyOnGoingCard key={study._id.toString()} isStarted={true} study={study} />)
          ))}
        {myStudyList &&
          myStudyListType === "RECRUIT_END" &&
          (myStudyList.length === 0 ? (
            <NoList>진행 예정인 스터디가 없어요.</NoList>
          ) : (
            myStudyList.map((study) => <StudyOnGoingCard key={study._id.toString()} isStarted={false} study={study} />)
          ))}
      </div>
    </>
  );
}
