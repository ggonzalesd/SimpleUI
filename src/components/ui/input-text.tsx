import React from 'react';
import type { SimpleUILibComponentProps } from '../lib/simple-ui';
import { inputTextStyleGenerator } from '../lib/input-text.style';

interface Props extends Omit<SimpleUILibComponentProps, 'children' | 'phase'> {
  name: string;
  disabled?: boolean;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputText = React.forwardRef<HTMLInputElement, Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={inputTextStyleGenerator({
          variant,
          size,
          className,
        })}
        {...props}
      />
    );
  },
);

export default InputText;
