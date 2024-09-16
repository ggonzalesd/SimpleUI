import { SimpleUILibComponentProps } from '../lib/simple-ui';
import { inputTextStyleGenerator } from '../lib/input-text.style';

interface Props extends SimpleUILibComponentProps {
  name: string;
  disabled?: boolean;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function SUIInputText({
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
}: Props) {
  return (
    <input
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
}
