import "swiper/css";
import "swiper/css/free-mode";

import Dot from "public/icons/Dot";
import AutoScroll from "@/components/AutoScroll";
import BaseText from "@/components/BaseText";
interface IListCategory {}
export default function ListCategory({}: IListCategory) {
  const categores = [
    "Event Photography",
    "Comercial Photography",
    "Product Photography",
    "Wedding Photography",
    "Landscape Photography",
    "Branding Photography",
    "Portrait  Photography",
  ];

  return (
    <AutoScroll
      className=" bg-backgroundSecond border-solid border-y border-x-0 border-borderColor"
      listItemData={categores}
      renderItem={(item, i) => {
        return (
          <div key={i}>
            <BaseText
              tag="span"
              className="!text-textNavigate pl-2 flex justify-center items-center gap-8"
              size="S"
            >
              <Dot />
              {item.toUpperCase()}
            </BaseText>
          </div>
        );
      }}
    />
  );
}
