import BaseHorizontalScroll from "@/components/BaseHorizontalScroll";
import BaseImage from "@/components/BaseImage";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BaseText from "@/components/BaseText";
import RightLeftButtons from "@/components/RightLeftButtons";
import { IClient } from "@/types/client";
import classNames from "classnames";
import { get } from "lodash-es";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";
export default function ListCustomer() {
  const { clients } = useSelector((s: RootState) => s.data_store);

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
        </div>
      </BaseLayoutWraper>
      <BaseHorizontalScroll
        horizontalScrollRef={horizontalScrollRef}
        className="bg-backgroundGray"
        listItemData={clients}
        renderItem={(client: IClient, index) => {
          const img = get(
            client,
            "attributes.thumbnail.data.attributes.url",
            ""
          );
          return (
            <div className="lg:py-base20 p-base10 w-full" key={index}>
              <BaseImage src={img} alt="" className="!h-9 lg:h-16 2xl:h-20 w-full" />
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
