import CareerList from "../../recruit/teamMemberInfo/CareerList";
import { useFilterStore } from "@/store/FilterStore";

export default function JobLevelFilter() {
  const { setLevelFilter, levels } = useFilterStore();

  const handleCareerToggle = (careerName: string) => {
    setLevelFilter(careerName);
  };

  return (
    <>
      <CareerList selectedCareer={levels} handleCareerToggle={handleCareerToggle} />
    </>
  );
}
