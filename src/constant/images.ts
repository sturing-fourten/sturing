import { bannerImg, bg_lecture, bg_study, challenge } from "../../public/images/images";
import { defaultProfileImg } from "../../public/icons/icons";

export const IMAGES_DEFAUlT = {
  lecture: {
    src: bg_lecture.src,
  },
  study: {
    src: bg_study.src,
  },
  profile: {
    src: defaultProfileImg.src,
    alt: "기본 프로필 이미지",
  },
};

export const IMAGES_BANNER = {
  challenge: {
    src: challenge.src,
    alt: "study challenge",
  },
  bannerImg: {
    src: bannerImg.src,
    alt: "banner",
  },
};
