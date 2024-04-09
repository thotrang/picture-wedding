import BaseTextButton from "@/components/BaseTextButton";
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
          left: evt.deltaY < 0 ? -20 : 20,
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
              ["padding", 16, "vertical"],
              ["padding", 48, "horizontal"],
            ]}
          >
            {/* <StarEightIcon className="fill-primary pb-1" /> */}
            <BaseTextButton tag="span" className="!text-primary pl-2" size="S">
              {item.toUpperCase()}
            </BaseTextButton>
          </BaseWraper>
        );
      })}
    </BaseWraper>
  );
}
