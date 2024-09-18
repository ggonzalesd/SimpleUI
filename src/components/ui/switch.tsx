import React from 'react';
import cn from 'classnames';

import type { SimpleUILibComponentProps } from '../lib/simple-ui';
import { switchStyleGenerator } from '../lib/switch.style';

interface Props extends Omit<SimpleUILibComponentProps, 'phase'> {
  disabled?: boolean;
  state?: boolean;
  setState?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Switch = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, variant, size, children, state, setState, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={switchStyleGenerator({
          extend: 'ex_container',
          variant,
          className,
        })}
        onClick={() => setState && setState((value) => !value)}
        {...props}
      >
        <div
          className={switchStyleGenerator({
            variant,
            size,
            toggle: state,
          })}
        >
          <div
            className={cn(
              { 'translate-x-full': state },
              switchStyleGenerator({
                extend: 'ex_circle',
                variant,
                toggle: state,
              }),
            )}
          ></div>
          <div className='aspect-square h-full w-auto' />
          <div className='aspect-square h-full w-auto' />
        </div>
        <span
          className={switchStyleGenerator({
            extend: 'ex_text',
            size,
            variant,
          })}
        >
          {children}
        </span>
      </button>
    );
  },
);

export default Switch;
