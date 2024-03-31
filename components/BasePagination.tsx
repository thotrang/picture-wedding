import BaseButton from "./BaseButton";
import BaseText from "./BaseText";

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
    <div>
      <div>
        <BaseText>{title}</BaseText>
        <BaseText>{content}</BaseText>
      </div>
      {size > 0 && (
        <div>
          <BaseButton onClick={nextClick}></BaseButton>
          <BaseButton onClick={preClick}></BaseButton>
        </div>
      )}
      <div>
        <BaseButton onClick={showMoreClick}>{titleButton}</BaseButton>
      </div>
    </div>
  );
}
