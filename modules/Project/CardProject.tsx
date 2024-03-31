import BaseImage from "@/components/BaseImage";
import BaseText from "@/components/BaseText";
import BaseTextButton from "@/components/BaseTextButton";
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
    <div>
      <div>
        <BaseImage
          className="aspect-square object-cover"
          alt=""
          src={image}
        ></BaseImage>
      </div>
      <div className="flex justify-between pt-4">
        <div>
          <BaseText className="text-[20px] font-medium" tag="span">
            {title}
          </BaseText>
          <BaseText className="text-[18px] text-textColorSecond pt-2">
            {created}
          </BaseText>
        </div>
        <div>
          <BaseTextButton className="font-medium text-[18px] flex items-center py-1">
            <BaseText tag="span">VIEW PROJECT</BaseText>
            <ArrowRightTop className="h-6 w-6 align-middle"/>
          </BaseTextButton>
        </div>
      </div>
    </div>
  );
}
