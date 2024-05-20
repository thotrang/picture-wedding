import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import LinkSocialNetwork from "../LinkSocialNetwork";
import BaseText from "@/components/BaseText";
import classNames from "classnames";

export default function ContactUs() {
  const infor = {
    Email: "goldstarmedia.vn@gmail.com",
    "Số điện thoại": "088 669 36 88",
    "Địa chỉ": "737 Hoàng Hoa Thám, Ba Đình, Hà Nội",
  };
  return (
    <BaseLayoutWraper>
      <div
        className={classNames(
          "border-0 border-t border-solid border-borderColor",
          "flex 2xl:gap-base100 md:gap-base80 md:flex-row flex-col",
          "py-base80",
          "2xl:my-base120 lg:my-base100"
        )}
      >
        <div>
          <BaseText
            size="XM"
            tag="h1"
            className="text-textColorSecond font-semibold"
          >
            KẾT NỐI VỚI CHÚNG TÔI
          </BaseText>
          <div className="2xl:py-base50 lg:py-base40 pb-base40 pt-6">
            <LinkSocialNetwork />
          </div>
        </div>
        <div className="grow grid 2xl:grid-cols-5  lg:grid-cols-4 md:grid-cols-2 gap-base20">
          {Object.entries(infor).map(([key, value], index) => {
            return (
              <div key={index} className="col-span-2">
                <BaseText tag="p" size="S" className="pb-base10">
                  {key}
                </BaseText>
                <BaseText tag="p" size="XS" className="text-textColorSecond">
                  {value}
                </BaseText>
              </div>
            );
          })}
        </div>
      </div>
    </BaseLayoutWraper>
  );
}
