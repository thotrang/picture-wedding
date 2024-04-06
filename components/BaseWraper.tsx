import { DetailedHTMLProps, HTMLAttributes, useMemo } from "react";
import styled from "styled-components";

interface Gutter {
  size: number;
  direction?: "top" | "left" | "right" | "bottom";
  type: "padding" | "margin" | "height" | "width";
}
interface IBaseWraper
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  gutters?: Gutter[];
}
export default function BaseWraper({
  children,
  gutters,
  ...props
}: IBaseWraper) {
  const styles = useMemo(() => {
    let xl = "",
      md = "",
      sm = "";
    gutters?.forEach(({ size, direction, type }) => {
      const property =
        (type === "padding" || type === "margin") && direction
          ? `${type}-${direction}`
          : type;
      xl += `${property}: ${size}px;`;
      md += `${property}: ${(size * 3) / 4}px;`;
      sm += `${property}: ${(size * 1) / 2}px;`;
    });
    return `
      @media only screen and (max-width: 768px) {${sm}}
      @media only screen and (min-width: 768px) {${md}}
      @media only screen and (min-width: 1536px) {${xl}}
      `;
  }, [gutters]);

  const Div = styled.div`
    ${styles}
  `;
  return <Div {...props}>{children}</Div>;
}
