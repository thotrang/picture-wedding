import BaseCard from "@/components/BaseCard";
import BaseImage from "@/components/BaseImage";
import BaseText from "@/components/BaseText";
import BaseTextButtonNavigate from "@/components/BaseTextButtonNavigate";
import { IBLog } from "@/types/blog";
import classNames from "classnames";
import { get } from "lodash-es";
import { useRouter } from "next/router";
import ArrowRightTop from "public/icons/ArrowRightTop";
import { ERouter } from "routers";
interface ICardBlog {
  item: IBLog;
  smallImage?: boolean;
}
export default function CardBlog({ item, smallImage }: ICardBlog) {
  const { attributes } = item ?? {};
  const router = useRouter();

  if (!attributes) return <div />;
  return (
    <BaseCard
      onClick={() =>
        router.push(ERouter.BLOG_DETAIL + "/" + item.attributes.slug)
      }
      className="flex flex-col 2xl:gap-base20 lg:gap-4 gap-3"
    >
      <div>
        <BaseImage
          className={classNames("object-cover", {
            "!aspect-[2/1]": smallImage,
            "aspect-[3/2]": !smallImage,
          })}
          alt=""
          src={get(attributes, "thumbnail.data.attributes.url", "")}
        ></BaseImage>
      </div>
      <div className="flex justify-between gap-2">
        <div className="">
          <BaseText size="XS" className=" font-medium" tag="span">
            {attributes.title}
          </BaseText>
        </div>
        <div className="">
          <BaseTextButtonNavigate
            className="font-medium flex items-center py-1 gap-2"
            onClick={() => {}}
            isHover={false}
          >
            <BaseText size="S" tag="span" className="whitespace-nowrap">
              XEM CHI TIẾT
            </BaseText>
            <ArrowRightTop className="h-6 w-6 align-middle" />
          </BaseTextButtonNavigate>
        </div>
      </div>
    </BaseCard>
  );
}
