import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export interface IBaseText
  extends DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
    PropsWithChildren {
  tag?: "p" | "span" | "h1" | "h2" | "h3" | "h4";
  size?: "S" | "XS" | "M" | "XM" | "L" | "XL";
  content?: string;
}
export default function BaseText({
  tag,
  content,
  className,
  children,
  size,
  ...props
}: IBaseText) {
  const Tag = tag ?? "p";
  return (
    <Tag
      {...props}
      className={classNames(
        `text-textColor m-0`,
        {
          "2xl:text-m md:text-xs text-s": size === "S",
          "2xl:text-xm md:text-m text-xs": size === "XS",
          "2xl:text-xl md:text-l text-xm": size === "M",
          "2xl:text-3xl md:text-2xl text-xl": size === "XM",
          "2xl:text-5xl md:text-4xl text-xl": size === "L",
          "2xl:text-3max md:text-2max text-max": size === "XL",
        },
        className
      )}
    >
      {content ?? children}
    </Tag>
  );
}
