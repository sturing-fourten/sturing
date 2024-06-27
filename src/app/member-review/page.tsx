import { AssessmentCheckboxCard } from "@/components/commons/AssessmentCheckboxCard";
import Button from "@/components/commons/Button";
import TopBar from "@/components/commons/TopBar";
import SectionTitle from "@/components/domains/mystudy/SectionTitle";
import {
  POSITIVE_ASSESSMENT_LIST,
  REUNION_ASSESSMENT_LIST,
  SATISFACTION_ASSESSMENT_LIST,
} from "@/constant/teammate-review";
import Image from "next/image";

export default function MemberReviewPage() {
  return (
    <>
      <section>
        <TopBar type="back">팀원 후기 남기기</TopBar>

        <form className="mb-20">
          <section className="flex justify-start items-center gap-3 h-24 py-5 px-4">
            <Image src={""} alt="profile image" width={60} height={60} />
            <div className="flex flex-col justify-start items-start">
              <p className="text-gray-1000 text-base font-semibold leading-normal">{"user Id"}</p>
              <p className="text-gray-600 text-xs font-medium leading-snug">{"study Name"}</p>
            </div>
          </section>

          <hr className="bg-gray-200" />

          <section className="pt-11 px-4">
            <SectionTitle className="mb-5">{"user name"}님과의 스터디는 어떠셨나요?</SectionTitle>
            <ul className="flex items-center justify-between gap-[6px]">
              {SATISFACTION_ASSESSMENT_LIST.map((option, index) => (
                <SatisfactionAssessment option={option} key={index} />
              ))}
            </ul>
          </section>

          <section className="pt-12 px-4">
            <SectionTitle className="mb-5">어떤 점이 최고였나요?</SectionTitle>
            <ul className="flex flex-col gap-3">
              {POSITIVE_ASSESSMENT_LIST.map((option, index) => (
                <AssessmentCheckboxCard key={index} option={option} />
              ))}
            </ul>
          </section>

          <section className="pt-12 px-4">
            <SectionTitle className="mb-5">팀원으로 다시 만나길 희망하시나요?</SectionTitle>
            <ul className="flex flex-col gap-3">
              {REUNION_ASSESSMENT_LIST.map((option, index) => (
                <AssessmentCheckboxCard key={index} option={option} />
              ))}
            </ul>
          </section>

          <section className="pt-12 px-4">
            <SectionTitle className="mb-[5px]">팀원 후기를 알려주세요.</SectionTitle>
            <p className="mb-5 text-gray-700 text-sm font-normal leading-snug">
              해당 피드백은 익명으로 상대방에게만 보여집니다.
            </p>
            {/* TODO 글자수 카운트 */}
            <textarea
              maxLength={500}
              className="w-full h-[200px] py-3 px-4 rounded border border-gray-300 text-gray-600 text-sm font-medium leading-snug"
              placeholder="후기를 적어주세요 (선택사항)"
            />
          </section>
        </form>
      </section>

      {/* TODO 공통 컴포넌트 적용 */}
      <footer className="fixed bottom-0 w-[inherit] py-3 px-4 bg-white">
        <Button
          varient="filled"
          className="w-full h-12 bg-blue-500 rounded text-white text-base font-semibold leading-normal">
          완료
        </Button>
      </footer>
    </>
  );
}

interface ISatisfactionAssessmentProps {
  text: string;
  imageOnSrc: string;
  imageOffSrc: string;
  imageAlt: string;
}

function SatisfactionAssessment({ option }: { option: ISatisfactionAssessmentProps }) {
  const isChecked = false;
  return (
    <li>
      <button className="flex flex-col items-center gap-3 px-5 text-gray-600 text-sm font-medium leading-tight">
        {isChecked ? (
          <Image src={option.imageOnSrc} alt={option.imageAlt} width={70} height={70} />
        ) : (
          <Image src={option.imageOffSrc} alt={option.imageAlt} width={70} height={70} />
        )}
        <p>{option.text}</p>
      </button>
    </li>
  );
}
