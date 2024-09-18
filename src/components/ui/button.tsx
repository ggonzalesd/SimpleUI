import React from 'react';

import type { SimpleUILibComponentProps } from '../lib/simple-ui';
import { buttonStyleGenerator } from '../lib/button.style';

interface Props extends Omit<SimpleUILibComponentProps, 'phase'> {
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonStyleGenerator({ variant, size, className })}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default Button;
