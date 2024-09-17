import React from 'react';
import type { SimpleUILibComponentProps } from '../lib/simple-ui';
import { inputTextStyleGenerator } from '../lib/input-text.style';

interface Props extends SimpleUILibComponentProps {
  name: string;
  disabled?: boolean;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const SUIInputText = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      className,
      disabled,
      variant,
      size,
      type,
      name,
      placeholder,
      value,
      onChange,
    },
    ref,
  ) => {
    return (
      <input
        ref={ref}
        id={id}
        className={inputTextStyleGenerator({ variant, size, className })}
        disabled={disabled}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  },
);

export default SUIInputText;
