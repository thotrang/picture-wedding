import ArrowRightTop from "public/icons/ArrowRightTop";
import BaseButton from "./BaseButton";

export default function ButtonNavigate() {
  return (
    <BaseButton
      onClick={() => {}}
      className="px-[50px] py-[18px] rounded-full bg-[#4A2CED] shadow-inner"
    >
      <ArrowRightTop className="w-[30px] h-[30px]" />
    </BaseButton>
  );
}
