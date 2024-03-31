import BaseText from "./BaseText";
import ButtonNavigate from "./ButtonNavigate";

export default function BaseSlogan() {
  return (
    <div>
      <div>
        <BaseText
          tag="span"
          className="m-0 text-[58px] font-medium"
          content="Let`s "
        />
        <ButtonNavigate />
      </div>
      <BaseText
        tag="span"
        className="m-0 text-[58px] font-medium"
        content=" Work Together"
      />
    </div>
  );
}
