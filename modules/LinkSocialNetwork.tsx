import BaseIconButton from "@/components/BaseIconButton";
import classNames from "classnames";
import FacebookIcon from "public/icons/FacebookIcon";
import InstagramIcon from "public/icons/InsagramIcon";
import Twitter from "public/icons/Twitter";

export default function LinkSocialNetwork() {
  return (
    <div className="inline-block">
      <div
        className={classNames(
          "border-solid border-borderColor border rounded-full bg-backgroundSecond flex gap-2 p-2"
        )}
      >
        <BaseIconButton onClick={() => {}} className="">
          <FacebookIcon className="h-7 w-7" />
        </BaseIconButton>
        <BaseIconButton onClick={() => {}} className="">
          <Twitter className="h-7 w-7" />
        </BaseIconButton>
        <BaseIconButton onClick={() => {}} className="">
          <InstagramIcon className="h-7 w-7" />
        </BaseIconButton>
      </div>
    </div>
  );
}
