import React from 'react';

import type { SimpleUILibComponentProps, SUIDirection } from '../lib/simple-ui';
import { dividerStyleGenerator } from '../lib/divider.style';

interface Props extends Omit<SimpleUILibComponentProps, 'phase'> {
  direction?: SUIDirection;
}

const SUIDivider = React.forwardRef<HTMLDivElement, Props>(
  (
    { id, className, children, variant, size, direction: phase = 'horizontal' },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        id={id}
        className={dividerStyleGenerator({
          variant,
          className,
          phase,
        })}
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

export default SUIDivider;
