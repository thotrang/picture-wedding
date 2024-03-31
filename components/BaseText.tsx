import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export interface IBaseText
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >, PropsWithChildren {
  tag?: "p" | "span" | "h1" | "h2" | "h3" | "h4";
  content?: string;
}
export default function BaseText({
  tag,
  content,
  className,
  children,
  ...props
}: IBaseText) {
  const Tag = tag ?? "p";
  return (
    <Tag {...props} className={classNames(`text-textColor m-0`, className)}>
      {content ?? children}
    </Tag>
  );
}
