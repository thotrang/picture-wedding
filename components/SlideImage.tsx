import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import classNames from "classnames";
import { useRef, useState } from "react";
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import BaseImage from "./BaseImage";
import { PaginationSwiper } from "./PaginationSwiper";
import { Data as DataThumbnail } from "@/types/thumbnail";
import { get } from "lodash-es";

interface Props {
  items: DataThumbnail[];
  reverseElement?: boolean;
}
function SliderImage({ items, reverseElement = false }: Props) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const swiperRef = useRef<any>(null);
  const handleDotClick = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
      setCurrentIdx(index);
    }
  };
  return (
    <div className="h-full w-full lg:flex flex-col gap-base40 overflow-hidden">
      <div className="lg:grow max-lg:relative h-full w-full">
        <Swiper
          className="absolute h-full w-full"
          spaceBetween={12}
          ref={swiperRef}
          autoplay={{
            delay: 12000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          slidesPerView={1}
          onSlideChange={(data) => setCurrentIdx(data.realIndex)}
          pagination={{ clickable: true }}
        >
          {(items ?? []).map((item: DataThumbnail, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <BaseImage
                  className={classNames("absolute h-full w-full object-cover", {
                    "lg:rounded-br-[80px]": reverseElement,
                    "lg:rounded-bl-[80px]": !reverseElement,
                  })}
                  src={get(item, "attributes.url", "")}
                  alt={""}
                />
              </div>
            </SwiperSlide>
          );
        })}
        </Swiper>
      </div>
      <div
        className={classNames("block", {
          hidden: items.length <= 1,
        })}
      >
        <PaginationSwiper
          count={items.length}
          currentIndex={currentIdx}
          onDotClick={(i: number) => handleDotClick(i)}
        />
      </div>
    </div>
  );
}

export default SliderImage;
