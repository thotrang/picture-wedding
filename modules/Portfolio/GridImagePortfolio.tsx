import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";
import { Gallery } from "react-grid-gallery";
import { ESizeScreen, useScreenSize } from "hooks/useWindowSize";
import BaseImage from "@/components/BaseImage";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames";
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
    if (size === ESizeScreen.MD) return 400;
    if (size === ESizeScreen.SM || size === ESizeScreen.XS) return null;
    return 600;
  }, [size]);
  return (
    <BaseLayoutWraper className="2xl:pt-base100 lg:pt-base80 pt-base60">
      <div className="md:aspect-[5/2] aspect-[3/2] px-3 pb-3 max-md:px-0 max-md:pb-6">
        <Swiper
          className="absolute h-full w-full"
          spaceBetween={12}
          autoplay={{
            delay: 12000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {(listImages ?? []).map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <BaseImage
                    className={classNames(
                      "absolute h-full w-full object-cover"
                    )}
                    src={item.src}
                    alt={""}
                    showViewer
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {rowHeight ? (
        <Gallery
          images={listImages}
          margin={12}
          rowHeight={rowHeight}
          enableImageSelection={false}
          thumbnailStyle={{}}
          thumbnailImageComponent={(show) => {
            return (
              <BaseImage
                src={show.imageProps.src}
                alt=""
                className="w-full h-full object-cover"
                showViewer
              />
            );
          }}
        ></Gallery>
      ) : (
        <div className="grid gap-base20">
          {listImages.map((item, index) => {
            return (
              <BaseImage
                key={index}
                src={item.src}
                alt=""
                className="w-full h-full object-cover"
                showViewer
              />
            );
          })}
        </div>
      )}
    </BaseLayoutWraper>
  );
}
