import BaseImage from "@/components/BaseImage";
import BaseText from "@/components/BaseText";
import StarFourIcon from "public/icons/StarFour";
import LinkSocialNetwork from "../LinkSocialNetwork";
import BaseButton from "@/components/BaseButton";

export default function CardMedia({
  infor,
  handleContact,
}: {
  infor: IInforAboutUs;
  handleContact: () => void;
}) {
  return (
    <div className="grid lg:grid-cols-2 2xl:gap-base30 lg:gap-base20 content-center">
      <div className="relative w-full aspect-square max-lg:aspect-[3/2] max-sm:aspect-square">
        <BaseImage
          src={infor.image}
          alt=""
          className="h-full w-full absolute object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="border-solid border rounded-xl border-borderColor">
          <div className="border-solid border-borderColor border-x-0 border-t-0 border-b 2xl:p-base40 lg:p-base30 p-base20">
            <div className="flex items-center 2xl:gap-base10 lg:gap-2 gap-1 2xl:pb-base10 lg:pb-2 pb-1">
              <StarFourIcon className="fill-textNavigate text-textNavigate" />
              <BaseText tag="span" size="M" className="font-semibold">
                Giới thiệu
              </BaseText>
            </div>
            <BaseText
              size="S"
              className="text-textColorSecond xl:line-clamp-none md:line-clamp-4"
            >
              {infor.description}
            </BaseText>
          </div>
          <div className="2xl:p-base40 lg:p-base30 p-base20 flex flex-col justify-between">
            <div className="flex items-center 2xl:gap-base10 lg:gap-2 gap-1 2xl:pb-base40 lg:pb-base30 pb-base20">
              <StarFourIcon className="fill-textNavigate text-textNavigate" />
              <BaseText tag="span" size="M" className="font-semibold">
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
              <div>
                <LinkSocialNetwork />
              </div>
              <BaseButton
                className="w-[160px] h-full max-2xl:py-3 max-2xl:px-5"
                onClick={handleContact}
              >
                <BaseText size="S" tag="span">
                  Liên hệ
                </BaseText>
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
