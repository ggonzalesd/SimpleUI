import React from 'react';
import cn from 'classnames';

import type { SimpleUILibComponentProps } from '../lib/simple-ui';
import { switchStyleGenerator } from '../lib/switch.style';

interface Props extends Omit<SimpleUILibComponentProps, 'phase'> {
  disabled?: boolean;
  state?: boolean;
  setState?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SUISwitch = React.forwardRef<HTMLButtonElement, Props>(
  (
    { id, className, variant, size, disabled, children, state, setState },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        id={id}
        disabled={disabled}
        className={switchStyleGenerator({
          variant,
          extend: 'ex_container',
          className,
        })}
        onClick={() => setState && setState((value) => !value)}
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
                variant,
                toggle: state,
                extend: 'ex_circle',
              }),
            )}
          ></div>
          <div className='aspect-square h-full w-auto' />
          <div className='aspect-square h-full w-auto' />
        </div>
        <span
          className={switchStyleGenerator({ size, variant, extend: 'ex_text' })}
        >
          {children}
        </span>
      </button>
    );
  },
);

export default SUISwitch;
