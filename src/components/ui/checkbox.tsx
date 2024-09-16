import { checkboxStyleGenerator } from '../lib/checkbox.style';
import { SimpleUILibComponentProps } from '../lib/simple-ui';

type OmitedProps = 'children' | 'phase';

interface Props extends Omit<SimpleUILibComponentProps, OmitedProps> {
  value: string;
  disabled?: boolean;
  state?: string[];
  setState?: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function SUICheckbox({
  id,
  className,
  value,
  disabled,
  variant,
  size,
  state,
  setState,
}: Props) {
  return (
    <input
      id={id}
      disabled={disabled}
      value={value}
      type='checkbox'
      className={checkboxStyleGenerator({
        variant,
        size,
        className,
      })}
      checked={state && state.includes(value)}
      onChange={
        setState &&
        ((e) => {
          setState((last) => {
            if (e.target.checked) return [...last, e.target.value];
            else {
              const _last = new Set(last);
              _last.delete(e.target.value);
              return [..._last];
            }
          });
        })
      }
    />
  );
}
