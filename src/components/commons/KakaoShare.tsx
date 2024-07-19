import React, { useEffect } from "react";
import { kakaoLogo } from "../../../public/icons/icons";
import Image from "next/image";

type KakaoShareButtonProps = {
  description?: string;
};

export default function KakaoShareButton({ description }: KakaoShareButtonProps) {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { Kakao } = window;

      if (!Kakao.isInitialized()) {
        Kakao.init(process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID);
      }
    }
  }, []);

  const handleShare = () => {
    const { Kakao } = window;

    Kakao.Share.sendDefault({
      objectType: "text",
      text: "이 스터디 정보 같이 봐요!",
      link: {
        mobileWebUrl: shareUrl,
        webUrl: shareUrl,
      },
    });
  };

  return (
    <div onClick={handleShare}>
      <Image src={kakaoLogo} alt="로고 아이콘" width={34} height={34} className="w-[34px] h-[34px]" />
    </div>
  );
}
