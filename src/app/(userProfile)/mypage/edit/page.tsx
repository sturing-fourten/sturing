"use client";

import DivisionLine from "@/components/commons/DivisionLine";
import TopBar from "@/components/commons/TopBar";
import EditInput from "@/components/domains/mypageEdit/EditInput";
import ProfileImageUpload from "@/components/domains/mypageEdit/ProfileImageUpload";
import Title from "@/components/domains/mypageEdit/Title";
import { editProfile } from "@/lib/database/action/edit";
import { EditProfileType } from "@/types/editProfile";
import { PROFILE_AGES, PROFILE_GENDER } from "@/constant/profileEdit";
import { useEffect, useState } from "react";

export default function MypageEdit() {
  const [user, setUser] = useState<EditProfileType | null>(null);
  const [image, setImage] = useState<string>("");
  const [fileToRead, setFileToRead] = useState<File | null>(null);

  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const [ageIsVisible, setAgeIsVisible] = useState<boolean>(false);
  const [genderIsVisible, setGenderIsVisible] = useState<boolean>(false);
  const [locationIsVisible, setLocationIsVisible] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const file = files[0];
    if (file?.size > 1 * 1024 * 1024) {
      alert("파일 크기는 1MB를 초과할 수 없습니다.");
      return;
    }
    setFileToRead(file);
  };

  useEffect(() => {
    if (!fileToRead) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const newImage = reader.result as string;
      setImage(newImage);
    };

    reader.readAsDataURL(fileToRead);
    setFileToRead(null);
  }, [fileToRead, setImage]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/userProfile");
        if (!response.ok) {
          throw new Error("사용자 정보를 가져오는 데 실패했습니다.");
        }
        const data = await response.json();
        setUser(data);
        setName(data.name);
        setNickname(data.nickname);
        setImage(data.profileImageUrl);
        setAge(data.age);
        setGender(data.gender);
        setAgeIsVisible(data.ageIsVisible);
        setGenderIsVisible(data.genderIsVisible);
      } catch (error) {
        console.error("사용자 정보 가져오기 실패:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <form action={editProfile}>
      <div className="w-full flex-col inline-flex">
        <div>
          <TopBar variant="edit">프로필 수정</TopBar>
          <DivisionLine />
        </div>
        <div className="flex-1 w-full pt-6 pb-10 flex-col inline-flex justify-start items-center">
          <div className="pb-5">
            <ProfileImageUpload handleFileChange={handleFileChange} image={image} />
          </div>
          <div className="w-full flex-col inline-flex justify-start items-start gap-6 px-4">
            <Title>기본정보</Title>
            <EditInput maxLength={8} name="name" inputValue={name} setInputValue={setName}>
              사용자 이름
            </EditInput>
            <EditInput disabled inputValue={user?.email || ""}>
              로그인 이메일
            </EditInput>
            <EditInput maxLength={8} name="nickname" inputValue={nickname} setInputValue={setNickname}>
              닉네임
            </EditInput>
            <EditInput readOnly inputValue="" setInputValue={() => {}}>
              직업 수준
            </EditInput>
          </div>
          <div className="w-full my-[38px]">
            <DivisionLine profileEdit />
          </div>
          <div className="flex-1 w-full flex-col inline-flex justify-start items-start gap-6 px-4">
            <EditInput
              readOnly
              name="age"
              inputValue={age}
              setInputValue={setAge}
              toggle
              toggleInputName="ageIsVisible"
              isVisible={ageIsVisible}
              setIsVisible={setAgeIsVisible}
              dropdown
              dropdownContent={PROFILE_AGES}
              placeholder="나이를 선택해 주세요.">
              나이
            </EditInput>
            <EditInput
              readOnly
              name="gender"
              inputValue={gender}
              setInputValue={setGender}
              toggle
              toggleInputName="genderIsVisible"
              isVisible={genderIsVisible}
              setIsVisible={setGenderIsVisible}
              dropdown
              dropdownContent={PROFILE_GENDER}
              placeholder="성별을 선택해 주세요.">
              성별
            </EditInput>
            <EditInput
              readOnly
              toggle
              isVisible={locationIsVisible}
              setIsVisible={setLocationIsVisible}
              inputValue=""
              setInputValue={() => {}}>
              선호지역
            </EditInput>
          </div>
        </div>
      </div>
    </form>
  );
}
