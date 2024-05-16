import BasePagination from "@/components/BasePagination";
import CardProject from "./CardProject";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import { useScreenSize } from "hooks/useWindowSize";
import { useMemo } from "react";

export default function ListProject() {
  const { size } = useScreenSize();
  const slidesPerView = useMemo(() => {
    if (size === "md") return 2;
    if (size === "sm" || size === "xs") return 1;
    return 3;
  }, [size]);
  const list = [
    {
      image: "/images/1c47edf788afd4a812699f19aef99b30.png",
      title: "Faces of Resilience",
      created: "March 2022",
    },
    {
      image: "/images/3688fcfd64718054434e91ff62361d12.png",
      title: "Faces of Resilience",
      created: "March 2022",
    },
    {
      image: "/images/141789ab47bd7978752fdbfb3e85f517.png",
      title: "Faces of Resilience",
      created: "March 2022",
    },
    {
      image: "/images/56266502b0c42196572368055f89f47d.png",
      title: "Faces of Resilience",
      created: "March 2022",
    },
    {
      image: "/images/ac1f36bd490318145d812ec095aef81c.png",
      title: "Faces of Resilience",
      created: "March 2022",
    },
    {
      image: "/images/cced55cb3406e6412c8875b644ed6aa1.png",
      title: "Faces of Resilience",
      created: "March 2022",
    },
  ];
  return (
    <BaseLayoutWraper className="2xl:pt-top-l lg:pt-top-m pt-top-s">
      <BasePagination
        subTitle="Portfolio"
        title="Explore My photography work."
        titleButton="View All Services"
        showMoreClick={() => {}}
        nextClick={() => {}}
        preClick={() => {}}
        listItemData={list}
        slidesPerView={slidesPerView}
        renderItem={(item, index) => {
          return <CardProject item={item} key={index} />;
        }}
      ></BasePagination>
    </BaseLayoutWraper>
  );
}
