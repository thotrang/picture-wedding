import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BasePagination from "@/components/BasePagination";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";
import CardPortfolio from "./CardPortfolio";
import { useScreenSize, ESizeScreen } from "hooks/useWindowSize";

export default function NextPortfolios() {
  const { size } = useScreenSize();
  const slidesPerView = useMemo(() => {
    if (size === ESizeScreen.MD) return 2;
    if (size === ESizeScreen.SM || size === ESizeScreen.XS) return 1;
    return 3;
  }, [size]);
  const router = useRouter();
  const portfolioId = Number(router.query.id?.[1]);
  const { portfolios } = useSelector((s: RootState) => s.data_store);
  const listData = useMemo(() => {
    if (!portfolioId || !portfolios) return [];
    let list = portfolios.filter((item) => item.id > portfolioId);
    if (list.length < 3) list = [...list, ...portfolios];
    const sets = new Set(list);
    return [...sets].slice(0, 3);
  }, [portfolioId, portfolios]);
  
  return (
    <BaseLayoutWraper className="2xl:py-base100 lg:py-base80 py-base60">
      <BasePagination
        title={listData[0]?.attributes.title?.toUpperCase() ?? ""}
        subTitle="DỰ ÁN TIẾP THEO"
        listItemData={listData}
        slidesPerView={slidesPerView}
        renderItem={(item, index) => {
          return <CardPortfolio item={item} key={index} />;
        }}
      ></BasePagination>
    </BaseLayoutWraper>
  );
}
