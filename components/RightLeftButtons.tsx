import ChevronLeft from "public/icons/ChevronLeft";
import BaseIconButton from "./BaseIconButton";
import ChevronRight from "public/icons/ChevronRight";
import BaseWraper from "./BaseWraper";
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
    <BaseWraper
      className={classNames(
        "border-solid border-borderColor border rounded-full grid grid-cols-2 gap-2",
        className
      )}
      gutters={[
        ["padding", 8],
        ["width", 142],
      ]}
      percentageShrink={[0.8, 0.8]}
    >
      <BaseIconButton
        onClick={nextClick}
        className="w-full h-auto aspect-square"
      >
        <ChevronLeft className="2xl:h-9 2xl:w-9 h-7 w-7" />
      </BaseIconButton>
      <BaseIconButton
        onClick={preClick}
        className="w-full h-auto aspect-square"
      >
        <ChevronRight className="2xl:h-9 2xl:w-9 h-7 w-7" />
      </BaseIconButton>
    </BaseWraper>
  );
}
