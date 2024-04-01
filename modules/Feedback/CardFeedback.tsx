import BaseText from "@/components/BaseText";
import LinkSocialNetwork from "../LinkSocialNetwork";
import BaseRating from "@/components/BaseRating";

export default function CardFeedback() {
  return (
    <div className="border border-solid border-borderColor rounded-xl 2xl:p-10 md:p-8 p-5">
      <div className="flex justify-between items-center pb-6">
        <div>
          <BaseText size="XS" className="">Emily Johnson</BaseText>
          <BaseText size="S" className=" text-textColorSecond">
            USA, California
          </BaseText>
        </div>
        <LinkSocialNetwork />
      </div>
      <div className="pb-6">
        <BaseRating />
      </div>
      <BaseText size="XS" className="">
        Damien's photography doesn't just capture moments; it captures emotions.
        Hes work is simply mesmerizing.
      </BaseText>
    </div>
  );
}
