import classNames from "classnames";
import { PropsWithChildren } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={classNames(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};
interface IBentoGrid extends PropsWithChildren {
  className: string;
}
export const BentoGridItem = ({ className, children }: IBentoGrid) => {
  return (
    <div
      className={classNames(
        "row-span-1 rounded-xl dark:bg-black dark:border-white/[0.2] justify-between flex flex-col",
        className
      )}
    >
      {children}
    </div>
  );
};
