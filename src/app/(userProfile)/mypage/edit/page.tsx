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
  const [image, setImage] = useState<string>();
  const [fileToRead, setFileToRead] = useState<File | null>(null);

  const dropdownAges = Object.entries(PROFILE_AGES).map(([key, value]) => ({
    key,
    value,
  }));

  const dropdownGender = Object.entries(PROFILE_GENDER).map(([key, value]) => ({
    key,
    value,
  }));

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
            <ProfileImageUpload handleFileChange={handleFileChange} image={image || user?.profileImageUrl} />
          </div>
          <div className="w-full flex-col inline-flex justify-start items-start gap-6 px-4">
            <Title>기본정보</Title>
            <EditInput maxLength={8} defaultValue={user?.name}>
              사용자 이름
            </EditInput>
            <EditInput disabled value={user?.email}>
              로그인 이메일
            </EditInput>
            <EditInput maxLength={8} defaultValue={user?.nickname}>
              닉네임
            </EditInput>
            <EditInput readOnly>직업 수준 수준</EditInput>
          </div>
          <div className="w-full my-[38px]">
            <DivisionLine profileEdit />
          </div>
          <div className="flex-1 w-full flex-col inline-flex justify-start items-start gap-6 px-4">
            <EditInput readOnly toggle name="age" dropdown dropdownContent={dropdownAges}>
              나이
            </EditInput>
            <EditInput readOnly toggle name="gender" dropdown dropdownContent={dropdownGender}>
              성별
            </EditInput>
            <EditInput readOnly toggle>
              선호지역
            </EditInput>
          </div>
        </div>
      </div>
    </form>
  );
}
