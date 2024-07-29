"use client";

import DivisionLine from "@/components/commons/DivisionLine";
import TopBar from "@/components/commons/TopBar";
import EditInput from "@/components/domains/mypageEdit/EditInput";
import ProfileImageUpload from "@/components/domains/mypageEdit/ProfileImageUpload";
import Title from "@/components/domains/mypageEdit/Title";
import { editProfile } from "@/lib/database/action/edit";
import { PROFILE_AGES, PROFILE_GENDER } from "@/constant/profileEdit";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/userStore";
import { useMatchingStore } from "@/store/matchingStore";

export default function MypageEdit() {
  const { user, fetchUser } = useUserStore();
  const { matching, fetchMatching } = useMatchingStore();
  const [image, setImage] = useState<string>("");

  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const [ageIsVisible, setAgeIsVisible] = useState<boolean>(false);
  const [genderIsVisible, setGenderIsVisible] = useState<boolean>(false);
  const [locationIsVisible, setLocationIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!user) {
      fetchUser();
      fetchMatching();
    } else {
      setName(user.name);
      setNickname(user.nickname);
      setImage(user.profileImageUrl);
      setAge(user.age);
      setGender(user.gender);
      setAgeIsVisible(user.ageIsVisible);
      setGenderIsVisible(user.genderIsVisible);
      setLocationIsVisible(matching?.locationIsVisible || false);
    }
  }, [user, matching]);

  return (
    <form className="w-full" action={editProfile}>
      <div className="w-full flex-col inline-flex">
        <div>
          <TopBar variant="edit">프로필 수정</TopBar>
          <DivisionLine />
        </div>
        <div className="flex-1 w-full pt-6 pb-10 flex-col inline-flex justify-start items-center">
          <div className="pb-5">
            <ProfileImageUpload image={image} setImage={setImage} />
          </div>
          <div className="w-full flex-col inline-flex justify-start items-start gap-6 px-4">
            <Title>기본정보</Title>
            <EditInput disabled name="name" inputValue={user?.name || ""}>
              사용자 이름
            </EditInput>
            <EditInput disabled inputValue={user?.email || ""}>
              로그인 이메일
            </EditInput>
            <EditInput maxLength={8} name="nickname" inputValue={nickname} setInputValue={setNickname}>
              닉네임
            </EditInput>
            <EditInput readOnly matching levelData={JSON.parse(matching?.levels || "[]")}>
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
              matching
              locationData={JSON.parse(matching?.locations || "[]")}
              toggle
              toggleInputName="locationIsVisible"
              isVisible={locationIsVisible}
              setIsVisible={setLocationIsVisible}>
              선호지역
            </EditInput>
          </div>
        </div>
      </div>
    </form>
  );
}
