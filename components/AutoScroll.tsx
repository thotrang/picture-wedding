import "swiper/css";
import "swiper/css/free-mode";

import classNames from "classnames";
import { useState } from "react";

interface IAutoScroll {
  listItemData: any;
  renderItem: (data?: any, index?: number) => JSX.Element;
  className?: string;
  scrollX?: number;
  classItem?: string;
}
export default function AutoScroll({
  listItemData,
  renderItem = () => <div />,
  className,
}: IAutoScroll) {
  const [scroll] = useState(true);
  return (
    <div
      className={classNames(
        {
          "w-full inline-flex flex-nowrap text-center overflow-hidden": true,
        },
        className
      )}
    >
      <div
        className={classNames(
          "flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none whitespace-nowrap none-scrollbar",
          {
            " animate-infinite-scroll": scroll,
          }
        )}
      >
        {(listItemData ?? []).map((item: any, i: number) => {
          return (
            <div
              className="2xl:py-5 py-4 2xl:px-5 px-4 inline-block"
              key={i}
              // onMouseEnter={() => setScroll(false)}
              // onMouseLeave={() => setScroll(true)}
            >
              {renderItem(item, i)}
            </div>
          );
        })}
      </div>
      <div
        className={classNames(
          "flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none whitespace-nowrap none-scrollbar",
          {
            " animate-infinite-scroll": scroll,
          }
        )}
      >
        {(listItemData ?? []).map((item: any, i: number) => {
          return (
            <div
              className="2xl:py-5 py-4 2xl:px-5 px-4 inline-block"
              key={i}
              // onMouseEnter={() => setScroll(false)}
              // onMouseLeave={() => setScroll(true)}
            >
              {renderItem(item, i)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
