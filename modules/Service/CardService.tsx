import BaseImage from "@/components/BaseImage";
import BaseText from "@/components/BaseText";
import ButtonNavigate from "@/components/ButtonNavigate";
import { IService } from "@/types/service";
import { get } from "lodash-es";
import classNames from "classnames";
import BaseTextButtonNavigate from "@/components/BaseTextButtonNavigate";
import ArrowRightTop from "@/public/icons/ArrowRightTop";
import SliderImage from "@/components/SlideImage";
import { useRouter } from "next/router";
import { ERouter } from "routers";
interface ICardService {
  item: IService;
  showButtonNavigate?: boolean;
  showTextNavigate?: boolean;
  reverseElement?: boolean;
  largeImage?: boolean;
  isMultipleImg?: boolean;
}
export default function CardService({
  item,
  showButtonNavigate = true,
  showTextNavigate = false,
  reverseElement = false,
  largeImage = false,
  isMultipleImg = false,
}: ICardService) {
  const { attributes } = item;
  const router = useRouter();
  return (
    <div
      className={classNames(
        "lg:grid lg:grid-cols-2 2xl:gap-base50 lg:gap-base40",
        {
          "2xl:grid-cols-7": largeImage,
        }
      )}
    >
      <div
        className={classNames(
          "lg:order-last",
          "lg:h-full w-full max-lg:aspect-[3/2] max-sm:aspect-square max-lg:pb-base30",
          {
            "2xl:col-span-4": largeImage,
            "!order-first": reverseElement,
          }
        )}
      >
        {isMultipleImg ? (
          <SliderImage
            reverseElement={reverseElement}
            items={get(attributes, "gallery.data", [])}
          />
        ) : (
          <div className="relative h-full w-full">
            <BaseImage
              src={get(
                attributes,
                "thumbnail.data.attributes.formats.medium.url",
                ""
              )}
              alt=""
              className={classNames("h-full object-cover absolute", {
                "lg:rounded-br-[80px]": reverseElement,
                "lg:rounded-bl-[80px]": !reverseElement,
              })}
            />
          </div>
        )}
      </div>
      <div
        className={classNames({
          "2xl:col-span-3": largeImage,
        })}
      >
        <div className="pb-3 pt-1 flex flex-row items-center">
          <BaseText
            tag="h1"
            className="inline font-semibold text-textColorSecond pr-3"
            size="XM"
          >
            {attributes.title.toUpperCase()}
          </BaseText>
          {showButtonNavigate && (
            <ButtonNavigate
              onClick={() =>
                router.push(ERouter.PORTFOLIO + `?serviceId=${item.attributes.slug}`)
              }
            />
          )}
        </div>
        <BaseText size="S" className="text-textColorSecond line-clamp-4 text-justify">
          {attributes.description}
        </BaseText>
        <div className="2xl:pt-base50 lg:pt-base40 pt-base30">
          <BaseText size="XS" className="font-medium pb-2 text-textColorSecond">
            Điểm nổi bật
          </BaseText>
          <div>
            {attributes.highlight.description.map((item, index) => {
              return (
                <div
                  className="border-solid border rounded-xl border-borderColor gap-3 flex items-center mt-2 2xl:p-base20 lg:p-4 p-3"
                  key={index}
                >
                  {/* <StarFourIcon className="fill-textColorSecond text-textColorSecond !h-6 !w-6" /> */}
                  <BaseImage
                    src="/images/chervon_right_icon_2.png"
                    alt=""
                    className="!h-7 !w-7"
                  />
                  <BaseText
                    size="S"
                    className="text-textColorSecond whitespace-nowrap"
                  >
                    {item.toUpperCase()}
                  </BaseText>
                </div>
              );
            })}
          </div>
        </div>
        {showTextNavigate && (
          <div className="2xl:pt-base50 lg:pt-base40 pt-base30">
            <BaseTextButtonNavigate
              className="font-medium flex items-center py-1 gap-2"
              onClick={() => {
                router.push(ERouter.PORTFOLIO + `?serviceId=${item.attributes.slug}`);
              }}
            >
              <BaseText size="S" tag="span">
                XEM DỰ ÁN
              </BaseText>
              <ArrowRightTop className="h-6 w-6 align-middle" />
            </BaseTextButtonNavigate>
          </div>
        )}
      </div>
    </div>
  );
}
