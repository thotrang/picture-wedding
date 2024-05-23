// import { DetailedHTMLProps, HTMLAttributes, useMemo } from "react";
// import styled from "styled-components";
// type Type =
//   | "padding"
//   | "margin"
//   | "height"
//   | "width"
//   | "gap"
//   | "minWidth"
//   | "maxWidth"
//   | "minHeight"
//   | "maxHeight";
// type Direction =
//   | "top"
//   | "left"
//   | "right"
//   | "bottom"
//   | "vertical"
//   | "horizontal";
// type Size = number;
// export type Gutter = [Type, Size, Direction?];
// export interface IBaseWraper
//   extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
//   gutters?: Gutter[];
//   percentageShrink?: [number, number];
// }
// export default function BaseWraper({
//   children,
//   gutters,
//   percentageShrink = [0.75, 0.5],
//   ...props
// }: IBaseWraper) {
//   const styles = useMemo(() => {
//     const generateStyle = (type: Type, size: Size, direction?: Direction) => {
//       if ((type === "padding" || type === "margin") && direction) {
//         if (direction === "vertical") {
//           return `${type}-top: ${size}px; ${type}-bottom: ${size}px;`;
//         } else if (direction === "horizontal") {
//           return `${type}-left: ${size}px; ${type}-right: ${size}px;`;
//         } else {
//           return `${type}-${direction}: ${size}px;`;
//         }
//       } else {
//         return `${type}: ${size}px;`;
//       }
//     };

//     const generateMediaQuery = (styles: string, minWidth: number) => {
//       return `@media only screen and (min-width: ${minWidth}px) {${styles}}`;
//     };

//     let xlStyles = "",
//       mdStyles = "",
//       smStyles = "";

//     gutters?.forEach(([type, size, direction]) => {
//       const xlSize = size;
//       const mdSize = size * percentageShrink[0];
//       const smSize = size * percentageShrink[1];

//       xlStyles += generateStyle(type, xlSize, direction);
//       mdStyles += generateStyle(type, mdSize, direction);
//       smStyles += generateStyle(type, smSize, direction);
//     });

//     const mediaQueries = `
//       ${generateMediaQuery(smStyles, 768)}
//       ${generateMediaQuery(mdStyles, 768)}
//       ${generateMediaQuery(xlStyles, 1536)}
//     `;

//     return mediaQueries;
//   }, [gutters]);

//   const Div = styled.div`
//     ${styles}
//   `;
//   return <Div {...props}>{children}</Div>;
// }
