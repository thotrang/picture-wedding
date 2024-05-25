import { DetailedHTMLProps, HTMLAttributes } from "react";
interface IBaseLayoutWraper
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export default function BaseLayoutWraper({
  children,
  className,
  ...props
}: IBaseLayoutWraper) {
  return (
    <div
      {...props}
      className={`px-4 max-md:px-8 2xl:max-w-screen-2xl max-w-screen-l mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
