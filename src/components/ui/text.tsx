import React from 'react';
import { SimpleUILibComponentProps } from '../lib/simple-ui';
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

export default function SUIText({
  id,
  className,
  type,
  variant,
  size,
  children,
}: Props) {
  return React.createElement(type ?? 'p', {
    id,
    className: textStyleGenerator({ variant, size, className }),
    children,
  });
}
