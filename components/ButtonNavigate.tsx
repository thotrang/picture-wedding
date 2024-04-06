import ArrowRightTop from "public/icons/ArrowRightTop";
import BaseButton from "./BaseButton";
import BaseWraper from "./BaseWraper";

export default function ButtonNavigate() {
  return (
    <BaseWraper
      gutters={[
        ["height", 66],
        ["width", 130],
      ]}
      className="inline-block"
    >
      <BaseButton
        onClick={() => {}}
        className="h-full w-full !rounded-full !bg-buttonNavigate shadow-inner flex justify-center items-center"
      >
        <ArrowRightTop className="w-[30px] h-[30px]" />
      </BaseButton>
    </BaseWraper>
  );
}
