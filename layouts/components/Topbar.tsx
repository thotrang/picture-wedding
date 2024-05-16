import BaseButton from "@/components/BaseButton";
import BaseIconButton from "@/components/BaseIconButton";
import BaseImage from "@/components/BaseImage";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BaseTextButton from "@/components/BaseTextButton";
import classNames from "classnames";
import Menu from "public/icons/Menu";
import { useState } from "react";

export default function Topbar() {
  const itemRoutes = ["Trang chủ", "Về chúng tôi", "Portfolio", "Dịch vụ"];
  const [selected, setSelected] = useState(0);
  return (
    <div className="bg-background border-solid border-borderColor border-x-0 border-t-0 border-b px-4">
      <BaseLayoutWraper
        className="flex justify-center items-end relative  border-solid border-borderColor border-x border-y-0 px-4 2xl:h-topbar-l lg:h-topbar-m h-topbar-s"
      >
        <div className="absolute h-full left-0 items-center flex mx-4">
          <BaseImage src="/images/Logo.png" alt="" className="2xl:h-logo-l lg:h-logo-m !h-logo-s w-auto !rounded-none" />
        </div>
        <div className="hidden h-3/4 w-[660px] lg:grid grid-cols-4 rounded-t-xl border-x border-t border-b-0 border-solid border-borderColor border-collapse overflow-hidden">
          {itemRoutes.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className={classNames(
                  "h-full border-x border-y-0 border-l-0 border-solid border-borderColor flex justify-center items-center",
                  {
                    "border-r-0": index === itemRoutes.length - 1,
                    "bg-buttonColor": selected === index,
                  }
                )}
              >
                <BaseTextButton className="font-medium" size="S">
                  {item}
                </BaseTextButton>
              </div>
            );
          })}
        </div>
        <div className="max-lg:hidden absolute right-0 mx-4 h-full flex justify-center items-center">
          <BaseButton
            onClick={() => {
              console.log("lien he");
            }}
          >
            Liên hệ
          </BaseButton>
        </div>
        <div className="absolute right-0 bottom-0 lg:hidden border border-solid border-r-0 border-b-0 border-borderColor h-3/4 aspect-square rounded-tl-3xl flex justify-center items-center">
          <BaseIconButton className="!bg-background" onClick={() => {}}>
            <Menu className="fill-white text-white w-7 h-7 " />
          </BaseIconButton>
        </div>
      </BaseLayoutWraper>
    </div>
  );
}
