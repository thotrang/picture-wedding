import BaseImage from "@/components/BaseImage";
import BaseText from "@/components/BaseText";
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
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <div className="pb-5">
          <BaseText tag="h1" className="inline text-[44px] font-semibold text-textColorSecond pr-3">
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
        <div className="pt-[50px]">
          <BaseText size="XS" className="font-medium pb-2">Service Highlights</BaseText>
          <div>
            {highlights.map((item, index) => {
              return (
                <div
                  className="border-solid border rounded-xl border-borderColor p-5 gap-3 flex items-center mt-2"
                  key={index}
                >
                  <StarEightIcon className="fill-textColorSecond" />
                  <BaseText size="S" className="text-textColorSecond ">{item}</BaseText>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <BaseImage src="/images/a70682303511006ba1a401c7848021b1.png" alt="" className="h-full" />
      </div>
    </div>
  );
}
