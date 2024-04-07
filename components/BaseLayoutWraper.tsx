import { DetailedHTMLProps, HTMLAttributes } from "react";
import BaseWraper, { IBaseWraper } from "./BaseWraper";
interface IBaseLayoutWraper
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, IBaseWraper {}
export default function BaseLayoutWraper({
  children,
  className,
  ...props
}: IBaseLayoutWraper) {
  return (
    <BaseWraper
      {...props}
      className={`px-4 2xl:max-w-screen-2xl max-w-screen-l mx-auto ${className}`}
    >
      {children}
    </BaseWraper>
  );
}
