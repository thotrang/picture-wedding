import BaseImage from "@/components/BaseImage";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BaseText from "@/components/BaseText";
import { get } from "lodash-es";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";

export default function InforPortfolio() {
  const { portfolioDetail } = useSelector((s: RootState) => s.data_store);
  const { attributes } = portfolioDetail;

  return (
    <BaseLayoutWraper className="!px-8">
      <div className="2xl:pt-base80 lg:pt-base40 pt-6 flex justify-between max-md:flex-col">
        <div className="md:w-2/3 max-md:pb-6">
          <div className="flex items-center 2xl:gap-base10 lg:gap-2 gap-1 2xl:pb-base10 lg:pb-2 pb-1">
            {/* <StarFourIcon className="fill-textNavigate" /> */}
            <BaseImage
              src="/images/chervon_right_icon_2.png"
              alt=""
              className="!h-7 !w-7"
            />
            <BaseText
              tag="span"
              size="M"
              className="font-bold text-textColorSecond"
            >
              Giới thiệu dự án
            </BaseText>
          </div>
          <BaseText size="S" className="text-textColorSecond">
            {attributes?.description}
          </BaseText>
        </div>
        <div>
          <div className="flex flex-col w-full items-start justify-start">
            <BaseText tag="span" className="pb-[6px]">
              Dịch vụ
            </BaseText>
            <div className="pb-3">
              {get(attributes, "services.data", [])?.map((item: any, i) => {
                return (
                  <BaseText
                    key={i}
                    tag="p"
                    size="S"
                    className="text-textColorSecond whitespace-nowrap"
                  >
                    {item.attributes?.title}
                  </BaseText>
                );
              })}
            </div>

            <BaseText tag="span" className="pb-[6px]">
              Khách hàng
            </BaseText>
            <BaseText
              tag="span"
              size="S"
              className="text-textColorSecond pb-3 whitespace-nowrap"
            >
              {get(attributes, "client.data.attributes.name")}
            </BaseText>

            <BaseText tag="span" className="pb-[6px]">
              Tags
            </BaseText>
            <div className="pb-3">
              {get(attributes, "tags.data", [])?.map((item: any, i) => {
                return (
                  <BaseText
                    key={i}
                    tag="p"
                    size="S"
                    className="text-textColorSecond whitespace-nowrap"
                  >
                    # {item.attributes?.title}
                  </BaseText>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </BaseLayoutWraper>
  );
}
