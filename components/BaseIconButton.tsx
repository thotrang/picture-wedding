import classNames from "classnames";
import BaseButton, { IBaseButton } from "./BaseButton";
interface IBaseIconButton extends IBaseButton {}
export default function BaseIconButton({
  className,
  children,
  ...props
}: IBaseIconButton) {
  return (
    <BaseButton
      className={classNames("h-14 w-14 !rounded-full relative", className)}
      {...props}
    >
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 pt-1">{children}</div>
    </BaseButton>
  );
}
