import BaseText from "@/components/BaseText";
import StarEightIcon from "public/icons/StarEightIcon";
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
          left: evt.deltaY < 0 ? -30 : 30,
        });
      });
    }

    return () => {
      scrollContainer?.removeEventListener("wheel", () => {});
    };
  }, []);

  return (
    <div
      id={`category-list-${index}`}
      className="none-scrollbar bg-secondary overflow-auto none-scrollbar border-solid border-y border-x-0 border-borderColor gap-20 w-full whitespace-nowrap"
    >
      {categores.map((item, index) => {
        return (
          <div key={index} className="inline-block py-[20px] pr-12">
            <StarEightIcon className="fill-primary" />
            <BaseText tag="span" className="text-primary pl-2" size="S">
              {item.toUpperCase()}
            </BaseText>
          </div>
        );
      })}
    </div>
  );
}
