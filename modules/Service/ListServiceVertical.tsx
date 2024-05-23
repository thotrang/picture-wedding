import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import CardService from "./CardService";
import classNames from "classnames";
import BasePagination from "@/components/BasePagination";
import { ESizeScreen, useScreenSize } from "hooks/useWindowSize";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";

export default function ListServiceVertical() {
  const { size } = useScreenSize();
  const { services } = useSelector((s: RootState) => s.data_store);
  
  return (
    <BaseLayoutWraper className="2xl:pt-base150 lg:pt-base100 pt-base80">
      {[ESizeScreen.XXL, ESizeScreen.XL, ESizeScreen.LG].includes(size) ? (
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
                />
              </div>
            );
          })}
        </div>
      ) : (
        <BasePagination
          subTitle="Services"
          title="My Photography Services"
          titleButton="View All Services"
          showMoreClick={() => {}}
          nextClick={() => {}}
          preClick={() => {}}
          listItemData={services}
          renderItem={(item, index = 0) => (
            <CardService
              item={item}
              key={index}
              showButtonNavigate={false}
              showTextNavigate
            />
          )}
        ></BasePagination>
      )}
    </BaseLayoutWraper>
  );
}
