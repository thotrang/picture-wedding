import BasePagination from "@/components/BasePagination";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import { ESizeScreen, useScreenSize } from "hooks/useWindowSize";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";
import { useRouter } from "next/router";
import { ERouter } from "routers";
import CardPortfolio from "../Portfolio/CardPortfolio";

export default function ListProject() {
  const { size } = useScreenSize();
  const slidesPerView = useMemo(() => {
    if (size === ESizeScreen.MD) return 2;
    if (size === ESizeScreen.SM || size === ESizeScreen.XS) return 1;
    return 3;
  }, [size]);
  const { portfolioHighLights } = useSelector((s: RootState) => s.data_store);
  const router = useRouter();
  return (
    <BaseLayoutWraper className="2xl:pt-top-l lg:pt-top-m pt-top-s">
      <BasePagination
        subTitle="Sản phẩm"
        title="Khám phá các tác phẩm"
        titleButton="Xem tất cả"
        showMoreClick={() => {
          router.push(ERouter.PORTFOLIO);
        }}
        nextClick={() => {}}
        preClick={() => {}}
        spaceBetween={30}
        listItemData={portfolioHighLights}
        slidesPerView={slidesPerView}
        renderItem={(item, index) => {
          return <CardPortfolio item={item} key={index} />;
        }}
      ></BasePagination>
    </BaseLayoutWraper>
  );
}
