import BaseIconButton from "@/components/BaseIconButton";
import BaseText from "@/components/BaseText";
import BaseWraper from "@/components/BaseWraper";
import classNames from "classnames";
import ChevronBottom from "public/icons/ChevronBottom";
import ChevronTop from "public/icons/ChevronTop";
import { useState } from "react";

interface IQuestionItem {
  item: {
    title: string;
    description: string;
  };
  showBottomLine: boolean;
}
export default function QuestionItem({ item, showBottomLine }: IQuestionItem) {
  const { title, description } = item;
  const [openCollap, setOpenCollap] = useState(false);
  return (
    <BaseWraper
      gutters={[
        ["padding", 50, "left"],
        ["padding", 50, "right"],
        ["padding", 30, "top"],
        ["padding", 30, "bottom"],
        ["gap", 30],
      ]}
      className={classNames(
        "border border-solid border-x-0 border-t-0 border-borderColor flex justify-between",
        {
          "border-b-0": !showBottomLine,
        }
      )}
    >
      <div className="flex gap-6 flex-col justify-center">
        <BaseText tag="h1" size="XS" className="font-semibold">
          {title}
        </BaseText>
        {openCollap && (
          <BaseText size="S" className=" font-normal">
            {description}
          </BaseText>
        )}
      </div>
      <div>
        <BaseIconButton
          onClick={() => setOpenCollap(!openCollap)}
          className="!bg-background border-borderColor"
        >
          {!openCollap ? (
            <ChevronTop className="2xl:h-8 2xl:w-8 h-7 w-7" />
          ) : (
            <ChevronBottom className="2xl:h-8 2xl:w-8 h-7 w-7" />
          )}
        </BaseIconButton>
      </div>
    </BaseWraper>
  );
}
