import BaseFilter from "@/components/BaseFilter";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "stores/store";

export default function FilterPortfolio() {
  const { data_store } = useDispatch<Dispatch>();
  const { getPortfolios } = data_store;
  const router = useRouter();
  const serviceId = router.query.serviceId;

  const { pagiPortfolios } = useSelector((s: RootState) => s.data_store);

  const handleSearch = (slug: number | string) => {
    getPortfolios({
      params: slug
        ? {
            "filters[services][slug][$eq]": slug,
            "pagination[page]": pagiPortfolios.page,
            "pagination[pageSize]": pagiPortfolios.pageSize,
          }
        : {
            "pagination[page]": pagiPortfolios.page,
            "pagination[pageSize]": pagiPortfolios.pageSize,
          },
      type: "filter",
    });
  };

  useEffect(() => {
    if (serviceId) {
      handleSearch(serviceId as string);
    } else getPortfolios({});
  }, [serviceId]);

  return (
    <BaseLayoutWraper
      className={classNames(
        "2xl:mt-base100 lg:mt-base80 mt-base40 flex justify-center"
      )}
    >
      <BaseFilter itemTap={handleSearch}></BaseFilter>
    </BaseLayoutWraper>
  );
}
