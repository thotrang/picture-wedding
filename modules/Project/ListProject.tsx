import BasePagination from "@/components/BasePagination";
import CardProject from "./CardProject";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import { ESizeScreen, useScreenSize } from "hooks/useWindowSize";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";

export default function ListProject() {
  const { size } = useScreenSize();
  const slidesPerView = useMemo(() => {
    if (size === ESizeScreen.MD) return 2;
    if (size === ESizeScreen.SM || size === ESizeScreen.XS) return 1;
    return 3;
  }, [size]);
  const { portfolios } = useSelector((s: RootState) => s.data_store);

  return (
    <BaseLayoutWraper className="2xl:pt-top-l lg:pt-top-m pt-top-s">
      <BasePagination
        subTitle="Sản phẩm"
        title="Khám phá các tác phẩm"
        titleButton="Xem tất cả"
        showMoreClick={() => {}}
        nextClick={() => {}}
        preClick={() => {}}
        listItemData={portfolios}
        slidesPerView={slidesPerView}
        renderItem={(item, index) => {
          return <CardProject item={item} key={index} />;
        }}
      ></BasePagination>
    </BaseLayoutWraper>
  );
}
