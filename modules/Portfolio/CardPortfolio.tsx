import BaseCard from "@/components/BaseCard";
import BaseImage from "@/components/BaseImage";
import BaseText from "@/components/BaseText";
import BaseTextButtonNavigate from "@/components/BaseTextButtonNavigate";
import ArrowRightTop from "@/public/icons/ArrowRightTop";
import { IPortfolio } from "@/types/portfolio";
import { get } from "lodash-es";
import { useRouter } from "next/router";
import { ERouter } from "routers";
interface ICardPortfolio {
  item: IPortfolio;
}
export default function CardPortfolio({ item }: ICardPortfolio) {
  const { attributes } = item;
  const router = useRouter();
  return (
    <BaseCard
      className="w-full aspect-square relative rounded-xl overflow-hidden"
      onClick={() => {
        router.push(ERouter.PORTFOLIO_DETAIL + "/" + attributes.slug);
      }}
    >
      <div className="absolute h-full w-full">
        <BaseImage
          className="h-full w-full object-cover"
          alt=""
          src={get(attributes, "thumbnail.data.attributes.url", "")}
        />
      </div>
      <div className="absolute z-5 bg-gradient-to-b from-white/0 via-black/50 to-black h-full w-full" />
      <div className="absolute z-10 left-0 bottom-0 w-full">
        <div className="p-4 gap-4 flex justify-between">
          <BaseText className="font-medium" size="XS" tag="h2">
            {attributes.title}
          </BaseText>
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
