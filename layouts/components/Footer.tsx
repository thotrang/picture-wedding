import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BaseSlogan from "@/components/BaseSlogan";
import BaseText from "@/components/BaseText";
import BaseTextButtonNavigate from "@/components/BaseTextButtonNavigate";
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
      <BaseLayoutWraper>
        <div className="flex max-lg:flex-col border-solid border-x border-y-0 border-borderColor">
          <div className="2xl:px-20 2xl:py-24 lg:px-14 lg:py-20 px-5 py-10 border-solid border-l-0 border-r border-y-0 max-lg:border-b border-borderColor">
            <BaseText
              size="XS"
              className="text-textColorSecond 2xl:pb-16 lg:pb-12 pb-5"
            >
              A more meaningful home for photography
            </BaseText>
            <BaseSlogan />
          </div>
          <div className="2xl:px-20 2xl:py-24 lg:px-14 lg:py-20 px-5 py-10 grid grid-cols-4 max-sm:grid-cols-2 grow justify-between">
            {Object.keys(routers).map((key) => {
              const items = routers[key] ?? [];
              return (
                <div key={key}>
                  <BaseText size="XS" className="text-textColorSecond mb-6 px-1">
                    {key}
                  </BaseText>
                  {items.map((item, index) => {
                    return (
                      <div key={index}>
                        <BaseTextButtonNavigate
                          size="XS"
                          className="mb-3"
                          onClick={() => {}}
                        >
                          {item}
                        </BaseTextButtonNavigate>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </BaseLayoutWraper>
      <div className="max-w-screen-3xl border-solid border-x-0 border-b-0 border-t border-borderColor">
        <BaseLayoutWraper className="relative">
          <div className="flex justify-between items-center py-3 max-lg:flex-col">
            <span className="flex items-center max-lg:pb-2">
              <BaseText size="S" className="text-textColorSecond" tag="span">
                Terms & Conditions
              </BaseText>
              <div className="h-6 mx-2 w-[2px] bg-buttonColor inline-block"></div>
              <BaseText size="S" className="text-textColorSecond" tag="span">
                Privacy Policy
              </BaseText>
            </span>
            <div className="max-lg:hidden">
              <LinkSocialNetwork />
            </div>
            <BaseText size="S" className="text-textColorSecond max-lg:pb-2">
              © 2024 Damien Braun Photography. All rights reserved.
            </BaseText>
            <div className="lg:hidden">
              <LinkSocialNetwork />
            </div>
          </div>
        </BaseLayoutWraper>
      </div>
    </div>
  );
}
