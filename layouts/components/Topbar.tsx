import BaseButton from "@/components/BaseButton";
import BaseIconButton from "@/components/BaseIconButton";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BaseText from "@/components/BaseText";
import classNames from "classnames";
import Menu from "public/icons/Menu";
import { useState } from "react";

export default function Topbar() {
  const itemRoutes = ["Trang chủ", "Về chúng tôi", "Portfolio", "Dịch vụ"];
  const [selected, setSelected] = useState(0);
  return (
    <div className="bg-background border-solid border-borderColor border-x-0 border-t-0 border-b px-4">
      <BaseLayoutWraper className="2xl:h-[120px] h-[90px] flex justify-center items-end relative  border-solid border-borderColor border-x border-y-0 px-4">
        <div className="max-lg:hidden h-3/4 w-[660px] grid grid-cols-4 rounded-t-xl border-x border-t border-b-0 border-solid border-borderColor border-collapse overflow-hidden">
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
                <BaseText className="font-medium" size="S">
                  {item}
                </BaseText>
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
