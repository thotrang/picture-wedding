import { PropsWithChildren } from "react";
import BaseText, { IBaseText } from "./BaseText";
import { motion } from "framer-motion";
import classNames from "classnames";
export interface IBaseTextButtonNavigate extends PropsWithChildren, IBaseText {
  className?: string;
  classButton?: string;
  isHover?: boolean;
  onClick: () => void;
}
export default function BaseTextButtonNavigate({
  children,
  onClick,
  className,
  classButton,
  isHover,
  ...props
}: IBaseTextButtonNavigate) {
  return (
    <motion.button
      whileHover={isHover ? { scale: 1.05 } : {}}
      whileTap={isHover ? { scale: 0.95, opacity: 0.3 } : {}}
      onClick={onClick}
      className={classNames(
        `border-0 bg-transparent cursor-pointer`,
        classButton
      )}
    >
      <BaseText
        className={classNames(
          "border-borderColor border border-solid border-x-0 border-t-0",
          className
        )}
        {...props}
      >
        {children}
      </BaseText>
    </motion.button>
  );
}
