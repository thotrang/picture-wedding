import BaseImage from "@/components/BaseImage";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BaseText from "@/components/BaseText";
import { get } from "lodash-es";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";

export default function BannerPortfolioDetail() {
  const { portfolioDetail } = useSelector((s: RootState) => s.data_store);
  const { attributes } = portfolioDetail;

  if (!attributes) return <div />;

  return (
    <div className="lg:w-full max-lg:px-4">
      <div className="relative">
        <div>
          <BaseImage
            src={get(attributes, "thumbnail.data.attributes.url", "")}
            alt=""
            className="!rounded-none object-cover aspect-[5/2] w-full"
          ></BaseImage>
        </div>
        <div className="lg:absolute z-10 left-0 bottom-0 w-full">
          <BaseLayoutWraper className="lg:pb-base60 pb-6 max-lg:!px-3">
            <BaseText tag="h2" size="XM" className="font-bold">
              {attributes.title}
            </BaseText>
            <div className=" 2xl:mt-6 mt-4">
              <BaseText
                tag="span"
                size="S"
                className="font-normal text-textColorSecond 2xl:mt-base30"
              >
                {attributes.shortDescription}
              </BaseText>
            </div>
          </BaseLayoutWraper>
        </div>
      </div>
    </div>
  );
}
