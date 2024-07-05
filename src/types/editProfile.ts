export interface EditProfileType {
  name: string;
  email: string;
  nickname: string;
  profileImageUrl: string;
  age: { value: "20대" | "30대" | "40대" | "50대"; isVisible: boolean };
  gender: { value: "남" | "여"; isVisible: boolean };
}
