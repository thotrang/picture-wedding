import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import BaseButton from "./BaseButton";
import BaseHorizontalScroll from "./BaseHorizontalScroll";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";
import { useRouter } from "next/router";
interface IBaseFilter {
  itemTap: (slug: string) => void;
}
export default function BaseFilter({ itemTap }: IBaseFilter) {
  const [selected, setSelected] = useState<null | number | string>(null);
  const { services } = useSelector((s: RootState) => s.data_store);

  const categories = useMemo(() => {
    return [
      {
        title: "Tất cả",
        slug: null,
      },
      ...(services ?? []).map((item) => {
        return {
          title: item.attributes.title,
          slug: item.attributes.slug,
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
              "!shadow-action !text-textColor": item.slug == selected,
            })}
            onClick={() => {
              setSelected(item.slug);
              itemTap(item.slug);
            }}
          >
            {item.title}
          </BaseButton>
        );
      }}
    ></BaseHorizontalScroll>
  );
}
