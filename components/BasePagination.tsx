import "swiper/css";

import ArrowRight from "public/icons/ArrowRight";
import BaseButton from "./BaseButton";
import BaseText from "./BaseText";
import { PropsWithChildren, useRef, useState } from "react";
import RightLeftButtons from "./RightLeftButtons";
import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames";
import { Autoplay, Navigation } from "swiper/modules";

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
  disableSwiper?: boolean;
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
  disableSwiper,
}: IBasePagination) {
  const swiperRef = useRef<any>(null);
  const activeIndex = swiperRef.current?.swiper?.activeIndex ?? 0;

  const [currentIndex, setCurrentIdx] = useState(activeIndex);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
      nextClick(activeIndex + 1);
      setCurrentIdx(activeIndex + 1);
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
      preClick(activeIndex - 1);
      setCurrentIdx(activeIndex - 1);
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
            {size >= 1 && (
              <RightLeftButtons
                className="max-lg:hidden"
                preClick={() => handlePrev()}
                nextClick={() => handleNext()}
                disableLeftBtn={currentIndex <= 0}
                disableRightBtn={currentIndex >= size}
              />
            )}
            {titleButton && (
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
            )}
          </div>
        )}
      </div>
      <Swiper
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        allowTouchMove={!disableSwiper}
        simulateTouch={!disableSwiper}
        modules={[Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        ref={swiperRef}
        onSlideChange={(data) => setCurrentIdx(data.realIndex)}
      >
        {(listItemData ?? [])?.map((item: any, i: number) => {
          return (
            <SwiperSlide key={i} className={classNames({})} onClick={() => {}}>
              {renderItem(item, i)}
            </SwiperSlide>
          );
        })}
      </Swiper>
      {showButton && size >= 1 && (
        <div className="lg:hidden mt-10 flex justify-center">
          <RightLeftButtons
            disableLeftBtn={currentIndex <= 0}
            disableRightBtn={currentIndex >= size}
            preClick={() => handlePrev()}
            nextClick={() => handleNext()}
          />
        </div>
      )}
    </div>
  );
}
