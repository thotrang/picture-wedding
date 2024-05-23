import BaseImage from "@/components/BaseImage";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import classNames from "classnames";
import { get } from "lodash-es";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";
import InforPortfolio from "./InforPortfolio";
interface IGridImagePortfolio {}
interface IImageGrid {
  imgUrls: (string | undefined)[];
  type: "type_1" | "type_2";
}
function ImageGrid({ src, classname, type }: any) {
  if (src)
    return (
      <div
        className={classNames(
          "relative w-full",
          {
            "aspect-[3/2]": type === "type_1",
            "aspect-[2/3]": type === "type_2",
          },
          classname
        )}
      >
        <BaseImage
          src={src}
          alt=""
          className="absolute z-10 w-full h-full object-cover !rounded-none"
        />
      </div>
    );
  return null;
}
function ListImageGrid({ type = "type_1", imgUrls }: IImageGrid) {
  return (
    <div
      className={classNames(
        "grid grid-cols-2 w-full",
        "2xl:pt-base80 lg:pt-base40 pt-6",
        "2xl:gap-base80 lg:gap-base40 gap-6"
      )}
    >
      <ImageGrid
        src={imgUrls[0] ?? ""}
        type={type}
        classname={classNames({
          "col-span-2": type === "type_1",
          "col-span-1": type === "type_2",
        })}
      />
      <ImageGrid
        src={imgUrls[1] ?? ""}
        classname={classNames({
          "lg:col-span-1 col-span-2": type === "type_1",
          "col-span-1": type === "type_2",
        })}
        type={type}
      />
      <ImageGrid
        src={imgUrls[2] ?? ""}
        type={type}
        classname={classNames({
          "lg:col-span-1 col-span-2": type === "type_1",
          "col-span-2 !aspect-[3/2]": type === "type_2",
        })}
      />
    </div>
  );
}
export default function GridImagePortfolio({}: IGridImagePortfolio) {
  const { portfolioDetail } = useSelector((s: RootState) => s.stores);
  const { attributes } = portfolioDetail;
  const listImages = useMemo(() => {
    return (attributes?.gallery?.data ?? []).map((item) => {
      return get(item, "attributes.url", "");
    });
  }, [attributes]);
  return (
    <BaseLayoutWraper>
      <ListImageGrid
        imgUrls={[listImages[0], listImages[1], listImages[2]]}
        type={"type_1"}
      />
      <InforPortfolio />
      <ListImageGrid
        imgUrls={[listImages[3], listImages[4], listImages[5]]}
        type={"type_2"}
      />
      <ListImageGrid
        imgUrls={[listImages[6], listImages[7], listImages[8]]}
        type={"type_1"}
      />
    </BaseLayoutWraper>
  );
}
