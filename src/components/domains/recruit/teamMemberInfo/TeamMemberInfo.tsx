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
import { useTeamMemberInfoStore } from "@/store/recruitStore";

interface TeamMemberInfoProps {
  onTeamMemberInfoChange: (
    career: string[],
    numberOfTeamMembers: number | "제한없음",
    ages: string[],
    role: string[],
  ) => void;
}

export default function TeamMemberInfo({ onTeamMemberInfoChange }: TeamMemberInfoProps) {
  const career = useTeamMemberInfoStore((state) => state.career);
  const setCareer = useTeamMemberInfoStore((state) => state.setCareer);
  const numberOfTeamMembers = useTeamMemberInfoStore((state) => state.numberOfTeamMembers);
  const setNumberOfTeamMembers = useTeamMemberInfoStore((state) => state.setNumberOfTeamMembers);
  const ages = useTeamMemberInfoStore((state) => state.ages);
  const setAges = useTeamMemberInfoStore((state) => state.setAges);
  const role = useTeamMemberInfoStore((state) => state.role);
  const setRole = useTeamMemberInfoStore((state) => state.setRole);

  const [isInfinity, setIsInfinity] = useState<boolean>(false);

  const handleCareerToggle = (careerName: string) => {
    if (careerName === CAREER_LIST.all) {
      if (career.includes(CAREER_LIST.all)) {
        setCareer([]);
      } else {
        setCareer([CAREER_LIST.all]);
      }
    } else {
      if (career.includes(careerName)) {
        setCareer(career.filter((career) => career !== careerName));
      } else {
        setCareer([...career.filter((career) => career !== CAREER_LIST.all), careerName]);
      }
    }
  };

  const handleAgesToggle = (ageName: string) => {
    if (ageName === AGE_LIST.all) {
      if (ages.includes(AGE_LIST.all)) {
        setAges([]);
      } else {
        setAges([AGE_LIST.all]);
      }
    } else {
      if (ages.includes(ageName)) {
        setAges(ages.filter((age) => age !== ageName));
      } else {
        setAges([...ages.filter((age) => age !== AGE_LIST.all), ageName]);
      }
    }
  };

  const handleRoleToggle = (roleName: string) => {
    if (role.includes(roleName)) {
      setRole(role.filter((role) => role !== roleName));
    } else {
      setRole([...role, roleName]);
    }
  };

  const handleMinusNumber = () => {
    setNumberOfTeamMembers((prev) => {
      if (typeof prev === "number" && prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  const handlePlusNumber = () => {
    setNumberOfTeamMembers((prev) => {
      if (typeof prev === "number") {
        return prev + 1;
      }
      return prev;
    });
  };

  const handleInfiniteNumber = () => {
    setIsInfinity((prev) => !prev);
    if (!isInfinity) {
      setNumberOfTeamMembers("제한없음");
    } else {
      setNumberOfTeamMembers(1);
    }
  };

  useEffect(() => {
    onTeamMemberInfoChange(career, numberOfTeamMembers, ages, role);
  }, [career, numberOfTeamMembers, ages, role]);

  return (
    <div className="w-full px-[22px] py-[16px] flex-col gap-[30px] inline-flex">
      <div className="flex-col inline-flex gap-[7px]">
        <Title>원하는 팀원의 정보를 입력해 주세요</Title>
        <div className="flex-col inline-flex gap-4">
          <Subtitle>함께하고 싶은 팀원</Subtitle>
          <CareerList selectedCareer={career} handleCareerToggle={handleCareerToggle} />
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
        <AgesList selectedAges={ages} handleAgesToggle={handleAgesToggle} />
      </div>
      <DivisionLine />
      <div className="flex-col inline-flex gap-[13px]">
        <Subtitle>스터디에서 필요한 역할 선택</Subtitle>
        <RoleList selectedRole={role} handleRoleToggle={handleRoleToggle} />
      </div>
    </div>
  );
}
