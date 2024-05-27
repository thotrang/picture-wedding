import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "stores/store";
import CardPortfolio from "./CardPortfolio";
import BaseTextButtonNavigate from "@/components/BaseTextButtonNavigate";
import BaseText from "@/components/BaseText";
import { useMemo } from "react";

export default function ListPortfolio() {
  const { data_store } = useDispatch<Dispatch>();
  const { getPortfolios } = data_store;

  const { portfolios, pagiPortfolios } = useSelector(
    (s: RootState) => s.data_store
  );
  const showMoreButton = useMemo(() => {
    return portfolios.length < pagiPortfolios.total;
  }, [portfolios, pagiPortfolios]);

  return (
    <BaseLayoutWraper className="2xl:pt-base100 lg:pt-base80 pt-base40 pb-base100">
      {portfolios.length > 0 ? (
        <div className="2xl:pb-base50 pb-base30 w-full h-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 gap-6">
          {portfolios.map((item, index) => {
            return (
              <div key={index}>
                <CardPortfolio item={item} />
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <BaseText className="text-center text-textColorSecond" size="S">
            Hiện tại không có sản phẩm
          </BaseText>
        </div>
      )}

      {showMoreButton && (
        <div className="text-center">
          <BaseTextButtonNavigate
            onClick={() => {
              getPortfolios({
                type: "view_more",
                params: {
                  "pagination[page]": pagiPortfolios.page + 1,
                  "pagination[pageSize]": pagiPortfolios.pageSize,
                },
              });
            }}
          >
            <BaseText size="S" tag="span">
              XEM THÊM DỰ ÁN
            </BaseText>
          </BaseTextButtonNavigate>
        </div>
      )}
    </BaseLayoutWraper>
  );
}
