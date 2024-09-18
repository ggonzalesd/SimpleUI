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

const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  ({ className, variant, size, state, setState, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type='checkbox'
        className={checkboxStyleGenerator({
          variant,
          size,
          className,
        })}
        checked={state && state.includes(props.value)}
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
        {...props}
      />
    );
  },
);

export default Checkbox;
