import BaseText from "@/components/BaseText";
import classNames from "classnames";
import BaseInput from "@/components/BaseInput";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "stores/store";
import { useState } from "react";
import { motion } from "framer-motion";
import { clone } from "lodash-es";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import BaseButton from "@/components/BaseButton";
import ArrowRightTop from "@/public/icons/ArrowRightTop";
import BaseImage from "@/components/BaseImage";
interface IContactForm {
  className?: string;
  handleAfterSubmit?: () => void;
}
export default function ContactForm({
  className,
  handleAfterSubmit = () => {},
}: IContactForm) {
  const { services } = useSelector((s: RootState) => s.data_store);
  const { data_store } = useDispatch<Dispatch>();
  const formMethods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = formMethods;

  const [serviceSelected, setServiceSelected] = useState<{
    [key: number]: string;
  }>({});

  const onSubmit = (data: any) => {
    const value = {
      ...data,
      service: Object.values(serviceSelected).join(", "),
    };
    data_store.submitContact({ data: value });
    handleAfterSubmit();
    reset();
    toast.success("Liên hệ thành công!", {
      hideProgressBar: true,
      autoClose: 5000,
      theme: "colored",
      closeOnClick: false,
    });
  };
  return (
    <form
      className={classNames(
        "grid md:grid-cols-2 grid-cols-1 2xl:gap-base50 lg:gap-base40 gap-base30",
        className
      )}
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
        />
        {errors.name && (
          <BaseText className="absolute !text-error">
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
        />
        {errors.email && (
          <BaseText className="absolute !text-error">
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
        />
        {errors.phone && (
          <BaseText className="absolute !text-error">
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
                  <BaseImage
                    src="/images/chervon_right_icon_2.png"
                    alt=""
                    className="!h-7 !w-7"
                  />
                  <BaseText
                    size="S"
                    className="text-textColorSecond whitespace-nowrap"
                  >
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
        />
      </div>
      <div>
        <BaseButton
          type="submit"
          onClick={() => {}}
          className="flex items-center gap-3"
        >
          <BaseText tag="span" size="XM" className="lg:!text-l !text-xm">
            GỬI THÔNG TIN
          </BaseText>
          <ArrowRightTop className="2xl:w-9 2xl:h-9 lg:w-7 lg:h-7" />
        </BaseButton>
      </div>
    </form>
  );
}
