import BaseImage from "@/components/BaseImage";
import BaseText from "@/components/BaseText";
import StarFourIcon from "public/icons/StarFour";
import LinkSocialNetwork from "../LinkSocialNetwork";
import BaseButton from "@/components/BaseButton";
import BaseWraper from "@/components/BaseWraper";

export default function CardMedia() {
  return (
    <BaseWraper className="grid lg:grid-cols-2" gutters={[["gap", 20]]}>
      <BaseWraper gutters={[]}>
        <BaseImage src="/images/2197ef21088292b2d8ba67bc7a698f5f.png" alt="" />
      </BaseWraper>
      <div className="border-solid border rounded-xl border-borderColor">
        <BaseWraper
          gutters={[["padding", 40]]}
          className="border-solid border-borderColor border-x-0 border-t-0 border-b"
        >
          <BaseWraper
            className="flex items-center"
            gutters={[
              ["gap", 10],
              ["padding", 10, "bottom"],
            ]}
          >
            <StarFourIcon className="fill-primary" />
            <BaseText
              tag="span"
              size="M"
              className="font-bold text-textColorSecond"
            >
              Giới thiệu
            </BaseText>
          </BaseWraper>
          <BaseText size="S" className="text-textColorSecond ">
            My journey as a photographer has been a lifelong quest to capture
            the extraordinary in the ordinary, to freeze fleeting moments in
            time, and to share the world's beauty as I see it. Based in the
            enchanting landscapes of the USA, I find inspiration in every corner
            of this diverse and vibrant country. Join me as we embark on a
            visual odyssey, where each photograph tells a story, and every frame
            is a piece of my heart.
          </BaseText>
        </BaseWraper>
        <BaseWraper gutters={[["padding", 40]]}>
          <BaseWraper
            className="flex items-center"
            gutters={[
              ["gap", 10],
              ["padding", 40, "bottom"],
            ]}
          >
            <StarFourIcon className="fill-primary" />
            <BaseText
              tag="span"
              size="M"
              className="font-bold text-textColorSecond"
            >
              Thồng tin liên hệ
            </BaseText>
          </BaseWraper>
          <BaseWraper
            className="grid grid-cols-2 max-lg:grid-cols-1 gap-5"
            gutters={[["padding", 40, "bottom"]]}
          >
            <div>
              <BaseText size="S" className=" font-medium pb-2">
                {"Email"}
              </BaseText>
              <BaseText
                size="XS"
                className=" text-textColorSecond line-clamp-1"
              >
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
          </BaseWraper>
          <div className="flex justify-between max-lg:flex-col lg:gap-10 gap-5">
            <div className="col-span-1">
              <LinkSocialNetwork />
            </div>
            <div className="flex justify-end max-xl:flex-col gap-2 w-full">
              <BaseWraper
                gutters={[["maxWidth", 210]]}
                percentageShrink={[0.8, 0.8]}
                className="w-full"
              >
                <BaseButton
                  className="w-full h-full max-2xl:py-3 max-2xl:px-5"
                  onClick={() => {}}
                >
                  <BaseText size="S" tag="span">
                    Liên hệ
                  </BaseText>
                </BaseButton>
              </BaseWraper>
              <BaseWraper
                gutters={[["maxWidth", 210]]}
                percentageShrink={[0.8, 0.8]}
                className="w-full"
              >
                <BaseButton
                  className="w-full h-full max-2xl:py-3 max-2xl:px-5"
                  onClick={() => {}}
                >
                  <BaseText size="S" tag="span">
                    Download CV
                  </BaseText>
                </BaseButton>
              </BaseWraper>
            </div>
          </div>
        </BaseWraper>
      </div>
    </BaseWraper>
  );
}
