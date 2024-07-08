import { CAREER_LIST } from "@/constant/teamMemberInfo";
import CareerList from "../../recruit/teamMemberInfo/CareerList";
import { useState } from "react";

export default function JobLevelFilter() {
  const [selectedCareer, setSelectedCareer] = useState<string[]>([]);

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
  return (
    <>
      <CareerList selectedCareer={selectedCareer} handleCareerToggle={handleCareerToggle} />
    </>
  );
}
