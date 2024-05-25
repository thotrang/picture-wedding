import classNames from "classnames";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export interface IBaseButton extends PropsWithChildren {
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  type?: any;
}
export default function BaseButton({
  className,
  onClick,
  children,
  disabled = false,
  type,
  ...props
}: IBaseButton) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.03, opacity: 0.9 } : {}}
      whileTap={!disabled ? { scale: 0.95, opacity: 0.3 } : {}}
      className={classNames(
        "shadow-white",
        "text-white cursor-pointer bg-buttonColor py-4 px-6 border-solid border border-black/30 overflow-hidden border-gradient-to-br rounded-xl text-base",
        className,
        {
          "cursor-not-allowed !opacity-50 ": disabled,
        }
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}
// whileHover={!disabled ? { scale: 1.05, opacity: 0.8 } : {}}
// whileTap={!disabled ? { scale: 0.95, opacity: 0.3 } : {}}
// className={classNames(
//  {
//   "relative bg-gradient-to-r from-[#2F2F37] to-background border-0 rounded-xl overflow-hidden p-0" : hasBorder
//  }
// )}
// onClick={onClick}
// {...props}
// >
// <div
//   className={classNames(
//     " bg-buttonColor py-4 px-6 rounded-xl text-white cursor-pointer text-base border border-solid border-transparent bg-clip-padding",
//     className,
//   )}
// >
//   {children}
// </div>
