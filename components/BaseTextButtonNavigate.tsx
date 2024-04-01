import { PropsWithChildren } from "react";
import BaseText, { IBaseText } from "./BaseText";
import { motion } from "framer-motion";
import classNames from "classnames";
export interface IBaseTextButtonNavigate extends PropsWithChildren, IBaseText {
  className?: string;
  onClick: () => void;
}
export default function BaseTextButtonNavigate({
  children,
  onClick,
  className,
  ...props
}: IBaseTextButtonNavigate) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95, opacity: 0.3 }}
      onClick={onClick}
      className={`border-0 bg-transparent cursor-pointer`}
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
