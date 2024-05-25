import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import CardService from "./CardService";
import classNames from "classnames";
import BasePagination from "@/components/BasePagination";
import { ESizeScreen, useScreenSize } from "hooks/useWindowSize";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";
import { useMemo } from "react";

export default function ListServiceVertical() {
  const { size } = useScreenSize();
  const { services } = useSelector((s: RootState) => s.data_store);
  const isMobile = useMemo(() => {
    return ![ESizeScreen.XXL, ESizeScreen.XL, ESizeScreen.LG].includes(size);
  }, [size]);
  if (!isMobile)
    return (
      <BaseLayoutWraper className="2xl:pt-base150 lg:pt-base100 pt-base80">
        <div
          className={classNames(
            "border-0 border-t border-solid border-borderColor"
          )}
        >
          {services?.map((item, index) => {
            return (
              <div className="2xl:py-base80 lg:py-base40" key={index}>
                <CardService
                  item={item}
                  key={index}
                  showButtonNavigate={false}
                  showTextNavigate
                  reverseElement={index % 2 === 0}
                  largeImage
                  isMultipleImg
                />
              </div>
            );
          })}
        </div>
      </BaseLayoutWraper>
    );
  return (
    <BaseLayoutWraper className="2xl:pt-base150 lg:pt-base100 pt-base80">
      <BasePagination
        subTitle="Services"
        title="My Photography Services"
        titleButton="View All Services"
        showMoreClick={() => {}}
        nextClick={() => {}}
        preClick={() => {}}
        listItemData={services}
        disableSwiper
        renderItem={(item, index = 0) => (
          <CardService
            item={item}
            key={index}
            showButtonNavigate={false}
            showTextNavigate
            isMultipleImg
          />
        )}
      ></BasePagination>
    </BaseLayoutWraper>
  );
}
