import classNames from "classnames";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export interface IBaseButton extends PropsWithChildren {
  className?: string;
  onClick: () => void;
}
export default function BaseButton({
  className,
  onClick,
  children,
  ...props
}: IBaseButton) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classNames(
        "text-white bg-secondary py-4 px-6 border-solid border border-black/30 overflow-hidden border-gradient-to-br rounded-xl text-base",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}
