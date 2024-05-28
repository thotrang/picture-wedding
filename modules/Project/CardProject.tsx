import BaseCard from "@/components/BaseCard";
import BaseImage from "@/components/BaseImage";
import BaseText from "@/components/BaseText";
import BaseTextButtonNavigate from "@/components/BaseTextButtonNavigate";
import { IPortfolio } from "@/types/portfolio";
import { get } from "lodash-es";
import { useRouter } from "next/router";
import ArrowRightTop from "public/icons/ArrowRightTop";
import { ERouter } from "routers";
interface ICardProject {
  item: IPortfolio;
}
export default function CardProject({ item }: ICardProject) {
  const { attributes } = item;
  const router = useRouter();
  return (
    <BaseCard
      onClick={() => {
        router.push(ERouter.PORTFOLIO_DETAIL + "/" + attributes.slug);
      }}
      className="flex flex-col 2xl:gap-base20 lg:gap-4 gap-3"
    >
      <div>
        <BaseImage
          className="aspect-square object-cover"
          alt=""
          src={get(attributes, "thumbnail.data.attributes.url", "")}
        ></BaseImage>
      </div>
      <div className="flex justify-between">
        <div className="">
          <BaseText size="XS" className=" font-medium" tag="span">
            {attributes.title}
          </BaseText>
        </div>
        <div className="">
          <BaseTextButtonNavigate
            isHover={false}
            className="font-medium flex items-center py-1 gap-2"
            onClick={() => {}}
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
