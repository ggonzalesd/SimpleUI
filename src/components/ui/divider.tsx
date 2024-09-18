import React from 'react';

import type { SimpleUILibComponentProps, SUIDirection } from '../lib/simple-ui';
import { dividerStyleGenerator } from '../lib/divider.style';

interface Props extends Omit<SimpleUILibComponentProps, 'phase'> {
  direction?: SUIDirection;
}

const Divider = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      className,
      children,
      variant,
      size,
      direction: phase = 'horizontal',
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={dividerStyleGenerator({
          variant,
          className,
          phase,
        })}
        {...props}
      >
        <div
          className={dividerStyleGenerator({
            extend: 'ext_line',
            variant,
            phase,
          })}
        />
        {children !== undefined && (
          <>
            <span
              className={dividerStyleGenerator({
                extend: 'ext_children',
                variant,
                size,
                phase,
              })}
            >
              {children}
            </span>
            <div
              className={dividerStyleGenerator({
                extend: 'ext_line',
                variant,
                phase,
              })}
            />
          </>
        )}
      </div>
    );
  },
);

export default Divider;
