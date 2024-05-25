import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import BaseButton from "./BaseButton";
import BaseHorizontalScroll from "./BaseHorizontalScroll";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";
import { useRouter } from "next/router";
interface IBaseFilter {
  itemTap: (id: number) => void;
}
export default function BaseFilter({ itemTap }: IBaseFilter) {
  const [selected, setSelected] = useState<null | number | string>(null);
  const { services } = useSelector((s: RootState) => s.data_store);

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
  const router = useRouter();
  const serviceId = router.query.serviceId;
  useEffect(() => {
    if (serviceId) {
      setSelected(serviceId as string);
    }
  }, [serviceId]);

  return (
    <BaseHorizontalScroll
      listItemData={categories}
      classItem="!p-0 ml-3 first:!m-0"
      renderItem={(item, index) => {
        return (
          <BaseButton
            key={index}
            className={classNames(" bg-buttonFilter text-textShadow", {
              "!shadow-action !text-textColor": item.id == selected,
            })}
            onClick={() => {
              setSelected(item.id);
              itemTap(item.id);
            }}
          >
            {item.title}
          </BaseButton>
        );
      }}
    ></BaseHorizontalScroll>
  );
}
