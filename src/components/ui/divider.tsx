import { dividerStyleGenerator } from '../lib/divider.style';
import type { SimpleUILibComponentProps, SUIDirection } from '../lib/simple-ui';

interface Props extends Omit<SimpleUILibComponentProps, 'phase'> {
  direction?: SUIDirection;
}

export default function SUIDivider({
  id,
  className,
  children,
  variant,
  size,
  direction: phase = 'horizontal',
}: Props) {
  return (
    <div
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
}
