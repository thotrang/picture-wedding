import BaseImage from "@/components/BaseImage";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BaseSlogan from "@/components/BaseSlogan";
import BaseText from "@/components/BaseText";
import BaseTextButtonNavigate from "@/components/BaseTextButtonNavigate";
import LinkSocialNetwork from "@/modules/LinkSocialNetwork";
import classNames from "classnames";
function ListItemFooter({ items }: { items?: string[] }) {
  return (
    <div className="h-full w-full">
      {(items ?? []).map((item, index) => {
        if (index === 0)
          return (
            <BaseText size="XS" className="text-textColorSecond mb-6 px-1">
              {item}
            </BaseText>
          );
        return (
          <div key={index}>
            <BaseTextButtonNavigate
              size="XS"
              className="mb-3 text-left"
              onClick={() => {}}
            >
              {item}
            </BaseTextButtonNavigate>
          </div>
        );
      })}
    </div>
  );
}
export default function Footer() {
  const routers: { [key: string]: string[] } = {
    0: ["TRANG CHỦ", "VỀ CHÚNG TÔI", "PORTFOLIO", "LIÊN HỆ"],
    1: [
      "DỊCH VỤ",
      "QUẢNG CÁO DOANH NGHIỆP",
      "NỘI THẤT - KIẾN TRÚC",
      "CHÂN DUNG",
      "NHÀ HÀNG - ĐỒ ĂN",
      "SỰ KIỆN",
      "SẢN PHẨM - THỜI TRANG",
    ],
  };
  return (
    <div className="max-w-screen-3xl">
      <BaseLayoutWraper>
        <div className="flex max-md:flex-col border-solid border-x border-y-0 border-borderColor">
          <div className="border-solid border-l-0 border-r border-y-0 max-lg:border-b border-borderColor 2xl:py-base90 2xl:px-base80 lg:py-base80 lg:px-base60 py-base40 px-base20">
            <BaseImage
              src="/images/Logo.png"
              alt=""
              className="2xl:h-logo-l lg:h-logo-m h-logo-s !w-auto !rounded-none 2xl:pb-base60 lg:pb-base40 pb-base20"
            />
            <BaseSlogan />
          </div>
          <div
            className={classNames(
              "grid lg:grid-cols-3 grid-cols-2 grow justify-between",
              "2xl:py-base90 2xl:px-base80 lg:py-base80 lg:px-base60 py-base40 px-base20"
            )}
          >
            <div className="col-span-1">
              <ListItemFooter items={routers[0]} />
            </div>
            <div className="lg:col-span-2">
              <ListItemFooter items={routers[1]} />
            </div>
          </div>
        </div>
      </BaseLayoutWraper>
      <div className="max-w-screen-3xl border-solid border-x-0 border-b-0 border-t border-borderColor">
        <BaseLayoutWraper className="relative">
          <div className="flex justify-between items-center py-3 max-lg:flex-col">
            <span className="flex items-center max-lg:pb-2">
              <BaseText size="S" className="text-textColorSecond" tag="span">
                Terms & Conditions
              </BaseText>
              <div className="h-6 mx-2 w-[2px] bg-buttonColor inline-block"></div>
              <BaseText size="S" className="text-textColorSecond" tag="span">
                Privacy Policy
              </BaseText>
            </span>
            <div className="max-lg:hidden">
              <LinkSocialNetwork />
            </div>
            <BaseText size="S" className="text-textColorSecond max-lg:pb-2">
              © 2024 Damien Braun Photography. All rights reserved.
            </BaseText>
            <div className="lg:hidden">
              <LinkSocialNetwork />
            </div>
          </div>
        </BaseLayoutWraper>
      </div>
    </div>
  );
}
