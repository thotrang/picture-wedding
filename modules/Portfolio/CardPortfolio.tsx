import BaseImage from "@/components/BaseImage";
import BaseTag from "@/components/BaseTag";
import BaseText from "@/components/BaseText";
import BaseTextButtonNavigate from "@/components/BaseTextButtonNavigate";
import { IPortfolio } from "@/types/portfolio";
import classNames from "classnames";
import { get } from "lodash-es";
import { useRouter } from "next/router";
import ArrowRightTop from "public/icons/ArrowRightTop";
import { ERouter } from "routers";
interface ICardPortfolio {
  item: IPortfolio;
}
export default function CardPortfolio({ item }: ICardPortfolio) {
  const { attributes, id } = item;
  const router = useRouter();
  return (
    <div
      className={classNames(
        "grid 2xl:grid-cols-3 grid-cols-1 2xl:gap-base50 lg:gap-base40 gap-base20 lg:grid-cols-5",
        "2xl:p-base50 lg:p-base40 py-base20 border border-solid border-borderColor max-lg:border-0 rounded-xl"
      )}
    >
      <div className="2xl:col-span-1 lg:col-span-2 col-span-1 relative">
        <div className="lg:absolute h-full w-full rounded-xl">
          <BaseImage
            className="aspect-square h-full w-full object-cover"
            alt=""
            src={get(attributes, "thumbnail.data.attributes.url", "")}
          ></BaseImage>
        </div>
      </div>
      <div className="2xl:col-span-2 lg:col-span-3 col-span-1">
        <div className="flex flex-row gap-base20 w-full max-sm:flex-col">
          <div className="w-full">
            <BaseText className="font-semibold pb-3" size="M" tag="h2">
              {attributes.title}
            </BaseText>
            <BaseText
              className="text-textColorSecond xl:line-clamp-4 line-clamp-2"
              size="S"
              tag="span"
            >
              {attributes.description}
            </BaseText>
          </div>
          <div className="xl:w-1/3 w-1/2 max-sm:text-left text-right">
            <BaseTextButtonNavigate
              className="font-medium flex items-center py-1 gap-2"
              onClick={() => router.push(ERouter.PORTFOLIO_DETAIL + "/" + id)}
            >
              <BaseText size="S" tag="span">
                XEM CHI TIẾT
              </BaseText>
              <ArrowRightTop className="h-6 w-6 align-middle" />
            </BaseTextButtonNavigate>
          </div>
        </div>
        <div
          className={classNames(
            "2xl:p-base50 lg:p-base40 p-base20 border border-solid border-borderColor rounded-[20px] 2xl:mt-base50 lg:mt-base40 mt-base20",
            "grid md:grid-cols-2 grid-cols-1 2xl:gap-base40 lg:gap-base40 gap-base20 relative overflow-hidden"
          )}
        >
          <div className="absolute h-full w-full z-[-10] bg-gradient-to-tr from-[#808080]/5 via-background to-white/5"></div>

          <div className="flex flex-col gap-1">
            <BaseText tag="span" className="text-textColorSecond">
              Khách hàng
            </BaseText>
            <BaseText tag="span">VNSO</BaseText>
          </div>
          <div className="flex flex-col gap-1">
            <BaseText tag="span" className="text-textColorSecond">
              Năm
            </BaseText>
            <BaseText tag="span">2023</BaseText>
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <BaseText tag="span" className="text-textColorSecond">
              Dịch vụ
            </BaseText>
            <div className="">
              {(attributes.services?.data ?? []).map((item) => {
                return (
                  <div className="inline-block mr-3 mb-3">
                    <BaseTag className="line-clamp-1" classWrapper="max-lg:!p-0 max-lg:!border-0" key={item.id}>
                      {item.attributes.title}
                    </BaseTag>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
