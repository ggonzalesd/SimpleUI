import React from 'react';
import type { SimpleUILibComponentProps } from '../lib/simple-ui';
import { textStyleGenerator } from '../lib/text.style';

interface Props extends Omit<SimpleUILibComponentProps, 'phase'> {
  type?:
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'span'
    | 'blockquote'
    | 'pre'
    | 'a'
    | 'strong'
    | 'em'
    | 'small'
    | 'mark'
    | 'abbr'
    | 'cite'
    | 'code'
    | 'label';
}

const Text = React.forwardRef<HTMLElement, Props>(
  ({ className, type, variant, size, ...props }, ref) => {
    return React.createElement(type ?? 'p', {
      ref,
      className: textStyleGenerator({ variant, size, className }),
      ...props,
    });
  },
);

export default Text;
