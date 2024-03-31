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
      <div className="h-[512px] relative overflow-hidden">
        <div>
          <BaseImage src={images[0] ?? ""} alt={""} className="!h-36 !w-36" />
        </div>
        <div>
          <BaseImage src={images[1] ?? ""} alt={""} />
        </div>
        <div>
          <BaseImage src={images[2] ?? ""} alt={""} />
        </div>
        <div>
          <BaseImage src={images[3] ?? ""} alt={""} />
        </div>
        <div>
          <BaseImage src={images[4] ?? ""} alt={""} />
        </div>
        <div>
          <BaseImage src={images[5] ?? ""} alt={""} />
        </div>
      </div>
    </BaseLayoutWraper>
  );
}
