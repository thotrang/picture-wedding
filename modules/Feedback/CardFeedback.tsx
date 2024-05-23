import BaseText from "@/components/BaseText";
import LinkSocialNetwork from "../LinkSocialNetwork";
import BaseRating from "@/components/BaseRating";

export default function CardFeedback() {
  return (
    <div
      className="border border-solid border-borderColor rounded-xl flex flex-col"
      // gutters={[
      //   ["padding", 40],
      //   ["gap", 24],
      // ]}
    >
      <div className="flex justify-between items-center">
        <div>
          <BaseText size="XS" className="">
            Emily Johnson
          </BaseText>
          <BaseText size="S" className=" text-textColorSecond">
            USA, California
          </BaseText>
        </div>
        <LinkSocialNetwork />
      </div>
      <BaseRating />
      <BaseText size="XS" className="">
        Damien's photography doesn't just capture moments; it captures emotions.
        Hes work is simply mesmerizing.
      </BaseText>
    </div>
  );
}
