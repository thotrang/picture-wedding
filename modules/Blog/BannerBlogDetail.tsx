import BaseImage from "@/components/BaseImage";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BaseText from "@/components/BaseText";
import classNames from "classnames";
import { get } from "lodash-es";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";

export default function BannerBlogDetail() {
  const { blogDetail } = useSelector((s: RootState) => s.data_store);
  const { attributes } = blogDetail;

  return (
    <div
      className={classNames(
        "w-full lg:aspect-[3/1] md:aspect-[3/2] aspect-square relative"
      )}
    >
      <BaseImage
        alt=""
        src={get(attributes, "thumbnail.data.attributes.url", "")}
        className="absolute h-full w-full !rounded-none object-cover"
      ></BaseImage>
      <div className="absolute z-5 bg-gradient-to-b from-white/50 via-black/50 to-black h-full w-full" />
      <div className="lg:absolute z-10 left-0 bottom-0 w-full">
        <BaseLayoutWraper className="2xl:pb-base50 lg:pb-base25 pb-5">
          <BaseText tag="h1" size="XXM" className="font-semibold">
            {attributes?.title}
          </BaseText>
        </BaseLayoutWraper>
      </div>
    </div>
  );
}
