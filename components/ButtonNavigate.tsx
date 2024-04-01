import ArrowRightTop from "public/icons/ArrowRightTop";
import BaseButton from "./BaseButton";

export default function ButtonNavigate() {
  return (
    <BaseButton
      onClick={() => {}}
      className="2xl:px-12 2xl:py-4 lg:py-3 py-2 lg:px-10 px-8 !rounded-full !bg-buttonNavigate shadow-inner"
    >
      <ArrowRightTop className="w-[30px] h-[30px] pt-1" />
    </BaseButton>
  );
}
