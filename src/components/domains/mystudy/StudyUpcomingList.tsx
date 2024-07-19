"use client";

import StudyUpcomingCard from "@/components/commons/card/StudyUpcomingCard";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TUpcomingMeetingList } from "@/utils/generateMeetingList";
import NoList from "./NoList";

interface IStudyUpcomingListProps {
  upComingMeetingList: TUpcomingMeetingList;
}
export default function StudyUpcomingList({ upComingMeetingList }: IStudyUpcomingListProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <>
      <Swiper
        loop={false}
        spaceBetween={8}
        slidesPerView={1}
        initialSlide={currentSlide}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        grabCursor={true} // 마우스오버 시 "잡기" 커서로 변경 (데스크톱 사용성 개선)
        navigation={false}
        pagination={true}
        modules={[Pagination]}>
        {upComingMeetingList && upComingMeetingList.length > 0 ? (
          upComingMeetingList.map((meeting, index) => (
            <SwiperSlide key={index}>
              <div className="h-[184px]">
                <StudyUpcomingCard className={"bg-white"} meeting={meeting} />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <NoList>2주 내에 예정된 미팅이 없어요.</NoList>
        )}
      </Swiper>
    </>
  );
}
