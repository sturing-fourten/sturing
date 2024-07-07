export interface EditProfileType {
  name: string;
  email: string;
  nickname: string;
  profileImageUrl: string;
  age: "20대" | "30대" | "40대" | "50대" | "";
  ageIsVisible: boolean;
  gender: "남" | "여" | "";
  genderIsVisible: boolean;
}
