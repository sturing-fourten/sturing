import TagBase from "@/components/commons/TagBase";
import Image from "next/image";
import { downArrowGray } from "@/../public/icons/icons";
import DetailInfo from "../detail/DetailInfo";
import { STUDY_RECRUIT_INFO } from "@/constant/study";
import LectureLinkBanner from "@/components/commons/LectureLinkBanner";
import { getDateRangeWithWeeks } from "@/utils/getDateRangeWithWeeks";
import { getDateRange } from "@/utils/getDateRange";
import { CATEGORY } from "@/constant/category";
import { useDashboardTeamStore } from "@/store/dashboardTeamStore";

const { meeting, task, location } = STUDY_RECRUIT_INFO;

const getStudyInfo = async (id: string) => {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/study/${id}`);
    const studyData = await response.json();
    return studyData;
  } catch (error) {
    console.error("Error fetching study", error);
    throw error;
  }
};

const getStatus = (format: any) => {
  switch (format) {
    case "ONLINE":
      return "온라인";
    case "OFFLINE":
      return "오프라인";
    default:
      return "온/오프라인";
  }
};

const getWhere = (meeting: any) => {
  if (meeting.location !== "") {
    return meeting.location;
  } else if (meeting.platform !== "") {
    return meeting.platform;
  } else {
    return "미정";
  }
};

export default async function StudyInfo({ params }: { params: string }) {
  const study = await getStudyInfo(params);
  const studyData = study.study;

  useDashboardTeamStore.getState().setStudyInfo({
    startDate: studyData.startDate,
    endDate: studyData.endDate,
  });

  return (
    <div className="pt-[10px] pb-11 px-4">
      <div className="flex items-center gap-[10px] mb-[14px]">
        <div className="flex items-center gap-2">
          <TagBase className="bg-main-100 text-gray-700 border-transparent">
            {getStatus(studyData.meeting.format)}
          </TagBase>
          <TagBase className="bg-main-100 text-gray-700 border-transparent">{CATEGORY(studyData.category)}</TagBase>
        </div>
        <div className="flex items-center text-gray-400 text-[12px] font-medium tracking-[-0.36px]">
          {getDateRangeWithWeeks(studyData.startDate, studyData.endDate)}
          <span className="w-[1px] h-3 mx-2 bg-gray-400"></span>
          {getDateRange(studyData.startDate, studyData.endDate)}
        </div>
      </div>

      <div className="mb-5 text-white text-xl font-semibold leading-7">{studyData.title}</div>

      <LectureLinkBanner href={study.lecture.link} title={study.lecture.title} />

      <details className="">
        <summary className="absolute bottom-0 flex items-center justify-center w-[calc(100%-32px)] h-11 text-center list-none cursor-pointer">
          <Image src={downArrowGray} alt="" width={12} height={6} />
        </summary>

        <section className="flex flex-col gap-2 justify-start pt-4">
          <DetailInfo
            icon={meeting.icon}
            title={meeting.title}
            content={`${studyData.meeting.schedule.day} ${studyData.meeting.schedule.time} ${getStatus(
              studyData.meeting.format,
            )} 진행`}
            isWhite={true}
          />
          <DetailInfo icon={task.icon} title={task.title} taskContent={studyData.task} isWhite={true} />
          <DetailInfo
            icon={location.icon}
            title={location.title}
            content={getWhere(studyData.meeting)}
            isWhite={true}
          />
        </section>
      </details>
    </div>
  );
}
