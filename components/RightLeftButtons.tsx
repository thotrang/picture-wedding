import ChevronLeft from "public/icons/ChevronLeft";
import BaseIconButton from "./BaseIconButton";
import ChevronRight from "public/icons/ChevronRight";
interface IRightLeftButtons {
  nextClick: () => void;
  preClick: () => void;
}
export default function RightLeftButtons({
  nextClick,
  preClick,
}: IRightLeftButtons) {
  return (
    <div className="border-solid border-borderColor border-[1px] rounded-full p-2 inline-block">
      <BaseIconButton onClick={nextClick} className="mr-2">
        <ChevronLeft />
      </BaseIconButton>
      <BaseIconButton onClick={preClick}>
        <ChevronRight className="pl-2" />
      </BaseIconButton>
    </div>
  );
}
