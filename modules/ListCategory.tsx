import "swiper/css";
import "swiper/css/free-mode";

import BaseTextButton from "@/components/BaseTextButton";
import Dot from "public/icons/Dot";
import BaseHorizontalScroll from "@/components/BaseHorizontalScroll";
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
    <BaseHorizontalScroll
      autoScroll
      className=" bg-backgroundSecond border-solid border-y border-x-0 border-borderColor"
      listItemData={categores}
      renderItem={(item, i) => {
        return (
          <div key={i}>
            <BaseTextButton
              tag="span"
              className="!text-textNavigate pl-2 flex justify-center items-center gap-8"
              size="S"
            >
              <Dot />
              {item.toUpperCase()}
            </BaseTextButton>
          </div>
        );
      }}
    />
  );
}
