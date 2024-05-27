import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BaseText from "@/components/BaseText";
import classNames from "classnames";
import LinkSocialNetwork from "../LinkSocialNetwork";
import ContactForm from "./ContactForm";

function ContactFormGroup() {
  const dataHeader = {
    description:
      "Gửi cho chúng tôi thông tin để nhận báo giá chi tiết dịch vụ mà bạn quan tâm, chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.",
    subDescription: "Chúng tôi cam kết bảo mật thông tin của bạn.",
  };

  return (
    <BaseLayoutWraper className="!px-8">
      <div
        className={classNames(
          "border-0 border-t border-solid border-borderColor",
          "flex 2xl:gap-base100 lg:gap-base80 gap-base40 lg:flex-row flex-col ",
          "py-base80",
          "2xl:my-base120 lg:my-base100"
        )}
      >
        <div className="lg:w-1/2">
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
            {dataHeader.description}
          </BaseText>
          <BaseText
            tag="p"
            size="S"
            className="text-textColorSecond 2xl:pt-base30 lg:pt-base20 pt-base20"
          >
            {dataHeader.subDescription}
          </BaseText>
          <div className="2xl:py-base30 lg:py-base20 pb-base20 pt-6">
            <LinkSocialNetwork />
          </div>
        </div>
        <ContactForm className="grow w-full" />
      </div>
    </BaseLayoutWraper>
  );
}
export default ContactFormGroup;
