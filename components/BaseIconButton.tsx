import classNames from "classnames";
import BaseButton, { IBaseButton } from "./BaseButton";
interface IBaseIconButton extends IBaseButton {
  classWrapper?: string
}
export default function BaseIconButton({
  className,
  classWrapper,
  children,
  ...props
}: IBaseIconButton) {
  return (
    <BaseButton
      className={classNames("aspect-square !rounded-full relative", className)}
      {...props}
    >
      <div className={classNames("absolute top-[20%] left-[20%]", classWrapper)}>{children}</div>
    </BaseButton>
  );
}
