import classNames from "classnames";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
interface IBaseCard extends PropsWithChildren {
  className: string;
  onClick: (value: any) => void;
}
export default function BaseCard({ children, className, onClick }: IBaseCard) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95, opacity: 0.3 }}
      className={classNames("cursor-pointer", className)}
    >
      {children}
    </motion.div>
  );
}
