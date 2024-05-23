import classNames from "classnames";
import BaseText, { IBaseText } from "./BaseText";
interface IBaseTag extends IBaseText {
  classWrapper?: string;
}
export default function BaseTag({
  children,
  classWrapper,
  ...props
}: IBaseTag) {
  return (
    <div
      className={classNames(
        "py-[6px] px-4 rounded-full border border-solid border-borderColor inline-block",
        classWrapper
      )}
    >
      <BaseText {...props}>{children}</BaseText>
    </div>
  );
}
