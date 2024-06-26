import BaseImage from "@/components/BaseImage";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BaseSlogan from "@/components/BaseSlogan";
import BaseText from "@/components/BaseText";
import BaseTextButtonNavigate from "@/components/BaseTextButtonNavigate";
import LinkSocialNetwork from "@/modules/LinkSocialNetwork";
import { IService } from "@/types/service";
import classNames from "classnames";
import { motion } from "framer-motion";
import { get } from "lodash-es";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ERouter } from "routers";
import { RootState } from "stores/store";
function ListItemFooter({ items }: { items?: any[] }) {
  const router = useRouter();

  return (
    <div className="h-full w-full">
      {(items ?? []).map((item, index) => {
        if (index === 0)
          return (
            <BaseTextButtonNavigate
              key={index}
              size="XS"
              className="text-textColorSecond mb-6 whitespace-nowrap"
              onClick={() => router.push(item.link)}
              classButton="max-md:!p-0"
            >
              {item.title}
            </BaseTextButtonNavigate>
          );
        return (
          <div key={index}>
            <BaseTextButtonNavigate
              size="XS"
              className="mb-3 text-left max-md:text-[12px] whitespace-nowrap"
              classButton="max-md:!p-0"
              onClick={() => item.link && router.push(item.link)}
            >
              {item.title.toUpperCase()}
            </BaseTextButtonNavigate>
          </div>
        );
      })}
    </div>
  );
}
export default function Footer() {
  const { services } = useSelector((s: RootState) => s.data_store);

  const routers: { [key: string]: any } = useMemo(() => {
    return {
      0: [
        { title: "TRANG CHỦ", link: ERouter.HOME },
        { title: "VỀ CHÚNG TÔI", link: ERouter.ABOUT_US },
        { title: "PORTFOLIO", link: ERouter.PORTFOLIO },
      ],
      1: [
        { title: "DỊCH VỤ", link: ERouter.SERVICE },
        ...(services ?? []).map((item: IService) => {
          return {
            title: get(item, "attributes.title", ""),
            link: ERouter.PORTFOLIO + `?serviceId=${item.attributes.slug}`,
          };
        }),
      ],
    };
  }, [services]);
  const router = useRouter();

  return (
    <div className="max-w-screen-3xl border-solid border-x-0 border-b-0 border-t border-borderColor">
      <BaseLayoutWraper>
        <div className="flex max-md:flex-col border-solid border-x border-y-0 border-borderColor max-md:!border-0">
          <motion.div className="border-solid border-l-0 border-r border-y-0 max-lg:border-b border-borderColor 2xl:py-base90 2xl:px-base80 lg:py-base80 lg:px-base60 py-base40 md:px-base20 max-md:border-r-0">
            <motion.div
              whileTap={{ scale: 0.95, opacity: 0.3 }}
              onClick={() => router.push(ERouter.HOME)}
            >
              <BaseImage
                src="/images/Logo.png"
                alt=""
                className="2xl:h-[80px] lg:h-[60px] h-[60px] !w-auto !rounded-none 2xl:pb-base40 lg:pb-base30 pb-base20"
              />
            </motion.div>
            <BaseSlogan />
          </motion.div>
          <div
            className={classNames(
              "grid grid-cols-3 grow justify-between max-md:gap-2",
              "2xl:py-base90 2xl:px-base80 lg:py-base80 lg:px-base60 py-base40 md:px-base20"
            )}
          >
            <div className="col-span-1">
              <ListItemFooter items={routers[0]} />
            </div>
            <div className="col-span-2">
              <ListItemFooter items={routers[1]} />
            </div>
          </div>
        </div>
      </BaseLayoutWraper>
      <div className="max-w-screen-3xl border-solid border-x-0 border-b-0 border-t border-borderColor">
        <BaseLayoutWraper>
          <div className="flex justify-between items-center py-3 max-lg:flex-col">
            <BaseText size="S" className="text-textColorSecond max-lg:pb-2 min-[380px]:whitespace-nowrap">
              © 2024 GoldStar Media Photography. All rights reserved.
            </BaseText>
            <div className="">
              <LinkSocialNetwork />
            </div>
          </div>
        </BaseLayoutWraper>
      </div>
    </div>
  );
}
