import BaseButton from "@/components/BaseButton";
import BaseText from "@/components/BaseText";
import ButtonNavigate from "@/components/ButtonNavigate";
import Abstract from "public/icons/Abstract";
import ArrowRightTop from "public/icons/ArrowRightTop";

export default function BannerAuthor() {
  return (
    <div className="max-w-screen-2xl w-full mx-auto h-[328px] relative">
      <div className="flex gap-20 items-center h-full justify-between">
        <div className="z-10">
          <BaseText
            tag="p"
            className="m-0 text-2xl font-medium"
            content="Stunning Photography by"
          ></BaseText>
          <BaseText
            className="m-0 font-[600] text-[80px]"
            content="GOLDENSTAR MEDIA"
          ></BaseText>
        </div>
        <div className="z-10">
          <div>
            <BaseText
              tag="span"
              className="m-0 text-[58px] font-medium"
              content="Let`s "
            />
           <ButtonNavigate/>
          </div>
          <BaseText
            tag="span"
            className="m-0 text-[58px] font-medium"
            content=" Work Together"
          />
        </div>
      </div>
      <div className="absolute h-full w-full flex justify-center z-0 top-0">
        <Abstract className="h-full" />
      </div>
    </div>
  );
}
