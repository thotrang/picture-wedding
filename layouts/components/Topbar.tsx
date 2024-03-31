import BaseButton from "@/components/BaseButton";
import BaseText from "@/components/BaseText";
import classNames from "classnames";
import { useState } from "react";

export default function Topbar() {
  const itemRoutes = ["Trang chủ", "Về chúng tôi", "Portfolio", "Dịch vụ"];
  const [selected, setSelected] = useState(0);
  return (
    <div className="h-[120px] w-full bg-background flex justify-center items-end border-b-1 relative border-solid border-borderColor border-x-0 border-t-0 border-b">
      <div className="h-[90px] w-[660px] grid grid-cols-4 rounded-t-xl border-x border-t border-b-0 border-solid border-borderColor border-collapse overflow-hidden">
        {itemRoutes.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className={classNames(
                "h-full border-x border-y-0 border-l-0 border-solid border-borderColor flex justify-center items-center",
                {
                  "border-r-0": index === itemRoutes.length - 1,
                  "bg-secondary": selected === index,
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
      <div className="absolute right-[120px] h-full flex justify-center items-center">
        <BaseButton
          onClick={() => {
            console.log("lien he");
          }}
        >
          Liên hệ
        </BaseButton>
      </div>
    </div>
  );
}
