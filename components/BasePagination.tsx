import ArrowRight from "public/icons/ArrowRight";
import BaseButton from "./BaseButton";
import BaseText from "./BaseText";
import ChevronLeft from "public/icons/ChevronLeft";
import ChevronRight from "public/icons/ChevronRight";
import BaseIconButton from "./BaseIconButton";

interface IBasePagination {
  titleButton: string;
  title: string;
  content: string;
  size: number;
  showMoreClick: () => void;
  nextClick: () => void;
  preClick: () => void;
}
export default function BasePagination({
  content,
  title,
  titleButton,
  size,
  showMoreClick,
  nextClick,
  preClick,
}: IBasePagination) {
  return (
    <div className="w-full flex justify-between items-end border-solid border-b border-t-0 pb-[50px] border-borderColor border-x-0 max-lg:flex-col max-lg:justify-start max-lg:items-start gap-4">
      <div>
        <BaseText
          tag="span"
          size="XS"
          className="font-semibold text-textColorSecond"
          content={title.toUpperCase()}
        ></BaseText>
        <BaseText
          tag="h1"
          size="L"
          className="font-semibold  pt-2"
          content={content.toUpperCase()}
        ></BaseText>
      </div>
      <div className="flex gap-6">
        {size > 0 && (
          <div className="border-solid border-borderColor border-[1px] rounded-full p-2 flex gap-2">
            <BaseIconButton onClick={nextClick}>
              <ChevronLeft />
            </BaseIconButton>
            <BaseIconButton onClick={preClick}>
              <ChevronRight className="pl-2" />
            </BaseIconButton>
          </div>
        )}
        <div className="flex items-center">
          <BaseButton onClick={showMoreClick} className="flex justify-center items-center gap-2">
            <BaseText tag="span" content={titleButton}></BaseText>
            <ArrowRight className="h-4 w-4" />
          </BaseButton>
        </div>
      </div>
    </div>
  );
}
