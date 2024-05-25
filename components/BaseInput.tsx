import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import BaseText from "./BaseText";
import classNames from "classnames";

interface IBaseInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  subTitle: string;
  register?: any;
}
export default function BaseInput({
  subTitle,
  placeholder,
  value,
  onChange,
  name,
  register,
}: IBaseInput) {
  return (
    <div className="h-full w-full">
      <BaseText tag="span" size="S">
        {subTitle}
      </BaseText>
      <input
        className={classNames(
          "py-3 bg-transparent w-full mt-base10",
          "border-0 border-b border-solid border-borderColor rounded-lg",
          "text-textColor 2xl:text-m lg:text-xs text-s",
          // "border-0 focus:!border-b border-solid focus:border-white"
        )}
        value={value}
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        {...register}
      />
    </div>
  );
}
