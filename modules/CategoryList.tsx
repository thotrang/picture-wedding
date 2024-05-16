import BaseTextButton from "@/components/BaseTextButton";
import BaseWraper from "@/components/BaseWraper";
import Dot from "public/icons/Dot";
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
      {categores.map((item) => {
        return (
          <div className="2xl:py-5 py-4 2xl:px-5 px-4 inline-block">
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
      })}
    </BaseWraper>
  );
}
