import BaseIconButton from "@/components/BaseIconButton";
import FacebookIcon from "public/icons/FacebookIcon";
import InstagramIcon from "public/icons/InsagramIcon";
import Twitter from "public/icons/Twitter";

export default function LinkSocialNetwork() {
  return (
    <div className="inline-block">
      <div className="border-solid border-borderColor border-[1px] rounded-full p-1 flex gap-2">
        <BaseIconButton className="!h-12 !w-12" onClick={() => {}}>
          <FacebookIcon className="h-6 w-6" />
        </BaseIconButton>
        <BaseIconButton className="!h-12 !w-12" onClick={() => {}}>
          <Twitter className="h-6 w-6" />
        </BaseIconButton>
        <BaseIconButton className="!h-12 !w-12" onClick={() => {}}>
          <InstagramIcon className="h-6 w-6" />
        </BaseIconButton>
      </div>
    </div>
  );
}
