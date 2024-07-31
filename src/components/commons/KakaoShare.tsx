import React, { useEffect } from "react";
import { kakaoLogo } from "../../../public/icons/icons";
import Image from "next/image";
import { TShareInfo } from "../modal/ShareModal";

type KakaoShareButtonProps = {
  shareInfo?: TShareInfo;
};

export default function KakaoShareButton({ shareInfo }: KakaoShareButtonProps) {
  const type = shareInfo?.type || "스터디";
  const imageUrl =
    shareInfo?.thumbnail ??
    `https://ifowwhoiz6eixak7.public.blob.vercel-storage.com/sturing-dy4GhVsEjAcGKFmvN6LMaIM42R1V2F.png`;

  // const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareUrl = window.location.href;

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
      objectType: "feed",
      content: {
        title: shareInfo?.title ?? "스터링 | 모집부터 진행까지 올인원 스터디 플랫폼",
        description: `이 ${type} 정보 같이 봐요!`,
        imageUrl: imageUrl,
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: `스터링에서 확인하기`,
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
      ],
    });
  };

  return (
    <div onClick={handleShare}>
      <Image src={kakaoLogo} alt="로고 아이콘" width={34} height={34} className="w-[34px] h-[34px]" />
    </div>
  );
}
