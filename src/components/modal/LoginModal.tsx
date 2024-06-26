import { githubLogin } from "@/lib/database/action/login";
import ModalContainer from "./ModalContainer";
import { useToggle } from "usehooks-ts";

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const [isHovered, hoverToggle] = useToggle(false);

  return (
    <ModalContainer onClose={onClose} isCloseClickOutside>
      <div className="w-80 h-72 px-5 py-9 bg-white rounded-lg flex-col justify-center items-center gap-9 inline-flex">
        <div className="w-72 h-56 flex-col justify-start items-center gap-8 inline-flex relative">
          <div className="w-72 h-20 flex-col justify-start items-center gap-1 inline-flex">
            <img className="w-40 h-12 relative" src="icons/textlogo.svg" alt="textlogo" />
            <div className="text-neutral-600 text-sm font-medium font-['Pretendard Variable'] leading-snug">
              {"사람과 스터디, 강의를 "}
              <span className="text-zinc-800 text-sm font-semibold font-['Pretendard Variable'] leading-snug">
                {"한 고리로"}
              </span>
            </div>
          </div>
          {isHovered && (
            <>
              <div className="shadow flex-col justify-start items-center flex relative">
                <div className="w-48 h-14 pl-3.5 pr-5 pt-2.5 pb-3 bg-white rounded-lg justify-start items-center inline-flex text-center z-[1]">
                  <div className="text-stone-500 text-xs font-medium font-['Pretendard Variable'] leading-4">
                    {"지금 회원가입하고"}
                    <br />
                    <span className="text-blue-500 text-xs font-semibold font-['Pretendard Variable'] leading-4">
                      {"나와 맞는 스터디에 "}
                    </span>
                    {"참가해보세요!"}
                  </div>
                </div>
                <div className="w-[13px] h-[13px] bg-white rounded-[2px] shadow-[1px_-2px_1px_rgba(178,178,178,0.3)] transform rotate-[135deg] absolute -bottom-[0.3rem]"></div>
              </div>
            </>
          )}
          <form action={githubLogin}>
            <button
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
              onMouseEnter={hoverToggle}
              onMouseLeave={hoverToggle}>
              로그인 버튼 추가
            </button>
          </form>
        </div>
      </div>
    </ModalContainer>
  );
}
