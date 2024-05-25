import BaseImage from "@/components/BaseImage";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BaseText from "@/components/BaseText";
import classNames from "classnames";

export default function BannerAboutUs() {
  const image = "/images/image_about_us.png";
  const statistics = [
    { number: "10+", title: "Năm kinh nghiệm" },
    { number: "500+", title: "Khách hàng" },
    { number: "5+", title: "Giải thưởng nhiếp ảnh" },
    { number: "90%+", title: "Khách hàng hài lòng" },
    { number: "11000+", title: "Người theo dõi đa nền tảng" },
  ];
  const descriptions = {
    "TẦM NHÌN":
      "Goldstar Media là đơn vị có hơn 8 năm kinh nghiệm trong lĩnh vực sản xuất phim giới thiệu doanh nghiệp, tự tin có thể tạo ra những sản phẩm có giá trị. Với trình độ chuyên môn cao, sự sáng tạo, nhanh nhạy, nhiệt huyết, trang thiết bị hiện đại.",
    "SỨ MỆNH":
      "Hoạt động theo phương trâm “Đồng hành phát triển cùng doanh nghiệp” Goldstar Media luôn phấn đấu, nỗ lực không ngừng nghỉ nhằm tạo ra những sản phẩm tâm huyết, đáp ứng yêu cầu khắt khe của quý khách hàng. Goldstar Media làm hài lòng mọi khách hàng, kể cả những khách hàng khó tính nhất.",
  };
  return (
    <BaseLayoutWraper className="2xl:pt-base100 lg:pt-base80 pt-base60">
      <div className="relative">
        <div className="w-full z-0 aspect-[2/1]">
          <BaseImage
            src={image}
            alt=""
            className="h-full w-full !rounded-[60px]"
          />
        </div>
        <div className="lg:absolute top-0 bg-background w-full pb-10 max-lg:pt-base30">
          <div className="2xl:pb-base30 pb-6">
            <BaseText
              tag="h3"
              size="S"
              className="2xl:text-l font-normal text-textColorSecond"
            >
              SÁNG TẠO - CHUYÊN NGHIỆP - TẬN TÂM
            </BaseText>
            <BaseText tag="h2" size="XM" className="font-bold">
              GOLDSTAR MEDIA
            </BaseText>
          </div>
          <div
            className={classNames(
              "grid lg:grid-cols-5 grid-cols-2 2xl:gap-base20 gap-base10"
            )}
          >
            {statistics.map((item, index) => {
              return (
                <div
                  key={index}
                  className={classNames(
                    "bg-backgroundSecond rounded-xl 2xl:px-base30 2xl:py-6 lg:px-6 lg:py-base20 flex flex-col py-base20 px-3",
                    "max-lg:text-center",
                    {
                      "lg:col-span-1 col-span-2":
                        index === statistics.length - 1,
                    }
                  )}
                >
                  <BaseText tag="span" size="XM" className="font-semibold">
                    {item.number}
                  </BaseText>
                  <BaseText
                    tag="span"
                    size="S"
                    className="font-normal text-textColorSecond"
                  >
                    {item.title}
                  </BaseText>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "2xl:py-base80 lg:py-base60 py-base40",
          "2xl:mt-base100 lg:mt-base80 mt-base60",
          "border-y border-x-0 border-solid border-borderColor"
        )}
      >
        {Object.entries(descriptions).map(([key, value], index) => {
          return (
            <div
              key={index}
              className={classNames({
                "2xl:pb-6 lg:pb-4 pb-3": index === 0,
              })}
            >
              <BaseText
                tag="h1"
                size="XM"
                className="font-semibold text-textColorSecond 2xl:pb-base40 lg:pb-base30 pb-base20"
              >
                {key}
              </BaseText>
              <BaseText tag="p" size="S" className="text-textColorSecond">
                {value}
              </BaseText>
            </div>
          );
        })}
      </div>
    </BaseLayoutWraper>
  );
}
