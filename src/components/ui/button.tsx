import React from 'react';

import type { SimpleUILibComponentProps } from '../lib/simple-ui';
import { buttonStyleGenerator } from '../lib/button.style';

interface Props extends Omit<SimpleUILibComponentProps, 'phase'> {
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SUIButton({
  id,
  className,
  disabled,
  variant,
  size,
  type,
  onClick,
  children,
}: Props) {
  return (
    <button
      id={id}
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={buttonStyleGenerator({ variant, size, className })}
    >
      {children}
    </button>
  );
}
