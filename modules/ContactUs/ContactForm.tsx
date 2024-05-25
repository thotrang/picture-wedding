import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BaseText from "@/components/BaseText";
import classNames from "classnames";
import LinkSocialNetwork from "../LinkSocialNetwork";
import BaseInput from "@/components/BaseInput";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "stores/store";
import StarEightIcon from "@/public/icons/StarEightIcon";
import ButtonNavigate from "@/components/ButtonNavigate";
import { useState } from "react";
import { motion } from "framer-motion";
import { clone } from "lodash-es";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function ContactForm() {
  const { services } = useSelector((s: RootState) => s.data_store);
  const { data_store } = useDispatch<Dispatch>();
  const data = {
    description:
      "Gửi cho chúng tôi thông tin để nhận báo giá chi tiết dịch vụ mà bạn quan tâm, chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.",
    subDescription: "Chúng tôi cam kết bảo mật thông tin của bạn.",
  };
  const formMethods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = formMethods;

  const [serviceSelected, setServiceSelected] = useState<{
    [key: number]: string;
  }>({});
  const [formData, setFormData] = useState<{ [key: number]: string }>({});
  const handleData = (data: any, type: string) => {
    setFormData({
      ...formData,
      [type]: data,
    });
  };

  const onSubmit = () => {
    const value = {
      ...formData,
      service: Object.values(serviceSelected).join(", "),
    };
    data_store.submitContact({ data: value });
    reset()
    toast.success("Liên hệ thành công!", {
      hideProgressBar: true,
      autoClose: 5000,
      theme: "colored",
      closeOnClick: false,
    });
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
        <form
          className="grow grid md:grid-cols-2 grid-cols-1 w-full 2xl:gap-base50 lg:gap-base40 gap-base30"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="md:col-span-2 relative">
            <BaseInput
              id="name"
              register={{
                ...register("name", {
                  required: "Vui lòng nhập tên của bạn",
                }),
              }}
              subTitle="Tên bạn là gì?"
              placeholder="NHẬP TÊN CỦA BẠN"
              onChange={(val) => {
                handleData(val.target.value, "name");
              }}
            />
            {errors.name && (
              <BaseText className="absolute text-error">
                {(errors.name as any).message}
              </BaseText>
            )}
          </div>
          <div className="relative">
            <BaseInput
              id="email"
              register={{
                ...register("email", {
                  required: "Vui lòng nhập email của bạn",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Định dạng email không chính xác",
                  },
                }),
              }}
              subTitle="Địa chỉ email"
              placeholder="NHẬP ĐỊA CHỈ EMAIL"
              onChange={(val) => {
                handleData(val.target.value, "email");
              }}
            />
            {errors.email && (
              <BaseText className="absolute text-error">
                {(errors.email as any).message}
              </BaseText>
            )}
          </div>
          <div className="relative">
            <BaseInput
              id="phone"
              register={{
                ...register("phone", {
                  required: "Vui lòng nhập số điện thoại của bạn",
                }),
              }}
              subTitle="Số điện thoại của bạn"
              placeholder="NHẬP SỐ ĐIỆN THOẠI"
              onChange={(val) => {
                handleData(val.target.value, "phone");
              }}
            />
            {errors.phone && (
              <BaseText className="absolute text-error">
                {(errors.phone as any).message}
              </BaseText>
            )}
          </div>
          <div className="md:col-span-2">
            <BaseText tag="span" size="S">
              Dịch vụ bạn quan tâm
            </BaseText>
            <div className="grid gap-base10 2xl:grid-cols-3 md:grid-cols-2 w-full mt-base10">
              {services?.map((item, index) => {
                return (
                  <div key={index}>
                    <motion.div
                      className={classNames(
                        "border-solid border rounded-xl border-borderColor gap-3 flex items-center 2xl:p-base20 lg:p-4 p-3 cursor-pointer",
                        {
                          "shadow-action": !!serviceSelected[item.id],
                        }
                      )}
                      key={index}
                      whileTap={{ scale: 0.95, opacity: 0.3 }}
                      onClick={() => {
                        if (!serviceSelected[item.id]) {
                          setServiceSelected({
                            ...serviceSelected,
                            [item.id]: item.attributes.title,
                          });
                        } else {
                          const selected = clone(serviceSelected);
                          delete selected[item.id];
                          setServiceSelected(selected);
                        }
                      }}
                    >
                      <StarEightIcon className="fill-textColorSecond" />
                      <BaseText size="S" className="text-textColorSecond ">
                        {item.attributes.title.toUpperCase()}
                      </BaseText>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="md:col-span-2">
            <BaseInput
              id="description"
              register={{ ...register("description") }}
              subTitle="Chia sẻ với chúng tôi mong muốn của bạn"
              placeholder="NHẬP NỘI DUNG TIN NHẮN"
              onChange={(val) => {
                handleData(val.target.value, "description");
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            <BaseText tag="span" size="XM">
              GỬI THÔNG TIN
            </BaseText>
            <ButtonNavigate type="submit" onClick={() => {}}></ButtonNavigate>
          </div>
        </form>
      </div>
    </BaseLayoutWraper>
  );
}
