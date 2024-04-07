import BaseText from "@/components/BaseText";
import BaseWraper from "@/components/BaseWraper";
import { useEffect } from "react";
interface ICategoryList {
  index: any;
}
export default function CategoryList({ index }: ICategoryList) {
  const categores = [
    "Event Photography",
    "Comercial Photography",
    "Product Photography",
    "Wedding Photography",
    "Landscape Photography",
    "Branding Photography",
    "Portrait  Photography",
  ];
  useEffect(() => {
    const scrollContainer = document.getElementById(`category-list-${index}`);

    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollBy({
          left: evt.deltaY < 0 ? -10 : 10,
        });
      });
    }

    return () => {
      scrollContainer?.removeEventListener("wheel", () => {});
    };
  }, []);

  return (
    <BaseWraper
      id={`category-list-${index}`}
      className="none-scrollbar bg-backgroundSecond overflow-auto none-scrollbar border-solid border-y border-x-0 border-borderColor w-full whitespace-nowrap"
    >
      {categores.map((item, index) => {
        return (
          <BaseWraper
            key={index}
            className="inline-block"
            gutters={[
              ["padding", 16, "bottom"],
              ["padding", 16, "top"],
              ["padding", 48, "left"],
              ["padding", 48, "right"],
            ]}
          >
            {/* <StarEightIcon className="fill-primary pb-1" /> */}
            <BaseText tag="span" className="!text-primary pl-2" size="S">
              {item.toUpperCase()}
            </BaseText>
          </BaseWraper>
        );
      })}
    </BaseWraper>
  );
}
