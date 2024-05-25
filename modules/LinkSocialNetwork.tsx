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
          onClick={() => {
            window.open('https://www.facebook.com/goldstarmedia.vn')
          }}
          className="2xl:!h-[50px] lg:!h-[40px] !h-[30px] aspect-square flex justify-center items-center !p-0 !rounded-full"
        >
          <FacebookIcon className="lg:h-7 lg:w-7 h-5 w-5" />
        </BaseButton>
        <BaseButton
          onClick={() => {
            window.open('https://www.youtube.com/@goldstarmediaHN')
          }}
          className="2xl:!h-[50px] lg:!h-[40px] !h-[30px] aspect-square flex justify-center items-center !p-0 !rounded-full"
        >
          <Youtube className="lg:h-7 lg:w-7 h-5 w-5" />
        </BaseButton>
      </div>
    </div>
  );
}
