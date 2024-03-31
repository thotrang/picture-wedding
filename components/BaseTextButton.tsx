import classNames from 'classnames';

import { PropsWithChildren } from 'react';
import BaseText, { IBaseText } from './BaseText';

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
    <BaseText
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
      className={classNames(
        {
          'cursor-pointer text-primary': true,
        },
        className
      )}
      {...props}
    >
      {children}
    </BaseText>
  );
}
