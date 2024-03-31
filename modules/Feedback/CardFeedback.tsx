import BaseText from "@/components/BaseText";
import LinkSocialNetwork from "../LinkSocialNetwork";
import BaseRating from "@/components/BaseRating";

export default function CardFeedback() {
  return (
    <div className="border border-solid border-borderColor rounded-xl p-[30px]">
      <div className="flex justify-between items-center pb-6">
        <div>
          <BaseText className="text-[20px]">Emily Johnson</BaseText>
          <BaseText className="text-[18px] text-textColorSecond">
            USA, California
          </BaseText>
        </div>
        <LinkSocialNetwork />
      </div>
      <div className="pb-6">
        <BaseRating />
      </div>
      <BaseText className="text-[20px]">
        Damien's photography doesn't just capture moments; it captures emotions.
        Hes work is simply mesmerizing.
      </BaseText>
    </div>
  );
}
