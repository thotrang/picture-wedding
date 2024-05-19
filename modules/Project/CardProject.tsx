import BaseImage from "@/components/BaseImage";
import BaseText from "@/components/BaseText";
import BaseTextButtonNavigate from "@/components/BaseTextButtonNavigate";
import BaseWraper from "@/components/BaseWraper";
import { IPortfolio } from "@/types/portfolio";
import { get } from "lodash-es";
import ArrowRightTop from "public/icons/ArrowRightTop";
interface ICardProject {
  item: IPortfolio;
}
export default function CardProject({ item }: ICardProject) {
  const { attributes } = item;

  return (
    <BaseWraper className="flex flex-col" gutters={[["gap", 20]]}>
      <div>
        <BaseImage
          className="aspect-square object-cover"
          alt=""
          src={get(attributes, "thumbnail.data.attributes.url", "")}
        ></BaseImage>
      </div>
      <div className="flex justify-between">
        <div>
          <BaseText size="XS" className=" font-medium" tag="span">
            {attributes.title}
          </BaseText>
          <BaseText size="S" className=" text-textColorSecond pt-2">
            {attributes.createdAt}
          </BaseText>
        </div>
        <div>
          <BaseTextButtonNavigate
            className="font-medium flex items-center py-1 gap-2"
            onClick={() => {}}
          >
            <BaseText size="S" tag="span">
              VIEW PROJECT
            </BaseText>
            <ArrowRightTop className="h-6 w-6 align-middle" />
          </BaseTextButtonNavigate>
        </div>
      </div>
    </BaseWraper>
  );
}
