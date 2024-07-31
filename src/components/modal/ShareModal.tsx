import { usePathname } from "next/navigation";
import ModalContainer from "./ModalContainer";
import Button from "../commons/Button";
import KakaoShareButton from "../commons/KakaoShare";
import { showToast } from "../commons/Toast";

export type TShareInfo = {
  title?: string;
  thumbnail?: string;
  type?: "스터디" | "강의";
};
interface ShareModalProps {
  onClose: () => void;
  shareInfo?: TShareInfo;
}

const copyURL = async (currentUrl: string) => {
  const userAgent = window.navigator.userAgent;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  if (isMobile) {
    if (navigator.share) {
      navigator
        .share({
          title: "Sturing : 스터링",
          text: "공유하기",
          url: currentUrl.toString(),
        })
        .then(() => {
          return isMobile;
        })
        .catch((error) => {});
    }
  } else {
    try {
      await navigator.clipboard.writeText(currentUrl);
      showToast("클립보드에 저장되었습니다.");
      return isMobile;
    } catch (error) {
      console.error(error);
    }
  }
};

export default function ShareModal({ onClose, shareInfo }: ShareModalProps) {
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

        <KakaoShareButton shareInfo={shareInfo} />
      </div>
    </ModalContainer>
  );
}
