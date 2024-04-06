import { DetailedHTMLProps, HTMLAttributes, useMemo } from "react";
import styled from "styled-components";
type Type =
  | "padding"
  | "margin"
  | "height"
  | "width"
  | "gap"
  | "minWidth"
  | "maxWidth"
  | "minHeight"
  | "maxHeight";
type Direction = "top" | "left" | "right" | "bottom";
type Size = number;
export type Gutter = [Type, Size, Direction?];
export interface IBaseWraper
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  gutters?: Gutter[];
  percentageShrink?: [number, number];
}
export default function BaseWraper({
  children,
  gutters,
  percentageShrink = [0.75, 0.5],
  ...props
}: IBaseWraper) {
  const styles = useMemo(() => {
    let xl = "",
      md = "",
      sm = "";
    gutters?.forEach(([type, size, direction]) => {
      const property =
        (type === "padding" || type === "margin") && direction
          ? `${type}-${direction}`
          : type;
      xl += `${property}: ${size}px;`;
      md += `${property}: ${size * percentageShrink[0]}px;`;
      sm += `${property}: ${size * percentageShrink[1]}px;`;
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
