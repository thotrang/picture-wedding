import "swiper/css";

import ArrowRight from "public/icons/ArrowRight";
import BaseButton from "./BaseButton";
import BaseText from "./BaseText";
import { PropsWithChildren, useRef, useState } from "react";
import RightLeftButtons from "./RightLeftButtons";
import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames";
import { Autoplay } from "swiper/modules";

interface IBasePagination extends PropsWithChildren {
  titleButton?: string;
  subTitle: string;
  title: string;
  listItemData?: any;
  renderItem?: (data?: any, index?: number) => JSX.Element;
  showMoreClick?: () => void;
  nextClick?: (index: number) => void;
  preClick?: (index: number) => void;
  slidesPerView?: number;
  showButton?: boolean;
}
export default function BasePagination({
  subTitle,
  title,
  titleButton,
  listItemData,
  showMoreClick = () => {},
  nextClick = () => {},
  preClick = () => {},
  renderItem = () => <div />,
  slidesPerView = 1,
  showButton = true,
}: IBasePagination) {
  const swiperRef = useRef<any>(null);

  const handleDotClick = (num: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const index = swiperRef.current.swiper.activeIndex + num;
      swiperRef.current.swiper.slideTo(index);
      num > 0 ? nextClick(index) : preClick(index);
    }
  };
  const size = listItemData.length - slidesPerView;
  return (
    <div>
      <div
        className={classNames(
          "w-full flex justify-between 2xl:items-center gap-4 flex-col lg:flex-row",
          "2xl:pb-base50 2xl:mb-base80 lg:pb-base40 lg:mb-base60 pb-base20 mb-base40",
          "border-solid border-b border-t-0 border-borderColor border-x-0"
        )}
      >
        <div>
          <BaseText
            tag="span"
            size="XS"
            className="font-semibold text-textColorSecond"
            content={subTitle.toUpperCase()}
          ></BaseText>
          <BaseText
            tag="h1"
            size="L"
            className="font-semibold  pt-2"
            content={title.toUpperCase()}
          ></BaseText>
        </div>
        {showButton && (
          <div className="flex items-center lg:gap-6">
            {size > 1 && (
              <RightLeftButtons
                className="max-lg:hidden"
                preClick={() => handleDotClick(1)}
                nextClick={() => handleDotClick(-1)}
              />
            )}
            <BaseButton
              onClick={showMoreClick}
              className="flex justify-center items-center gap-2 2xl:h-[60px] h-[50px]"
            >
              <BaseText
                tag="span"
                size="S"
                content={titleButton}
                className="truncate "
              ></BaseText>
              <ArrowRight className="h-4 w-4" />
            </BaseButton>
          </div>
        )}
      </div>
      <Swiper
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        ref={swiperRef}
      >
        {(listItemData ?? [])?.map((item: string, i: number) => {
          return (
            <SwiperSlide key={i} className={classNames({})} onClick={() => {}}>
              {renderItem(item, i)}
            </SwiperSlide>
          );
        })}
      </Swiper>
      {showButton && size > 1 && (
        <div className="lg:hidden mt-10 flex justify-center">
          <RightLeftButtons
            preClick={() => handleDotClick(1)}
            nextClick={() => handleDotClick(-1)}
          />
        </div>
      )}
    </div>
  );
}
