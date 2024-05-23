import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BaseText from "@/components/BaseText";
import classNames from "classnames";
import LinkSocialNetwork from "../LinkSocialNetwork";
import BaseInput from "@/components/BaseInput";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";
import StarEightIcon from "@/public/icons/StarEightIcon";
import ButtonNavigate from "@/components/ButtonNavigate";

export default function ContactForm() {
  const { services } = useSelector((s: RootState) => s.stores);

  const data = {
    description:
      "Gửi cho chúng tôi thông tin để nhận báo giá chi tiết dịch vụ mà bạn quan tâm, chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.",
    subDescription: "Chúng tôi cam kết bảo mật thông tin của bạn.",
  };
  return (
    <BaseLayoutWraper>
      <div
        className={classNames(
          "border-0 border-t border-solid border-borderColor",
          "flex 2xl:gap-base100 lg:gap-base80 gap-base40 lg:flex-row flex-col ",
          "py-base80",
          "2xl:my-base120 lg:my-base100"
        )}
      >
        <div className="w-1/2">
          <BaseText
            size="XM"
            tag="h1"
            className="text-textColorSecond font-semibold"
          >
            LIÊN HỆ VỚI CHÚNG TÔI
          </BaseText>
          <BaseText
            tag="p"
            size="S"
            className="text-textColorSecond 2xl:pt-base30 lg:pt-base20 pt-base20"
          >
            {data.description}
          </BaseText>
          <BaseText
            tag="p"
            size="S"
            className="text-textColorSecond 2xl:pt-base30 lg:pt-base20 pt-base20"
          >
            {data.subDescription}
          </BaseText>
          <div className="2xl:py-base30 lg:py-base20 pb-base20 pt-6">
            <LinkSocialNetwork />
          </div>
        </div>
        <div className="grow grid md:grid-cols-2 grid-cols-1 w-full 2xl:gap-base50 lg:gap-base40 gap-base30">
          <div className="md:col-span-2">
            <BaseInput
              subTitle="Tên bạn là gì?"
              placeholder="NHẬP TÊN CỦA BẠN"
            />
          </div>
          <div>
            <BaseInput
              subTitle="Địa chỉ email"
              placeholder="NHẬP ĐỊA CHỈ EMAIL"
            />
          </div>
          <div>
            <BaseInput
              subTitle="Số điện thoại của bạn"
              placeholder="NHẬP SỐ ĐIỆN THOẠI"
            />
          </div>
          <div className="md:col-span-2">
            <BaseText tag="span" size="S">
              Dịch vụ bạn quan tâm
            </BaseText>
            <div className="grid gap-base10 2xl:grid-cols-3 md:grid-cols-2 w-full mt-base10">
              {services?.map((item, index) => {
                return (
                  <div key={index}>
                    <div
                      className="border-solid border rounded-xl border-borderColor gap-3 flex items-center 2xl:p-base20 lg:p-4 p-3"
                      key={index}
                    >
                      <StarEightIcon className="fill-textColorSecond" />
                      <BaseText size="S" className="text-textColorSecond ">
                        {item.attributes.title.toUpperCase()}
                      </BaseText>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="md:col-span-2">
            <BaseInput
              subTitle="Chia sẻ với chúng tôi mong muốn của bạn"
              placeholder="NHẬP NỘI DUNG TIN NHẮN"
            />
          </div>
          <div className="flex items-center gap-2">
            <BaseText tag="span" size="XM">
              GỬI THÔNG TIN
            </BaseText>
            <ButtonNavigate></ButtonNavigate>
          </div>
        </div>
      </div>
    </BaseLayoutWraper>
  );
}
