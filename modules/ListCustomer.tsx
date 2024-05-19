import BaseHorizontalScroll from "@/components/BaseHorizontalScroll";
import BaseImage from "@/components/BaseImage";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BaseText from "@/components/BaseText";
import RightLeftButtons from "@/components/RightLeftButtons";
import classNames from "classnames";
import { useMemo, useRef } from "react";
const listFileName: string[] = (require as any)
  .context("@/public/logo_customers", false, /\.png$/)
  .keys();

export default function ListCustomer() {
  const listCustomer = useMemo(() => {
    return listFileName.filter((item) => !item.includes("public/"));
  }, []);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const scrollHandle = (type: "next" | "previos") => {
    horizontalScrollRef.current?.scrollBy({
      left: type === "next" ? 320 : -320,
      behavior: "smooth",
    });
  };
  return (
    <>
      <BaseLayoutWraper className="2xl:pt-top-l lg:pt-top-m pt-top-s">
        <div
          className={classNames(
            "w-full flex justify-between 2xl:items-center gap-4 flex-col lg:flex-row",
            "2xl:pb-base50 2xl:mb-base80 lg:pb-base40 lg:mb-base60 pb-base20 mb-base40",
            "border-solid border-b border-t-0 border-borderColor border-x-0"
          )}
        >
          <div>
            <BaseText
              tag="h1"
              size="L"
              className="font-semibold  pt-2"
              content="KHÁCH HÀNG CỦA CHÚNG TÔI"
            ></BaseText>
          </div>
          <div className="flex items-center lg:gap-6">
            <RightLeftButtons
              className="max-lg:hidden"
              preClick={() => scrollHandle("next")}
              nextClick={() => scrollHandle("previos")}
            />
          </div>
        </div>
      </BaseLayoutWraper>
      <BaseHorizontalScroll
        horizontalScrollRef={horizontalScrollRef}
        className="bg-backgroundGray"
        listItemData={listCustomer}
        renderItem={(fileName, index) => {
          return (
            <div className="lg:py-base20 lg:px-base30 p-base10" key={index}>
              <BaseImage
                src={`/logo_customers/${fileName}`}
                alt=""
                className="!h-9 lg:h-16 2xl:h-20"
              />
            </div>
          );
        }}
      ></BaseHorizontalScroll>
      <div className="lg:hidden mt-10 flex justify-center">
        <RightLeftButtons
          preClick={() => scrollHandle("next")}
          nextClick={() => scrollHandle("previos")}
        />
      </div>
    </>
  );
}
