import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useRef } from "react";

export default function BaseSwiper() {
  const swiperRef = useRef<any>(null);
  return <Swiper ref={swiperRef}></Swiper>;
}
