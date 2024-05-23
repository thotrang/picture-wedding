import BaseImage from "@/components/BaseImage";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BaseText from "@/components/BaseText";

export default function BannerPortfolio() {
  const data = {
    title: "THƯ VIỆN ẢNH",
    description:
      "Mỗi một bức ảnh là một câu chuyện, một khoảnh khắc đọng lại của thời gian và là minh chứng cho tính nghệ thuật và niềm đam mê chúng tôi đặt vào từng khung hình. ",
    action: "CUỘN XUỐNG ĐỂ XEM CÁC DỊCH VỤ ",
    image: "/images/image_banner_service.png",
  };
  return (
    <BaseLayoutWraper className="2xl:pt-base100 lg:pt-base80 pt-base60">
      <div className="relative">
        <div>
          <BaseImage
            src={data.image}
            alt=""
            className="h-full w-full !rounded-3xl"
          />
        </div>
        <div className="bg-background w-[85%] lg:absolute left-0 top-0 pt-base30 lg:pl-base30 2xl:py-base30 xl:py-base20 lg:py-base10 pb-6 rounded-br-3xl">
          <BaseText
            tag="h3"
            size="S"
            className="2xl:text-l font-normal text-textColorSecond"
          >
            PORTFOLIO
          </BaseText>
          <BaseText tag="h2" size="XM" className="font-bold">
            {data.title}
          </BaseText>
          <div className=" 2xl:mt-6 mt-4">
            <BaseText
              tag="span"
              size="S"
              className="font-normal text-textColorSecond 2xl:mt-base30"
            >
              {data.description}
            </BaseText>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 bg-background rounded-tl-3xl p-base40 max-lg:hidden">
          <BaseText
            tag="span"
            size="S"
            className="font-normal text-textColorSecond"
          >
            {data.action}
          </BaseText>
        </div>
      </div>
    </BaseLayoutWraper>
  );
}
