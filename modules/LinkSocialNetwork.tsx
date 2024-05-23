import BaseButton from "@/components/BaseButton";
import Youtube from "@/public/icons/Youtube";
import classNames from "classnames";
import FacebookIcon from "public/icons/FacebookIcon";

export default function LinkSocialNetwork() {
  return (
    <div className="inline-block">
      <div
        className={classNames(
          "border-solid border-borderColor border rounded-full bg-backgroundSecond p-2 flex gap-2"
        )}
      >
        <BaseButton
          onClick={() => {}}
          className="2xl:!h-[50px] lg:!h-[40px] aspect-square flex justify-center items-center !p-0 !rounded-full"
        >
          <FacebookIcon className="h-7 w-7" />
        </BaseButton>
        <BaseButton
          onClick={() => {}}
          className="2xl:!h-[50px] lg:!h-[40px] aspect-square flex justify-center items-center !p-0 !rounded-full"
        >
          <Youtube className="h-7 w-7" />
        </BaseButton>
      </div>
    </div>
  );
}
