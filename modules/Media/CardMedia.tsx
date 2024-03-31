import BaseImage from "@/components/BaseImage";
import BaseText from "@/components/BaseText";
import StarFourIcon from "public/icons/StarFour";
import LinkSocialNetwork from "../LinkSocialNetwork";
import BaseButton from "@/components/BaseButton";

export default function CardMedia() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <BaseImage src="/images/2197ef21088292b2d8ba67bc7a698f5f.png" alt="" />
      </div>
      <div className="border-solid border rounded-xl border-borderColor my-[50px]">
        <div className="border-solid p-[40px] border-borderColor border-x-0 border-t-0 border-b">
          <div className="flex items-center gap-2 pb-3">
            <StarFourIcon className="fill-primary" />
            <BaseText
              tag="span"
              size="M"
              className="font-bold text-textColorSecond"
            >
              Giới thiệu
            </BaseText>
          </div>
          <BaseText size="S" className="text-textColorSecond ">
            My journey as a photographer has been a lifelong quest to capture
            the extraordinary in the ordinary, to freeze fleeting moments in
            time, and to share the world's beauty as I see it. Based in the
            enchanting landscapes of the USA, I find inspiration in every corner
            of this diverse and vibrant country. Join me as we embark on a
            visual odyssey, where each photograph tells a story, and every frame
            is a piece of my heart.
          </BaseText>
        </div>
        <div className="p-[40px]">
          <div className="flex items-center gap-2 pb-[40px]">
            <StarFourIcon className="fill-primary" />
            <BaseText
              tag="span"
              size="M"
              className="font-bold text-textColorSecond"
            >
              Thồng tin liên hệ
            </BaseText>
          </div>
          <div className="grid grid-cols-2 pb-[40px]">
            <div>
              <BaseText size="S" className=" font-medium pb-2">
                {"Email"}
              </BaseText>
              <BaseText size="XS" className=" text-textColorSecond">
                nguyenanhtuan@gmail.com
              </BaseText>
            </div>
            <div>
              <BaseText size="S" className=" pb-2 font-medium">
                Phone Number
              </BaseText>
              <BaseText size="XS" className=" text-textColorSecond">
                +00000000000
              </BaseText>
            </div>
          </div>
          <div className="flex justify-between">
            <LinkSocialNetwork />
            <div>
              <BaseButton className="mr-3 w-[210px]" onClick={() => {}}>
                Liên hệ
              </BaseButton>
              <BaseButton className="w-[210px]" onClick={() => {}}>
                Download CV
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
