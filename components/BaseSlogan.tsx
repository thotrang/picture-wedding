import BaseText from "./BaseText";
import ButtonNavigate from "./ButtonNavigate";

export default function BaseSlogan() {
  return (
    <div>
      <div>
        <BaseText
          tag="span"
          size="L"
          className="m-0  font-medium"
          content="Let`s "
        />
        <ButtonNavigate />
      </div>
      <BaseText
        tag="span"
        size="L"
        className="m-0  font-medium"
        content=" Work Together"
      />
    </div>
  );
}
