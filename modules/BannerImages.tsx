import BaseImage from "@/components/BaseImage";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
export default function BannerImages() {
  const images = [
    "/images/image-1.png",
    "/images/7a6fedaa40d79ed0d7f58e86fba71d49.png",
    "/images/4559b64dd81a97530eb5a7ea35deae5d.png",
    "/images/56266502b0c42196572368055f89f47d.png",
    "/images/ac1f36bd490318145d812ec095aef81c.png",
    "/images/cced55cb3406e6412c8875b644ed6aa1.png",
  ];
  return (
    <BaseLayoutWraper>
      <div className="grid grid-cols-12 w-full 2xl:auto-rows-banner-l lg:auto-rows-banner-m auto-rows-banner-s lg: 2xl:gap-5 lg:gap-4 gap-1">
        <div className="col-span-4 grid grid-rows-12  2xl:gap-5 lg:gap-4 gap-1">
          <div className="row-span-9">
            <BaseImage
              src={images[0] ?? ""}
              alt={""}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="row-span-3">
            <BaseImage
              src={images[1] ?? ""}
              alt={""}
              className="h-full aspect-[3/2] !w-auto object-cover"
            />
          </div>
        </div>

        <div className="grid col-span-5 grid-rows-12">
          <div className="row-span-12">
            <BaseImage
              src={images[2] ?? ""}
              alt={""}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="grid col-span-3 grid-rows-12 2xl:gap-5 lg:gap-4 gap-1">
          <div className="row-span-8">
            <BaseImage
              src={images[3] ?? ""}
              alt={""}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="row-span-4">
            <BaseImage
              src={images[4] ?? ""}
              alt={""}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </BaseLayoutWraper>
  );
}
