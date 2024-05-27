import classNames from "classnames";

import { PropsWithChildren } from "react";
import BaseText, { IBaseText } from "./BaseText";
import { motion } from "framer-motion";

interface ButtonProps extends PropsWithChildren, IBaseText {
  isHover?: boolean;
  className?: string;
  onClick?: () => void;
}
export default function BaseTextButton({
  onClick = () => {},
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95, opacity: 0.3 }}
    >
      <BaseText
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={() => {}}
        className={classNames(
          {
            "cursor-pointer text-primary": true,
          },
          className
        )}
        {...props}
      >
        {children}
      </BaseText>
    </motion.div>
  );
}
