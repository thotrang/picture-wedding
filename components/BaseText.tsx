import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export interface IBaseText
  extends DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
    PropsWithChildren {
  tag?: "p" | "span" | "h1" | "h2" | "h3" | "h4";
  size?: "S" | "XS" | "M" | "XM" | "XXM" | "L" | "XL";
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
          "2xl:text-m lg:text-xs text-s": size === "S",
          "2xl:text-xm lg:text-m text-xs": size === "XS",
          "2xl:text-xl lg:text-l text-xm": size === "M",
          "2xl:text-3xl lg:text-2xl text-xl": size === "XM",
          "2xl:text-[48px] lg:text-[40px] text-[28px]": size === "XXM",
          "2xl:text-5xl lg:text-4xl text-xl": size === "L",
          "2xl:text-3max lg:text-2max text-max": size === "XL",
          
        },
        className
      )}
    >
      {content ?? children}
    </Tag>
  );
}
