import BasePagination from "@/components/BasePagination";
import CardProject from "./CardProject";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";

export default function ListProject() {
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
  ];
  return (
    <BaseLayoutWraper>
      <div className="pt-[200px]">
        <BasePagination
          size={1}
          title="Portfolio"
          content="Explore My photography work."
          titleButton="View All Services"
          showMoreClick={() => {}}
          nextClick={() => {}}
          preClick={() => {}}
        ></BasePagination>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 pt-[60px]">
          {list.map((item, index) => {
            return <CardProject item={item} key={index} />;
          })}
        </div>
      </div>
    </BaseLayoutWraper>
  );
}
