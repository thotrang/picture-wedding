import BaseImage from "@/components/BaseImage";
import BaseText from "@/components/BaseText";
import BaseWraper from "@/components/BaseWraper";
import ButtonNavigate from "@/components/ButtonNavigate";
import StarEightIcon from "public/icons/StarEightIcon";

export default function CardEvent() {
  const highlights = [
    "Coverage for weddings, parties, corporate functions, and more.",
    "Coverage for weddings, parties, corporate functions, and more.",
    "Coverage for weddings, parties, corporate functions, and more.",
    "Coverage for weddings, parties, corporate functions, and more.",
  ];
  return (
    <BaseWraper
      className="grid lg:grid-cols-2"
      gutters={[["gap", 50]]}
      percentageShrink={[0.8, 0.6]}
    >
      <div>
        <div className="pb-3 pt-1">
          <BaseText
            tag="h1"
            className="inline font-semibold text-textColorSecond pr-3"
            size="XM"
          >
            EVENTS
          </BaseText>
          <ButtonNavigate />
        </div>
        <BaseText size="S" className="text-textColorSecond ">
          Our event photography service is dedicated to capturing the magic of
          your special occasions. Whether it's a wedding, corporate event, or
          milestone celebration, we're there to document every heartfelt moment.
          We blend into the background, ensuring natural and candid shots that
          reflect the emotions of the day.
        </BaseText>
        <BaseWraper gutters={[["padding", 50, "top"]]}>
          <BaseText size="XS" className="font-medium pb-2">
            Service Highlights
          </BaseText>
          <div>
            {highlights.map((item, index) => {
              return (
                <BaseWraper
                  className="border-solid border rounded-xl border-borderColor gap-3 flex items-center mt-2"
                  key={index}
                  gutters={[["padding", 20]]}
                >
                  <StarEightIcon className="fill-textColorSecond" />
                  <BaseText size="S" className="text-textColorSecond ">
                    {item}
                  </BaseText>
                </BaseWraper>
              );
            })}
          </div>
        </BaseWraper>
      </div>
      <div className="max-lg:order-first">
        <BaseImage
          src="/images/a70682303511006ba1a401c7848021b1.png"
          alt=""
          className="h-full"
        />
      </div>
    </BaseWraper>
  );
}
