import {
  bookmarkWhiteOn,
  bookmarkWhiteOff,
  bookmarkBlueOn,
  bookmarkGrayOff,
  bookmarkGrayOn,
  menu,
  back,
  share,
  alarm,
  close,
  location,
  message,
  more,
  mypage,
  searchBlue,
  rightArrowBlack,
  rightArrowwhite,
  rightArrowGray,
  searchFilter,
  sendComment,
  moreWhite,
  backWhite,
  shareWhite,
} from "../../public/icons/icons";

//북마크 아이콘, 뒤로가기, 알람 , 사람 , 공유하기 아이콘 등등 기본적인 icons

export const BOOKMARK = {
  whiteOn: { src: bookmarkWhiteOn.src, alt: "Bookmark On" },
  whiteOff: { src: bookmarkWhiteOff.src, alt: "Bookmark Off" },
  grayOn: { src: bookmarkGrayOn.src, alt: "Bookmark On" },
  grayOff: { src: bookmarkGrayOff.src, alt: "Bookmark Off" },
  blueOn: { src: bookmarkBlueOn.src, alt: "Bookmark On" },
};

export const ICONS = {
  menu: {
    src: menu.src,
    alt: "메뉴",
  },
  close: { src: close.src, alt: "닫기" },

  back: { src: back.src, alt: "뒤로가기" },

  backWhite: { src: backWhite.src, alt: "뒤로가기" },

  mypage: { src: mypage.src, alt: "마이페이지" },

  share: {
    src: share.src,
    alt: "공유하기",
  },
  shareWhite: {
    src: shareWhite.src,
    alt: "공유하기",
  },

  alarm: { src: alarm.src, alt: "알람" },
  location: {
    src: location.src,
    alt: "위치",
  },
  message: { src: message.src, alt: "메세지" },

  more: { src: more.src, alt: "더보기" },

  moreWhite: { src: moreWhite.src, alt: "더보기" },

  searchBlue: {
    src: searchBlue.src,
    alt: "검색",
  },
  searchFilter: {
    src: searchFilter.src,
    alt: "검색 필터",
  },
  rightArrowBlack: {
    src: rightArrowBlack.src,
    alt: "오른쪽 화살표",
  },
  rightArrowWhite: {
    src: rightArrowwhite.src,
    alt: "오른쪽 화살표",
  },
  rightArrowGray: {
    src: rightArrowGray.src,
    alt: "링크로 가기",
  },
  sendComment: {
    src: sendComment.src,
    alt: "댓글 작성하기",
  },
};
