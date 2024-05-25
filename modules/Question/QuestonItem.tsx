import BaseButton from "@/components/BaseButton";
import BaseText from "@/components/BaseText";
import { IQuestion } from "@/types/faq";
import classNames from "classnames";
import { motion } from "framer-motion";
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

  const animate = {
    transition: { type: "tween" },
    height: openCollap ? "auto" : 0,
  };
  return (
    <div
      className={classNames(
        "border border-solid border-x-0 border-t-0 border-borderColor flex justify-between",
        "2xl:px-base50 2xl:py-base30 2xl:gap-base30 lg:px-base40 lg:py-base20 lg:gap-base20 py-4 gap-4",
        {
          "border-b-0": !showBottomLine,
        }
      )}
    >
      <div className="flex gap-6 flex-col justify-center">
        <BaseText
          tag="h1"
          size="XS"
          className="font-semibold text-textColorSecond"
        >
          {attributes.question}
        </BaseText>
        <div aria-expanded={openCollap}>
          <motion.div
            style={{ overflow: "hidden" }}
            initial={{ height: 0, opacity: 1 }}
            animate={animate}
            exit={{ height: 0, opacity: 1 }}
          >
            <BaseText size="S" className="text-textColorSecond font-normal">
              {attributes.answer}
            </BaseText>
          </motion.div>
        </div>
      </div>
      <div>
        <BaseButton
          onClick={() => setOpenCollap(!openCollap)}
          className="2xl:!h-[60px] !h-[50px] aspect-square flex justify-center items-center !p-0 !rounded-full !bg-background border-borderColor"
        >
          {!openCollap ? (
            <ChevronTop className="2xl:h-8 2xl:w-8 h-7 w-7" />
          ) : (
            <ChevronBottom className="2xl:h-8 2xl:w-8 h-7 w-7" />
          )}
        </BaseButton>
      </div>
    </div>
  );
}
