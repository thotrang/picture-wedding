import classNames from "classnames";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface IBaseButton extends PropsWithChildren {
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
        "text-white bg-secondary p-3 border-solid border-[1px] border-black/30 overflow-hidden border-gradient-to-br rounded-lg text-base",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}
