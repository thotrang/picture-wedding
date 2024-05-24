import ArrowRightTop from "public/icons/ArrowRightTop";
import BaseButton from "./BaseButton";
import { useRouter } from "next/router";
import { ERouter } from "routers";

export default function ButtonNavigate() {
  const router = useRouter();
  return (
    <div className="inline-block">
      <BaseButton
        onClick={() => {router.push(ERouter.SERVICE)}}
        className="shadow-inner shadow-white/10 2xl:h-[66px] 2xL:w-[130px] lg:h-[56px] lg:w-[104px] h-[48px] w-[80px] !rounded-full !bg-buttonNavigate flex justify-center items-center"
      >
        <ArrowRightTop className="w-8 h-8" />
      </BaseButton>
    </div>
  );
}
