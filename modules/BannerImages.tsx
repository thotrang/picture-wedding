import BaseImage from "@/components/BaseImage";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import classNames from "classnames";
function ImageGrid({ src, className, imageClass }: any) {
  return (
    <div className={classNames("relative", className)}>
      <BaseImage
        src={src}
        alt={""}
        className={classNames(
          "absolute h-full w-full object-cover",
          imageClass
        )}
      />
    </div>
  );
}
export default function BannerImages() {
  const images = [
    "/images/banner_home/9f0e0d19359c0b7f88311b38c733da6d.jpeg",
    "/images/banner_home/2fe082d895f99cce0ab7f1f436db2fdd.jpeg",
    "/images/banner_home/45f87decde994112fa696db8dd49e287.jpeg",
    "/images/banner_home/1421744d488cc58dd0b4522f91ca4995.jpeg",
    "/images/banner_home/c8227e41d65968852b717567ff79986d.jpeg",
    "/images/banner_home/e2c7136018c225f31da185b253bb4fda.jpeg",
    "/images/banner_home/e2c7136018c225f31da185b253bb4fda.jpeg",
  ];
  return (
    <BaseLayoutWraper className="">
      <div className="relative">
        <div className="grid grid-cols-12 w-full 2xl:gap-4 lg:gap-3 gap-1.5 2xl:h-[512px] lg:h-[424px] h-[224px]">
          <div className="col-span-4 grid grid-rows-12  2xl:gap-5 lg:gap-4 gap-1">
            <ImageGrid src={images[0] ?? ""} className="row-span-8"></ImageGrid>
            <div className="row-span-4"></div>
          </div>

          <div className="grid col-span-5 grid-rows-12">
            <ImageGrid
              src={images[2] ?? ""}
              className="row-span-12"
            ></ImageGrid>
          </div>
          <div className="grid col-span-3 grid-rows-12 2xl:gap-4 lg:gap-3 gap-1.5">
            <ImageGrid src={images[3] ?? ""} className="row-span-8" imageClass=''></ImageGrid>
            <ImageGrid src={images[4] ?? ""} className="row-span-4"></ImageGrid>
          </div>
        </div>
        <div className="absolute h-full w-full z-10 top-0 left-0">
          <div className="h-full w-full grid grid-cols-18">
            <div className="col-span-2 grid grid-rows-12 2xl:gap-4 lg:gap-3 gap-1.5">
              <div className="row-span-8"></div>
              <ImageGrid
                src={images[1] ?? ""}
                className="row-span-4"
              ></ImageGrid>
            </div>
            <div className="col-span-6 grid grid-rows-12">
              <div className="row-span-5 h-full"></div>
              <div className="row-span-7 bg-background rounded-t-2xl 2xl:p-4 lg:p-3 p-1.5 !pb-0">
                <div className="relative h-full">
                  <BaseImage
                    src={images[5] ?? ""}
                    alt=""
                    className="absolute h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayoutWraper>
  );
}
