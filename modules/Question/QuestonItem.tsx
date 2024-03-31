import BaseIconButton from "@/components/BaseIconButton";
import BaseText from "@/components/BaseText";
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
  const [openCollap, setOpenCollap] = useState(false) 
  return (
    <div className={classNames("border border-solid border-x-0 border-t-0 border-borderColor py-[30px] px-[50px] flex gap-6 justify-between", {
      'border-b-0': !showBottomLine
    })}>
      <div>
        <BaseText tag="h1" className="font-[600] text-[20px] pb-6">{title}</BaseText>
        {openCollap && <BaseText className="text-[18px] font-normal">{description}</BaseText>}
      </div>
      <div>
        <BaseIconButton onClick={() => setOpenCollap(!openCollap)} className="!bg-background border-borderColor h-12 w-12">
          {!openCollap ? <ChevronTop className="h-8 w-8"/> : <ChevronBottom className="h-8 w-8"/>}
        </BaseIconButton>
      </div>
    </div>
  );
}
