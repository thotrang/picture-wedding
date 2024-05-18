import BaseImage from "@/components/BaseImage";
import BaseText from "@/components/BaseText";
import StarFourIcon from "public/icons/StarFour";
import LinkSocialNetwork from "../LinkSocialNetwork";
import BaseButton from "@/components/BaseButton";

export default function CardMedia({ infor }: { infor: IInforAboutUs }) {
  return (
    <div className="grid lg:grid-cols-2 2xl:gap-base30 lg:gap-base20 content-center">
      <BaseImage src={infor.image} alt="" className="h-full object-cover" />
      <div className="border-solid border rounded-xl border-borderColor 2xl:my-base40 lg:my-base30 my-base20">
        <div className="border-solid border-borderColor border-x-0 border-t-0 border-b 2xl:p-base40 lg:p-base30 p-base20">
          <div className="flex items-center 2xl:gap-base10 lg:gap-2 gap-1 2xl:pb-base10 lg:pb-2 pb-1">
            <StarFourIcon className="fill-textNavigate" />
            <BaseText
              tag="span"
              size="M"
              className="font-bold text-textColorSecond"
            >
              Giới thiệu
            </BaseText>
          </div>
          <BaseText size="S" className="text-textColorSecond line-clamp-4">
            {infor.description}
          </BaseText>
        </div>
        <div className="2xl:p-base40 lg:p-base30 p-base20 flex flex-col justify-between">
          <div className="flex items-center 2xl:gap-base10 lg:gap-2 gap-1 2xl:pb-base40 lg:pb-base30 pb-base20">
            <StarFourIcon className="fill-textNavigate" />
            <BaseText
              tag="span"
              size="M"
              className="font-bold text-textColorSecond"
            >
              Thông tin liên hệ
            </BaseText>
          </div>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5 2xl:pb-base40 lg:pb-base30 pb-base20">
            <div>
              <BaseText size="S" className=" font-medium pb-2">
                {"Email"}
              </BaseText>
              <BaseText
                size="XS"
                className=" text-textColorSecond line-clamp-1"
              >
                {infor.contact.email}
              </BaseText>
            </div>
            <div>
              <BaseText size="S" className=" pb-2 font-medium">
                Phone Number
              </BaseText>
              <BaseText size="XS" className=" text-textColorSecond">
                {infor.contact.phone}
              </BaseText>
            </div>
          </div>
          <div className="flex sm:justify-between gap-5 sm:items-center max-sm:flex-col">
            <LinkSocialNetwork />
            <BaseButton
              className="w-[160px] h-full max-2xl:py-3 max-2xl:px-5"
              onClick={() => {}}
            >
              <BaseText size="S" tag="span">
                Liên hệ
              </BaseText>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
}
