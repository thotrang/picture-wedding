import BasePagination from "@/components/BasePagination";
import CardProject from "./CardProject";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import { useScreenSize } from "hooks/useWindowSize";
import { useEffect, useMemo, useState } from "react";
import PortfolioRepository from "apis/repositories/portfolio";

export default function ListProject() {
  const { size } = useScreenSize();
  const slidesPerView = useMemo(() => {
    if (size === "md") return 2;
    if (size === "sm" || size === "xs") return 1;
    return 3;
  }, [size]);
  const [portfolios, setPortfolios] = useState<[]>([]);
  const initData = async () => {
    const res = await PortfolioRepository.get({
      populate: "*",
    });
    setPortfolios(res);
  };
  useEffect(() => {
    initData();
  }, []);
  
  return (
    <BaseLayoutWraper className="2xl:pt-top-l lg:pt-top-m pt-top-s">
      <BasePagination
        subTitle="Portfolio"
        title="Explore My photography work."
        titleButton="View All Services"
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
