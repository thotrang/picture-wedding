import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BaseText from "@/components/BaseText";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";

export default function BannerBlogDetail() {
  const { blogDetail } = useSelector((s: RootState) => s.data_store);
  const { attributes } = blogDetail;
  return (
    <div
      className={classNames(
        "w-full lg:aspect-[3/1] md:aspect-[3/2] aspect-square flex items-end",
      )}
    >
      <BaseLayoutWraper className="2xl:pb-base50 lg:pb-base25 pb-5">
        <BaseText tag="h1" size="XXM" className="font-semibold">
          {attributes?.title}
        </BaseText>
      </BaseLayoutWraper>
    </div>
  );
}
