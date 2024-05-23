import BaseImage from "@/components/BaseImage";
import BaseText from "@/components/BaseText";
import ButtonNavigate from "@/components/ButtonNavigate";
import { IService } from "@/types/service";
import StarEightIcon from "public/icons/StarEightIcon";
import { get } from "lodash-es";
import classNames from "classnames";
import BaseTextButtonNavigate from "@/components/BaseTextButtonNavigate";
import ArrowRightTop from "@/public/icons/ArrowRightTop";
interface ICardService {
  item: IService;
  showButtonNavigate?: boolean;
  showTextNavigate?: boolean;
  reverseElement?: boolean;
  largeImage?: boolean;
}
export default function CardService({
  item,
  showButtonNavigate = true,
  showTextNavigate = false,
  reverseElement = false,
  largeImage = false,
}: ICardService) {
  const { attributes } = item;

  return (
    <div
      className={classNames(
        "grid lg:grid-cols-2 2xl:gap-base50 lg:gap-base40 gap-base30",
        {
          "2xl:grid-cols-7": largeImage,
        }
      )}
    >
      <div
        className={classNames({
          "order-last": reverseElement,
          "2xl:col-span-3": largeImage,
        })}
      >
        <div className="pb-3 pt-1">
          <BaseText
            tag="h1"
            className="inline font-semibold text-textColorSecond pr-3"
            size="XM"
          >
            {attributes.title}
          </BaseText>
          {showButtonNavigate && <ButtonNavigate />}
        </div>
        <BaseText size="S" className="text-textColorSecond line-clamp-4">
          {attributes.description}
        </BaseText>
        <div className="2xl:pt-base50 lg:pt-base40 pt-base30">
          <BaseText size="XS" className="font-medium pb-2">
            Service Highlights
          </BaseText>
          <div>
            {attributes.highlight.description.map((item, index) => {
              return (
                <div
                  className="border-solid border rounded-xl border-borderColor gap-3 flex items-center mt-2 2xl:p-base20 lg:p-4 p-3"
                  key={index}
                >
                  <StarEightIcon className="fill-textColorSecond" />
                  <BaseText size="S" className="text-textColorSecond ">
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
              onClick={() => {}}
            >
              <BaseText size="S" tag="span">
                XEM DỰ ÁN
              </BaseText>
              <ArrowRightTop className="h-6 w-6 align-middle" />
            </BaseTextButtonNavigate>
          </div>
        )}
      </div>
      <div
        className={classNames("max-lg:order-first", {
          "2xl:col-span-4 2xl:h-[80%]": largeImage,
        })}
      >
        <BaseImage
          src={get(
            attributes,
            "thumbnail.data.attributes.formats.medium.url",
            ""
          )}
          alt=""
          className={classNames("h-full object-cover", {
            "lg:rounded-br-[80px]": reverseElement,
            "lg:rounded-bl-[80px]": !reverseElement,
          })}
        />
        <div className="py-base40"></div>
      </div>
    </div>
  );
}
