import BaseSlogan from "@/components/BaseSlogan";
import BaseText from "@/components/BaseText";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import Abstract from "public/icons/Abstract";
import Abstract_2 from "public/icons/Abstract_2";

export default function BannerAuthor() {
  return (
    <BaseLayoutWraper>
      <div className="relative">
        <div className="2xl:py-20 lg:py-16 py-10 flex gap-10 items-center h-full justify-between max-lg:flex-col max-lg:items-start">
          <div className="z-10">
            <BaseText
              tag="p"
              size="M"
              className="m-0 font-medium text-textColorSecond"
              content="Stunning Photography by"
            ></BaseText>
            <BaseText
              size="XL"
              className="m-0 font-semibold"
              content="GOLDENSTAR MEDIA"
            ></BaseText>
          </div>
          <div className="z-10">
            <BaseSlogan />
          </div>
        </div>
        <div className="absolute h-full w-full sm:flex justify-center z-0 top-0 hidden">
          <Abstract_2 className="h-full aspect-square" />
        </div>
      </div>
    </BaseLayoutWraper>
  );
}
