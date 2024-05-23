import "swiper/css";
import "swiper/css/free-mode";

import { useEffect, useRef } from "react";
import classNames from "classnames";

interface IBaseHorizontalScroll {
  listItemData: any;
  renderItem: (data?: any, index?: number) => JSX.Element;
  className?: string;
  scrollX?: number;
  horizontalScrollRef?: any;
}
export default function BaseHorizontalScroll({
  listItemData,
  renderItem = () => <div />,
  className,
  scrollX = 300,
  horizontalScrollRef,
}: IBaseHorizontalScroll) {
  const scrollRef = horizontalScrollRef ?? useRef<HTMLDivElement>(null);
  const scrollHandle = (evt: any) => {
    evt.preventDefault();
    scrollRef.current?.scrollBy({
      left: evt.deltaY < 0 ? -scrollX : scrollX,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", scrollHandle);
    }
    return () => {
      scrollContainer?.removeEventListener("wheel", scrollHandle);
    };
  }, []);

  return (
    <div className={classNames("w-full text-center", className)}>
      <div
        ref={scrollRef}
        className={classNames("overflow-auto none-scrollbar whitespace-nowrap")}
      >
        {(listItemData ?? []).map((item: any, i: number) => {
          return (
            <div className="2xl:py-5 py-4 2xl:px-5 px-4 inline-block" key={i}>
              {renderItem(item, i)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
