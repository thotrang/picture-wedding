import BaseButton from "@/components/BaseButton";
import BaseHorizontalScroll from "@/components/BaseHorizontalScroll";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import classNames from "classnames";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "stores/store";

export default function FilterPortfolio() {
  const { data_store } = useDispatch<Dispatch>();
  const { getPortfolios } = data_store;

  const { services, pagiPortfolios } = useSelector(
    (s: RootState) => s.data_store
  );
  const [selected, setSelected] = useState<null | number>(null);
  const categories = useMemo(() => {
    return [
      {
        title: "Tất cả",
        id: null,
      },
      ...(services ?? []).map((item) => {
        return {
          title: item.attributes.title,
          id: item.id,
        };
      }),
    ];
  }, [services]);
  return (
    <BaseLayoutWraper
      className={classNames(
        "2xl:mt-base100 lg:mt-base80 mt-base40 flex justify-center"
      )}
    >
      {/* <div
        className={classNames(
          "border border-solid border-borderColor p-base20 rounded-xl 2xl:max-w-screen-2xl max-w-screen-l"
        )}
      > */}
      <BaseHorizontalScroll
        listItemData={categories}
        classItem="!p-0 ml-3 first:!m-0"
        renderItem={(item, index) => {
          console.log(item.id === selected);

          return (
            <BaseButton
              key={index}
              className={classNames(" bg-buttonFilter text-textShadow", {
                "!shadow-action !text-textColor": item.id === selected,
              })}
              onClick={() => {
                setSelected(item.id);
                getPortfolios({
                  params: item.id
                    ? {
                        "filters[services][id][$eq]": item.id,
                        "pagination[page]": pagiPortfolios.page,
                        "pagination[pageSize]": pagiPortfolios.pageSize,
                      }
                    : {
                        "pagination[page]": pagiPortfolios.page,
                        "pagination[pageSize]": pagiPortfolios.pageSize,
                      },
                  type: "filter",
                });
              }}
            >
              {item.title}
            </BaseButton>
          );
        }}
      ></BaseHorizontalScroll>
    </BaseLayoutWraper>
  );
}
