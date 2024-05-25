import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BaseText from "@/components/BaseText";
import classNames from "classnames";
import convertDate from "helper/functions";
import { get } from "lodash-es";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";

export default function ContentBlogDetail() {
  const { blogDetail } = useSelector((s: RootState) => s.data_store);
  const { attributes } = blogDetail;

  const { time1 } = convertDate(attributes?.createdAt);
  if (!attributes) return <div />;
  return (
    <div
      className={classNames(
        "border-0 border-solid border-y border-borderColor"
      )}
    >
      <BaseLayoutWraper className="lg:grid grid-cols-12">
        <div className="col-span-3 2xl:pl-base80 lg:pl-base60 order-last 2xl:pt-base40 lg:pt-6 max-lg:pt-base40 max-lg:grid grid-cols-2">
          <div className="pb-base20">
            <BaseText size="S" tag="p" className="text-textColorSecond">
              Ngày đăng
            </BaseText>
            <BaseText size="S" tag="p" className="pt-base10">
              {time1}
            </BaseText>
          </div>
          <div>
            <BaseText size="S" tag="p" className="text-textColorSecond">
              Hạng mục
            </BaseText>
            <BaseText size="S" tag="p" className="pt-base10">
              {get(attributes, "service.data.attributes.title", "")}
            </BaseText>
          </div>
        </div>
        <div
          className={classNames(
            "col-span-9 2xl:pr-base80 lg:pr-base60",
            "border-0 border-solid border-borderColor border-r"
          )}
        >
          <div
            className="image_in_html text-textColorSecond"
            dangerouslySetInnerHTML={{ __html: attributes?.content ?? "" }}
          ></div>
        </div>
      </BaseLayoutWraper>
    </div>
  );
}
