import BaseSlogan from "@/components/BaseSlogan";
import BaseText from "@/components/BaseText";
import LinkSocialNetwork from "@/modules/LinkSocialNetwork";

export default function Footer() {
  const routers: { [key: string]: string[] } = {
    Home: ["ROUTER1", "ROUTER1", "ROUTER1", "ROUTER1"],
    Home1: ["ROUTER1", "ROUTER1", "ROUTER1", "ROUTER1"],
    Home2: ["ROUTER1", "ROUTER1", "ROUTER1", "ROUTER1"],
    Home3: ["ROUTER1", "ROUTER1", "ROUTER1", "ROUTER1"],
  };
  return (
    <div className="max-w-screen-3xl">
      <div></div>
      <div className=" max-w-screen-2xl mx-auto flex border-solid border-x border-y-0 border-borderColor">
        <div className="px-[80px] py-[100px]  border-solid border-l-0 border-r border-y-0 border-borderColor">
          <BaseText size="XS" className="text-textColorSecond pb-[60px]">
            A more meaningful home for photography
          </BaseText>
          <BaseSlogan />
        </div>
        <div className="px-[80px] py-[100px] flex grow justify-between">
          {Object.keys(routers).map((key) => {
            const items = routers[key] ?? [];
            return (
              <div key={key}>
                <BaseText size="XS" className="text-textColorSecond pb-6">
                  {key}
                </BaseText>
                {items.map((item, index) => {
                  return (
                    <BaseText size="XS" className="underline pb-3" key={index}>
                      {item}
                    </BaseText>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="max-w-screen-3xl  border-solid border-x-0 border-b-0 border-t border-borderColor">
        <div className="flex justify-between items-center max-w-screen-2xl mx-auto py-[10px]">
          <span className="flex items-center">
            <BaseText className="text-textColorSecond" tag="span">
              Terms & Conditions
            </BaseText>
            <div className="h-5 mx-2 w-[2px] bg-buttonColor inline-block"></div>
            <BaseText className="text-textColorSecond" tag="span">
              Privacy Policy
            </BaseText>
          </span>
          <div>
            <LinkSocialNetwork />
          </div>
          <div>
            <BaseText className="text-textColorSecond">
              © 2024 Damien Braun Photography. All rights reserved.
            </BaseText>
          </div>
        </div>
      </div>
    </div>
  );
}
