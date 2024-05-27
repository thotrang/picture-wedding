import BaseImage from "@/components/BaseImage";
import BaseText from "@/components/BaseText";
import BaseTextButtonNavigate from "@/components/BaseTextButtonNavigate";
import { IPortfolio } from "@/types/portfolio";
import { convertText } from "helper/functions";
import { get } from "lodash-es";
import { useRouter } from "next/router";
import ArrowRightTop from "public/icons/ArrowRightTop";
import { ERouter } from "routers";
interface ICardPortfolio {
  item: IPortfolio;
}
export default function CardPortfolio({ item }: ICardPortfolio) {
  const { attributes, id } = item;
  const router = useRouter();
  return (
    <div className="w-full aspect-square relative rounded-xl overflow-hidden">
      <div className="absolute h-full w-full">
        <BaseImage
          className="h-full w-full object-cover"
          alt=""
          src={get(attributes, "thumbnail.data.attributes.url", "")}
        />
      </div>
      <div className="absolute z-5 bg-gradient-to-b from-white/0 via-black/50 to-black h-full w-full" />
      <div className="absolute z-10 left-0 bottom-0 w-full">
        <div className="flex justify-between p-4 gap-4">
          <BaseText className="font-semibold" size="M" tag="h2">
            {attributes.title}
          </BaseText>
          <BaseTextButtonNavigate
            className="font-medium flex items-center py-1 gap-2 whitespace-nowrap"
            onClick={() =>
              router.push(
                ERouter.PORTFOLIO_DETAIL + "/" + convertText(attributes.title) + "/" + id
              )
            }
          >
            <BaseText size="S" tag="span">
              XEM CHI TIẾT
            </BaseText>
            <ArrowRightTop className="h-6 w-6 align-middle" />
          </BaseTextButtonNavigate>
        </div>
      </div>
    </div>
  );
}
