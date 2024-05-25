import { useRouter } from "next/router";
import BaseText from "./BaseText";
import ButtonNavigate from "./ButtonNavigate";
import { ERouter } from "routers";

export default function BaseSlogan() {
  const router = useRouter();
  return (
    <div>
      <div>
        <BaseText
          tag="span"
          size="L"
          className="m-0  font-bold"
          content="LET'S "
        />
        <ButtonNavigate
          onClick={() => {
            router.push(ERouter.SERVICE);
          }}
        />
      </div>
      <BaseText
        tag="span"
        size="L"
        className="m-0  font-bold"
        content=" WORK TOGETHER"
      />
    </div>
  );
}
