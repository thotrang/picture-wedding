import BaseSlogan from "@/components/BaseSlogan";
import BaseText from "@/components/BaseText";
import Abstract from "public/icons/Abstract";

export default function BannerAuthor() {
  return (
    <div className="max-w-screen-2xl w-full mx-auto h-[328px] relative">
      <div className="flex gap-20 items-center h-full justify-between">
        <div className="z-10">
          <BaseText
            tag="p"
            className="m-0 text-2xl font-medium text-textColorSecond"
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
      <div className="absolute h-full w-full flex justify-center z-0 top-0">
        <Abstract className="h-full" />
      </div>
    </div>
  );
}
