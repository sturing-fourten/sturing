import { IMAGES_DEFAUlT } from "@/constant/images";
import Image from "next/image";

export default function Avatar({
  profileImageUrl,
  width,
  height,
}: {
  profileImageUrl: string;
  width: number;
  height: number;
}) {
  const imageSrc = profileImageUrl ? profileImageUrl : IMAGES_DEFAUlT.profile.src;

  return (
    <>
      <div className={`relative overflow-hidden rounded-full`} style={{ width: `${width}px`, height: `${height}px` }}>
        <Image src={imageSrc} alt="프로필 이미지" sizes={`${width}px`} fill style={{ objectFit: "cover" }} />
      </div>
    </>
  );
}
