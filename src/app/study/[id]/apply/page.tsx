import WriteStep from "@/components/domains/apply/steps/WriteStep";
import RoleStep from "@/components/domains/apply/steps/RoleStep";
import SuccessStep from "@/components/domains/apply/steps/SucessStep";
import { applyAction } from "@/lib/database/action/application";

interface IApplyPageProps {
  params: {
    id: string;
  };
}

const SAMPLE_APPLICATION = {
  title: "스터디 지원글 제목",
  resolution: "스터디 지원글 내용",
};

export default async function ApplyPage({ params: { id } }: IApplyPageProps) {
  return (
    <>
      <form action={applyAction}>
        <input type="hidden" name="studyId" value={id} />
        <input type="hidden" name="title" value={SAMPLE_APPLICATION.title} />
        <input type="hidden" name="resolution" value={SAMPLE_APPLICATION.resolution} />
        <input type="hidden" name="role" value="" />
        <button>지원하기</button>
      </form>
      <WriteStep />
      {/* <RoleStep /> */}
      {/* <SuccessStep /> */}
    </>
  );
}
