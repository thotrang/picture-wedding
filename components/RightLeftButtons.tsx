import ChevronLeft from "public/icons/ChevronLeft";
import BaseIconButton from "./BaseIconButton";
import ChevronRight from "public/icons/ChevronRight";
import classNames from "classnames";
interface IRightLeftButtons {
  nextClick: () => void;
  preClick: () => void;
  className?: string;
}
export default function RightLeftButtons({
  nextClick,
  preClick,
  className,
}: IRightLeftButtons) {
  return (
    <div className="inline-block">
      <div
        className={classNames(
          "border-solid border-borderColor border rounded-full bg-backgroundSecond flex gap-2 p-2",
          className
        )}
      >
        <BaseIconButton onClick={nextClick} classWrapper="2xl:top-[12%] 2xl:left-[10%]">
          <ChevronLeft className="2xl:h-9 2xl:w-9 h-7 w-7 " />
        </BaseIconButton>
        <BaseIconButton onClick={preClick} classWrapper="2xl:top-[12%] 2xl:left-[15%]">
          <ChevronRight className="2xl:h-9 2xl:w-9 h-7 w-7" />
        </BaseIconButton>
      </div>
    </div>
  );
}
