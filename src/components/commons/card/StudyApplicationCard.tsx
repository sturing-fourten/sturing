import StudyApplyInfo from "./element/StudyApplyInfo";
import Avatar from "../Avatar";
import { TApplicationSummary } from "@/types/application";
import StudyCardLink from "./element/StudyCardLink";

export default function StudyApplicationCard(props: TApplicationSummary) {
  const { _id: applicationId, profileImageUrl, status, nickname, title } = props;
  status;
  return (
    <article className="flex flex-col gap-4 px-5 py-6 bg-white border border-gray-300 rounded-lg">
      <StudyApplyInfo status={status} />

      <section className="flex items-center justify-stretch gap-3">
        <Avatar width={40} height={40} profileImageUrl={profileImageUrl} hasBorder={true} />

        <div>
          <div className="flex items-center gap-2 text-[12px] font-medium tracking-[-0.36px]">
            <span className="text-gray-700">{nickname}</span>
            <span className="w-[1px] h-3 bg-gray-400"></span>
            <span className="text-gray-600">{"직업"}</span>
            <span className="w-[1px] h-3 bg-gray-400"></span>
            <span className="text-gray-600">{"직업 수준"}</span>
          </div>
          <p className="text-[12px] font-semibold tracking-[-0.36px] text-gray-900">{title}</p>
        </div>
      </section>

      <StudyCardLink href="/">지원서 보기</StudyCardLink>
    </article>
  );
}
