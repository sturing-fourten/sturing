import RecruitInfo from "./RecruitInfo";
import RecruitedMembersList from "./RecruitedMembersList";
import RecruitComments from "./RecruitComments";
import { TLectureInfoData } from "@/types/api/lecture";
import { TStudyDetailInfoData } from "@/types/api/study";
import DetailTabMenu from "@/components/commons/DetailTabMenu";

interface IContentsProps {
  study: TStudyDetailInfoData["study"];
  lecture: TLectureInfoData;
  memberList: TStudyDetailInfoData["teamMemberList"];
}

export default function Contents({ study, lecture, memberList }: IContentsProps) {
  return (
    <>
      <div className="mb-[73px]" id="recruit_Info">
        <DetailTabMenu type="study" />
        <div className="px-4 bg-gray-100 pb-12">
          <RecruitInfo study={study} lecture={lecture} />
          <RecruitedMembersList study={study} memberList={memberList} />
          <RecruitComments />
        </div>
      </div>
    </>
  );
}
