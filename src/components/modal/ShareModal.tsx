import { usePathname } from "next/navigation";
import ModalContainer from "./ModalContainer";
import Button from "../commons/Button";

interface ShareModalProps {
  onClose: () => void;
}

export const copyURL = (currentUrl: string) => {
  const userAgent = window.navigator.userAgent;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  if (isMobile) {
    if (navigator.share) {
      navigator
        .share({
          title: "스터링",
          text: "공유하기",
          url: currentUrl.toString(),
        })
        .then(() => {
          return isMobile;
        })
        .catch((error) => {});
    }
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = currentUrl.toString();
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert(`클립보드에 저장되었어요.`);
    return isMobile;
  }
};

export default function ShareModal({ onClose }: ShareModalProps) {
  const pathname = usePathname();
  const currentUrl = `${process.env.NEXT_PUBLIC_APP_URL}${pathname}`;
  return (
    <ModalContainer onClose={onClose} isCloseClickOutside>
      <div className="w-80 h-52 p-6 bg-white rounded flex-col justify-center items-center gap-6 inline-flex">
        <div className="text-slate-950 text-lg font-bold font-['Pretendard Variable'] leading-relaxed">공유하기</div>

        <div className="flex justify-between items-center gap-2 w-full font-medium text-[12px]">
          <input className="grow truncate" type="text" disabled value={currentUrl} />
          <Button
            varient="ghost"
            addStyle="h-[34px] w-[71px] border border-main-500 text-main-500 rounded-[5px]"
            onClick={() => copyURL(currentUrl)}>
            복사
          </Button>
        </div>
      </div>
    </ModalContainer>
  );
}
