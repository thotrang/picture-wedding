import BaseIconButton from "@/components/BaseIconButton";
import BaseWraper from "@/components/BaseWraper";
import FacebookIcon from "public/icons/FacebookIcon";
import InstagramIcon from "public/icons/InsagramIcon";
import Twitter from "public/icons/Twitter";

export default function LinkSocialNetwork() {
  return (
    <BaseWraper
      className="border-solid border-borderColor bg-background border rounded-full p-2 grid grid-cols-3 gap-2"
      gutters={[["width", 180]]}
      percentageShrink={[0.8, 0.8]}
    >
      <BaseIconButton
        className="aspect-square h-auto w-full !p-0"
        onClick={() => {}}
      >
        <FacebookIcon className="h-6 w-6 2xl:h-7 2xl:w-7" />
      </BaseIconButton>
      <BaseIconButton
        className="aspect-square h-auto w-full !p-0"
        onClick={() => {}}
      >
        <Twitter className="h-6 w-6 2xl:h-7 2xl:w-7" />
      </BaseIconButton>
      <BaseIconButton
        className="aspect-square h-auto w-full !p-0"
        onClick={() => {}}
      >
        <InstagramIcon className="h-6 w-6 2xl:h-7 2xl:w-7" />
      </BaseIconButton>
    </BaseWraper>
  );
}
