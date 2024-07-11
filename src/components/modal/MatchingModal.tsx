import Link from "next/link";
import Button from "../commons/Button";
import ModalContainer from "./ModalContainer";

interface MatchingModalProps {
  onClose: () => void;
}

export default function MatchingModal({ onClose }: MatchingModalProps) {
  return (
    <ModalContainer onClose={onClose} isCloseClickOutside>
      <div className="w-80 h-52 p-6 bg-white rounded flex-col justify-center items-center gap-6 inline-flex">
        <div className="text-slate-950 text-lg font-bold font-['Pretendard Variable'] leading-relaxed">
          스터디 매칭 항목 선택
        </div>
        <p className="w-64 text-center text-stone-500 text-sm font-medium font-['Pretendard Variable'] leading-tight">
          관심있는 스터디 카테고리와
          <br />
          선호하는 스터디 유형을 선택해주세요
        </p>
        <Link href="/matching">
          <Button
            varient="filled"
            addStyle="w-64 h-12 bg-blue-500 rounded text-white text-base font-semibold font-['Pretendard Variable'] leading-normal">
            매칭 항목 선택 바로가기
          </Button>
        </Link>
      </div>
    </ModalContainer>
  );
}
