import BaseIconButton from "@/components/BaseIconButton";
import BaseText from "@/components/BaseText";
import { IQuestion } from "@/types/faq";
import classNames from "classnames";
import ChevronBottom from "public/icons/ChevronBottom";
import ChevronTop from "public/icons/ChevronTop";
import { useState } from "react";

interface IQuestionItem {
  item: IQuestion;
  showBottomLine: boolean;
}
export default function QuestionItem({ item, showBottomLine }: IQuestionItem) {
  const { attributes } = item;
  
  const [openCollap, setOpenCollap] = useState(false);
  return (
    <div
      className={classNames(
        "border border-solid border-x-0 border-t-0 border-borderColor flex justify-between",
        "2xl:px-base50 2xl:py-base30 2xl:gap-base30 lg:px-base40 lg:py-base20 lg:gap-base20 px-base30 py-4 gap-4",
        {
          "border-b-0": !showBottomLine,
        }
      )}
    >
      <div className="flex gap-6 flex-col justify-center">
        <BaseText tag="h1" size="XS" className="font-semibold">
          {attributes.question}
        </BaseText>
        {openCollap && (
          <BaseText size="S" className=" font-normal">
            {attributes.answer}
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
    </div>
  );
}
