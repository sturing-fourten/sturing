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
import { useRecruitStore } from "@/store/recruitStore";

interface TeamMemberInfoProps {
  onTeamMemberInfoChange: (
    career: string[],
    numberOfTeamMembers: number | "제한없음",
    ages: string[],
    role: string[],
  ) => void;
}

export default function TeamMemberInfo({ onTeamMemberInfoChange }: TeamMemberInfoProps) {
  const career = useRecruitStore((state) => state.career);
  const setCareer = useRecruitStore((state) => state.setCareer);
  const numberOfTeamMembers = useRecruitStore((state) => state.numberOfTeamMembers);
  const setNumberOfTeamMembers = useRecruitStore((state) => state.setNumberOfTeamMembers);
  const ages = useRecruitStore((state) => state.ages);
  const setAges = useRecruitStore((state) => state.setAges);
  const role = useRecruitStore((state) => state.role);
  const setRole = useRecruitStore((state) => state.setRole);

  const [isInfinity, setIsInfinity] = useState<boolean>(false);

  const handleCareerToggle = (selectedcareer: string) => {
    if (selectedcareer === "all") {
      if (career.includes("all")) {
        setCareer([]);
      } else {
        setCareer(["all"]);
      }
    } else {
      if (career.includes(selectedcareer)) {
        setCareer(career.filter((career) => career !== selectedcareer && career !== "all"));
      } else {
        setCareer([...career.filter((career) => career !== "all"), selectedcareer]);
      }
    }
  };

  const handleAgesToggle = (selectedAge: string) => {
    if (selectedAge === "all") {
      if (ages.includes("all")) {
        setAges([]);
      } else {
        setAges(["all"]);
      }
    } else {
      if (ages.includes(selectedAge)) {
        setAges(ages.filter((age) => age !== selectedAge && age !== "all"));
      } else {
        setAges([...ages.filter((age) => age !== "all"), selectedAge]);
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
        <OptionalToggle
          numberOfTeamMembers={numberOfTeamMembers}
          isActive={isInfinity}
          onClick={() => handleInfiniteNumber()}>
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
