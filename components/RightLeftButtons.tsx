import ChevronLeft from "public/icons/ChevronLeft";
import ChevronRight from "public/icons/ChevronRight";
import classNames from "classnames";
import BaseButton from "./BaseButton";
interface IRightLeftButtons {
  nextClick: () => void;
  preClick: () => void;
  className?: string;
  disableLeftBtn?: boolean;
  disableRightBtn?: boolean;
}
export default function RightLeftButtons({
  nextClick,
  preClick,
  className,
  disableLeftBtn,
  disableRightBtn,
}: IRightLeftButtons) {
  
  return (
    <div className="inline-block">
      <div
        className={classNames(
          "border-solid border-borderColor border rounded-full bg-backgroundSecond flex gap-2 p-2",
          className
        )}
      >
        <BaseButton
          disabled={disableLeftBtn}
          onClick={nextClick}
          className="2xl:!h-[60px] !h-[50px] aspect-square flex justify-center items-center !p-0 !rounded-full"
        >
          <ChevronLeft className="2xl:h-9 2xl:w-9 h-7 w-7 " />
        </BaseButton>
        <BaseButton
          disabled={disableRightBtn}
          onClick={preClick}
          className="2xl:!h-[60px] !h-[50px] aspect-square flex justify-center items-center !p-0 !rounded-full"
        >
          <ChevronRight className="2xl:h-9 2xl:w-9 h-7 w-7" />
        </BaseButton>
      </div>
    </div>
  );
}
