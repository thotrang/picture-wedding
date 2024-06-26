import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BasePagination from "@/components/BasePagination";
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
  const { portfolios, portfolioDetail } = useSelector(
    (s: RootState) => s.data_store
  );

  const currentId = portfolioDetail.id;
  const listData = useMemo(() => {
    if (!currentId || !portfolios) return [];
    let list = portfolios.filter((item) => item.id > currentId);
    if (list.length < 3) list = [...list, ...portfolios];
    const sets = new Set(list);
    return [...sets].slice(0, 3);
  }, [currentId, portfolios]);

  return (
    <BaseLayoutWraper className="2xl:py-base100 lg:py-base80 py-base60 !px-8">
      <BasePagination
        title="DỰ ÁN KHÁC"
        subTitle="Xem thêm"
        titleStyle="!text-2xl"
        listItemData={listData}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        renderItem={(item, index) => {
          return <CardPortfolio item={item} key={index} />;
        }}
      ></BasePagination>
    </BaseLayoutWraper>
  );
}
