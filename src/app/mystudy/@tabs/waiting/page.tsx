import { InsideMenu } from "@/components/commons/card/element/InsideMenu";
import StudyApplyingCard from "@/components/commons/card/StudyApplyingCard";
import StudyOnGoingCard from "@/components/commons/card/StudyOnGoingCard";
import StudyRecruitingCard from "@/components/commons/card/StudyRecruitingCard";
import NoList from "@/components/domains/mystudy/NoList";
import {
  fetchRecruitStartMemberStudyListAction,
  fetchRecruitStartOwnerStudyListAction,
} from "@/lib/database/action/myStudyList";
import { useMyStudyListStore } from "@/store/myStudyListStore";
import { TMyStudy } from "@/types/study";

const menuList = [
  {
    id: "RECRUIT_START_OWNER",
    title: "모집 중",
  },
  {
    id: "RECRUIT_START_MEMBER",
    title: "지원 중",
  },
];

export default async function WaitingTabPage() {
  const myStudyListType = useMyStudyListStore.getState().myStudyListType;
  let myStudyList: TMyStudy[] = [];

  if (myStudyListType === "RECRUIT_START_OWNER") {
    myStudyList = await fetchRecruitStartOwnerStudyListAction();
  }
  if (myStudyListType === "RECRUIT_START_MEMBER") {
    myStudyList = await fetchRecruitStartMemberStudyListAction();
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
          myStudyListType === "RECRUIT_START_OWNER" &&
          (myStudyList.length === 0 ? (
            <NoList>모집 중 스터디가 없어요.</NoList>
          ) : (
            myStudyList.map((study) => <StudyRecruitingCard key={study._id.toString()} study={study} />)
          ))}
        {myStudyList &&
          myStudyListType === "RECRUIT_START_MEMBER" &&
          (myStudyList.length === 0 ? (
            <NoList>지원 중 스터디가 없어요.</NoList>
          ) : (
            myStudyList.map((study) => <StudyApplyingCard key={study._id.toString()} study={study} />)
          ))}
      </div>
    </>
  );
}
