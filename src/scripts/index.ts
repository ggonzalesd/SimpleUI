export const CODE_TYPE_THEME = `
// @/components/lib/simple-ui.d.ts
export type SUIVariant = 'super' | 'normal' | 'text';
export type SUISize = 'small' | 'medium' | 'large';
export type SUIPhase = 'ok' | 'loading' | 'error';
export type SUIDirection = 'horizontal' | 'vertical';

export interface BasicComponentProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export interface SimpleUIComponentProps<
  V extends string,
  S extends string,
  P extends string,
> extends BasicComponentProps {
  variant?: V;
  size?: S;
  phase?: P;
}

export type SimpleUILibComponentProps = SimpleUIComponentProps<
  SUIVariant,
  SUISize,
  SUIPhase
>;

export interface SUIParameters<
  V extends string,
  S extends string,
  P extends string,
  E extends string,
> {
  variant?: V;
  size?: S;
  phase?: P;
  className?: string;
  toggle?: boolean;
  extend?: E;
}

interface SUIBasicStyle {
  default?: string;
  off?: string;
  on?: string;
}

interface SUIModuleStyle<V extends string, S extends string, P extends string>
  extends SUIBasicStyle {
  variants?: Partial<Record<V, string | SUIBasicStyle>>;
  sizes?: Partial<Record<S, string>>;
  phases?: Partial<Record<P, string>>;
}

export interface SUIStyle<
  V extends string,
  S extends string,
  P extends string,
  E extends string,
> extends SUIModuleStyle<V, S, P> {
  name?: string;
  initial?: {
    variant?: V;
    size?: S;
    phase?: P;
  };
  extensions?: Record<E, SUIModuleStyle<V, S, P>>;
}
`;

export const CODE_MAIN_THEME = `
// @/components/lib/simple-ui.theme.ts
import cn from 'classnames';
import type {
  SUIParameters,
  SUIStyle,
  SUISize,
  SUIVariant,
  SUIPhase,
  SUIModuleStyle,
} from './simple-ui';

export const SUIGenerator =
  <V extends string, S extends string, P extends string, E extends string>(
    style: SUIStyle<V, S, P, E>,
  ) =>
  (props?: SUIParameters<V, S, P, E>, classes?: string) => {
    // Select Style base
    let style_main: SUIModuleStyle<V, S, P> | undefined = style;
    if (
      props?.extend !== undefined &&
      style.extensions &&
      style.extensions[props.extend]
    )
      style_main = style.extensions[props.extend];

    // Get Default
    const c_default = cn(
      style_main.default,
      !props?.toggle && style_main.off,
      !!props?.toggle && style_main.on,
    );

    const k_variant = props?.variant ?? style.initial?.variant;
    let c_variant: string | undefined = undefined;
    if (style_main.variants && k_variant && style_main.variants[k_variant]) {
      const style_variant = style_main.variants[k_variant];
      if (typeof style_variant === 'string') {
        c_variant = style_variant;
      } else {
        c_variant = cn(
          style_variant?.default,
          !props?.toggle && style_variant?.off,
          !!props?.toggle && style_variant?.on,
        );
      }
    }

    // Get Size
    const k_size = props?.size ?? style.initial?.size;
    const c_size =
      style_main.sizes !== undefined &&
      k_size !== undefined &&
      style_main.sizes[k_size];

    // Get Phase
    const k_phase = props?.phase ?? style.initial?.phase;
    const c_phase =
      style_main.phases !== undefined &&
      k_phase !== undefined &&
      style_main.phases[k_phase];

    return cn(c_default, c_variant, c_size, c_phase, props?.className, classes);
  };

export const SUILibGenerator = SUIGenerator<
  SUIVariant,
  SUISize,
  SUIPhase,
  string
>;
`;

export const CODE_BUTTON_VARIANTS = `
import cn from 'classnames';
import Button from '@/components/ui/button';
import type { SUISize, SUIVariant } from '@/components/lib/simple-ui';

import { useAppStore } from '@/state';

const variants: SUIVariant[] = ['super', 'normal', 'text'];
const sizes: SUISize[] = ['large', 'medium', 'small'];

export default function ButtonVariants() {
  const { disabled } = useAppStore();

  return (
    <div
      className={cn(
        'flex min-h-64 items-center justify-center rounded-md border-[1px]',
        'border-blue-600/50 dark:bg-blue-700/10',
      )}
    >
      <div className='grid grid-cols-3 gap-4'>
        {variants.map((variant) =>
          sizes.map((size) => (
            <div
              key={variant + size}
              className='flex h-full min-h-16 w-full items-center justify-center'
            >
              <Button disabled={disabled} variant={variant} size={size}>
                {variant[0].toUpperCase() + variant.slice(1)}
              </Button>
            </div>
          )),
        )}
      </div>
    </div>
  );
}
`;
