import React from 'react';
import type { SimpleUILibComponentProps } from '../lib/simple-ui';
import { checkboxStyleGenerator } from '../lib/checkbox.style';

type OmitedProps = 'children' | 'phase';

interface Props extends Omit<SimpleUILibComponentProps, OmitedProps> {
  value: string;
  disabled?: boolean;
  state?: string[];
  setState?: React.Dispatch<React.SetStateAction<string[]>>;
}

const SUICheckbox = React.forwardRef<HTMLInputElement, Props>(
  ({ id, className, value, disabled, variant, size, state, setState }, ref) => {
    return (
      <input
        ref={ref}
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
  },
);

export default SUICheckbox;
