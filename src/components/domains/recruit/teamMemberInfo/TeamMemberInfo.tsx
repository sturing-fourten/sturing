import { AGE_LIST, CAREER_LIST } from "@/constant/teamMemberInfo";
import Subtitle from "../commons/Subtitle";
import Title from "../commons/Title";
import { useEffect, useState } from "react";
import DivisionLine from "@/components/commons/DivisionLine";
import OptionalToggle from "@/components/domains/recruit/commons/OptionalToggle";
import CareerList from "./CareerList";
import NumberOfTeamMember from "./NumberOfTeamMember";
import AgesList from "./AgesList";
import RoleList from "./RoleList";

interface TeamMemberInfoProps {
  onTeamMemberInfoChange: (
    career: string[],
    numberOfTeamMembers: number | "제한없음",
    ages: string[],
    role: string[],
  ) => void;
}

export default function TeamMemberInfo({ onTeamMemberInfoChange }: TeamMemberInfoProps) {
  const [selectedCareer, setSelectedCareer] = useState<string[]>([]);
  const [selectedAges, setSelectedAges] = useState<string[]>([]);
  const [selectedRole, setSelectedRole] = useState<string[]>([]);
  const [numberOfTeamMembers, setNumberOfTeamMembers] = useState<number>(1);
  const [isInfinity, setIsInfinity] = useState<boolean>(false);

  const handleCareerToggle = (careerName: string) => {
    if (careerName === CAREER_LIST.all) {
      if (selectedCareer.includes(CAREER_LIST.all)) {
        setSelectedCareer([]);
      } else {
        setSelectedCareer([CAREER_LIST.all]);
      }
    } else {
      if (selectedCareer.includes(careerName)) {
        setSelectedCareer(selectedCareer.filter((career) => career !== careerName));
      } else {
        setSelectedCareer([...selectedCareer.filter((career) => career !== CAREER_LIST.all), careerName]);
      }
    }
  };

  const handleAgesToggle = (ageName: string) => {
    if (ageName === AGE_LIST.all) {
      if (selectedAges.includes(AGE_LIST.all)) {
        setSelectedAges([]);
      } else {
        setSelectedAges([AGE_LIST.all]);
      }
    } else {
      if (selectedAges.includes(ageName)) {
        setSelectedAges(selectedAges.filter((age) => age !== ageName));
      } else {
        setSelectedAges([...selectedAges.filter((age) => age !== AGE_LIST.all), ageName]);
      }
    }
  };

  const handleRoleToggle = (roleName: string) => {
    if (selectedRole.includes(roleName)) {
      setSelectedRole(selectedRole.filter((role) => role !== roleName));
    } else {
      setSelectedRole([...selectedRole, roleName]);
    }
  };

  const handleMinusNumber = () => {
    setNumberOfTeamMembers((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  const handlePlusNumber = () => {
    setNumberOfTeamMembers((prev) => prev + 1);
  };

  const handleInfiniteNumber = () => {
    setIsInfinity((prev) => !prev);
  };

  useEffect(() => {
    onTeamMemberInfoChange(selectedCareer, numberOfTeamMembers, selectedAges, selectedRole);
  }, [selectedCareer, numberOfTeamMembers, selectedAges, selectedRole]);

  return (
    <div className="w-full px-[22px] py-[16px] flex-col gap-[30px] inline-flex">
      <div className="flex-col inline-flex gap-[7px]">
        <Title>원하는 팀원의 정보를 입력해 주세요</Title>
        <div className="flex-col inline-flex gap-4">
          <Subtitle>함께하고 싶은 팀원</Subtitle>
          <CareerList selectedCareer={selectedCareer} handleCareerToggle={handleCareerToggle} />
        </div>
      </div>
      <DivisionLine />
      <div className="flex-col inline-flex gap-[13px]">
        <Subtitle>{"함께하고 싶은 팀원 수 (본인 포함)"}</Subtitle>
        <NumberOfTeamMember
          isInfinity={isInfinity}
          handleMinusNumber={handleMinusNumber}
          handlePlusNumber={handlePlusNumber}
          numberOfTeamMembers={numberOfTeamMembers}
        />
        <OptionalToggle isActive={isInfinity} onClick={() => handleInfiniteNumber()}>
          제한없음
        </OptionalToggle>
      </div>
      <DivisionLine />
      <div className="flex-col inline-flex gap-[13px]">
        <Subtitle>함께하고 싶은 팀원의 연령대</Subtitle>
        <AgesList selectedAges={selectedAges} handleAgesToggle={handleAgesToggle} />
      </div>
      <DivisionLine />
      <div className="flex-col inline-flex gap-[13px]">
        <Subtitle>스터디에서 필요한 역할 선택</Subtitle>
        <RoleList selectedRole={selectedRole} handleRoleToggle={handleRoleToggle} />
      </div>
    </div>
  );
}
