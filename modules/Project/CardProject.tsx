import BaseImage from "@/components/BaseImage";
import BaseText from "@/components/BaseText";
import BaseTextButtonNavigate from "@/components/BaseTextButtonNavigate";
import BaseWraper from "@/components/BaseWraper";
import ArrowRightTop from "public/icons/ArrowRightTop";
interface ICardProject {
  item: {
    image: string;
    title: string;
    created: string;
  };
}
export default function CardProject({ item }: ICardProject) {
  const { image, title, created } = item;
  return (
    <BaseWraper className="flex flex-col" gutters={[["gap", 20]]}>
      <div>
        <BaseImage
          className="aspect-square object-cover"
          alt=""
          src={image}
        ></BaseImage>
      </div>
      <div className="flex justify-between">
        <div>
          <BaseText size="XS" className=" font-medium" tag="span">
            {title}
          </BaseText>
          <BaseText size="S" className=" text-textColorSecond pt-2">
            {created}
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
