import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IBaseText
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  tag?: "p" | "span" | "h1" | "h2" | "h3" | "h4";
  content?: string;
}
export default function BaseText({
  tag,
  content,
  className,
  ...props
}: IBaseText) {
  const Tag = tag ?? "p";
  return (
    <Tag {...props} className={`text-textColor ${className}`}>
      {content}
    </Tag>
  );
}
