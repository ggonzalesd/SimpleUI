import React from 'react';

import type { SimpleUILibComponentProps } from '../lib/simple-ui';
import { buttonStyleGenerator } from '../lib/button.style';

interface Props extends Omit<SimpleUILibComponentProps, 'phase'> {
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SUIButton = React.forwardRef<HTMLButtonElement, Props>(
  (
    { id, className, disabled, variant, size, type, onClick, children },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        id={id}
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={buttonStyleGenerator({ variant, size, className })}
      >
        {children}
      </button>
    );
  },
);

export default SUIButton;
