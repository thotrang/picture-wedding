import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";
import { Gallery } from "react-grid-gallery";
import { ESizeScreen, useScreenSize } from "hooks/useWindowSize";
import BaseImage from "@/components/BaseImage";
interface IGridImagePortfolio {}

export default function GridImagePortfolio({}: IGridImagePortfolio) {
  const { portfolioDetail } = useSelector((s: RootState) => s.data_store);
  const { attributes } = portfolioDetail;
  const listImages = useMemo(() => {
    return (attributes?.gallery?.data ?? []).map((item) => {
      return {
        src: item.attributes.url,
        width: item.attributes.width,
        height: item.attributes.height,
      };
    });
  }, [attributes]);
  const { size } = useScreenSize();
  const rowHeight = useMemo(() => {
    if (size === ESizeScreen.MD) return 300;
    if (size === ESizeScreen.SM || size === ESizeScreen.XS) return 400;
    return 600;
  }, [size]);
  return (
    <BaseLayoutWraper>
      <Gallery
        images={listImages}
        margin={12}
        rowHeight={rowHeight}
        enableImageSelection={false}
        thumbnailStyle={{}}
        thumbnailImageComponent={(show) => {
          return <BaseImage src={show.imageProps.src} alt="" className="w-full h-full object-cover" showViewer/>
        }}
      ></Gallery>
    </BaseLayoutWraper>
  );
}