type ButtonMapped = {
  text: string;
  disabled: boolean;
  // action: ()=>void
};

type TUserActionButtonConfig = {
  lecture: ButtonMapped;
  study: {
    OWNER: ButtonMapped;
    NOT_APPLIED: ButtonMapped;
    APPLIED: ButtonMapped;
    APPLIED_VIEW: ButtonMapped;
    ACCEPTED: ButtonMapped;
  };
};

const userActionButtonConfig: TUserActionButtonConfig = {
  lecture: {
    text: "이 강의로 스터디 개설하기",
    disabled: false,
  },
  study: {
    OWNER: {
      text: "모집 마감하기",
      disabled: false,
    },
    NOT_APPLIED: {
      text: "스터디 지원하기",
      disabled: false,
    },
    APPLIED: {
      text: "스터디 지원 취소하기",
      disabled: false,
    },
    APPLIED_VIEW: {
      text: "스터디 지원 취소하기",
      disabled: false,
    },
    ACCEPTED: {
      text: "스터디 탈퇴하기",
      disabled: false,
    },
    //모집마감 추가
  },
};

export default userActionButtonConfig;
