"use client";

import StudyUpcomingCard from "@/components/commons/card/StudyUpcomingCard";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function StudyUpcomingList() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <>
      <Swiper
        loop={false}
        spaceBetween={0}
        slidesPerView={1}
        initialSlide={currentSlide}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        grabCursor={true} // 마우스오버 시 "잡기" 커서로 변경 (데스크톱 사용성 개선)
        navigation={false}
        pagination={true}
        modules={[Pagination]}>
        <SwiperSlide>
          <div className="h-[184px]">
            <StudyUpcomingCard className={"bg-white"} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[184px]">
            <StudyUpcomingCard className={"bg-white"} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
