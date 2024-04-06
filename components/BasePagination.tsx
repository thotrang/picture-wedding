import "swiper/css";

import ArrowRight from "public/icons/ArrowRight";
import BaseButton from "./BaseButton";
import BaseText from "./BaseText";
import { PropsWithChildren, useRef, useState } from "react";
import RightLeftButtons from "./RightLeftButtons";
import BaseWraper from "./BaseWraper";
import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames";
import { Autoplay } from 'swiper/modules';

interface IBasePagination extends PropsWithChildren {
  titleButton: string;
  title: string;
  content: string;
  size: number;
  listItemData: any;
  renderItem: (data: any) => JSX.Element;
  showMoreClick: () => void;
  nextClick: () => void;
  preClick: () => void;
}
export default function BasePagination({
  content,
  title,
  titleButton,
  size,
  listItemData,
  showMoreClick,
  nextClick,
  preClick,
  renderItem,
}: IBasePagination) {
  const swiperRef = useRef<any>(null);

  const [currentIdx, setCurrentIdx] = useState(0);
  const handleDotClick = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
      setCurrentIdx(currentIdx + index);
    }
  };
  return (
    <div>
      <BaseWraper
        gutters={[
          ["padding", 50, "bottom"],
          ["margin", 50, "bottom"],
        ]}
        className="w-full flex justify-between items-end border-solid border-b border-t-0 border-borderColor border-x-0 max-lg:flex-col max-lg:justify-start max-lg:items-start gap-4"
      >
        <div>
          <BaseText
            tag="span"
            size="XS"
            className="font-semibold text-textColorSecond"
            content={title.toUpperCase()}
          ></BaseText>
          <BaseText
            tag="h1"
            size="L"
            className="font-semibold  pt-2"
            content={content.toUpperCase()}
          ></BaseText>
        </div>
        <div className="flex gap-6">
          {size > 1 && (
            <RightLeftButtons
              className="max-lg:hidden"
              preClick={() => handleDotClick(1)}
              nextClick={() => handleDotClick(-1)}
            />
          )}
          <BaseWraper
            gutters={[
              ["padding", 8, "bottom"],
              ["padding", 8, "top"],
            ]}
          >
            <BaseButton
              onClick={showMoreClick}
              className="flex justify-center items-center gap-2 h-full"
            >
              <BaseText tag="span" content={titleButton}></BaseText>
              <ArrowRight className="h-4 w-4" />
            </BaseButton>
          </BaseWraper>
        </div>
      </BaseWraper>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        ref={swiperRef}
      >
        {(listItemData ?? [])?.map((item: string, i: number) => {
          return (
            <SwiperSlide key={i} className={classNames({})} onClick={() => {}}>
              {renderItem(item)}
            </SwiperSlide>
          );
        })}
      </Swiper>
      {size > 1 && (
        <RightLeftButtons
          className="lg:hidden pt-10"
          preClick={preClick}
          nextClick={nextClick}
        />
      )}
    </div>
  );
}
