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

// * Style configuration type
export interface SUIStyle<
  V extends string,
  S extends string,
  P extends string,
  E extends string,
> {
  name?: string;
  initial: {
    variant: V;
    sizes: S;
    phase?: P;
  };
  default?: string;
  defaultActive?: string;
  variants: Record<V, string>;
  active?: Partial<Record<V, string>>;
  sizes?: Record<S, string>;
  phases?: Partial<Record<P, string>>;
  extends?: Record<
    E,
    {
      default?: string;
      defaultActive?: string;
      variants?: Record<V, string>;
      active?: Partial<Record<V, string>>;
      sizes?: Record<S, string>;
      phases?: Partial<Record<P, string>>;
    }
  >;
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
} from './simple-ui';

export const SUIGenerator =
  <T extends string, S extends string, P extends string, E extends string>(
    style: SUIStyle<T, S, P, E>,
  ) =>
  (
    {
      variant,
      size,
      phase,
      toggle,
      className,
      extend,
    }: SUIParameters<T, S, P, E>,
    classes?: string,
  ) => {
    const v = variant ?? style.initial.variant;
    const s = size ?? style.initial.sizes;
    const p = phase ?? style.initial.phase;

    if (extend === undefined) {
      // Main Theme
      let default_style = style.default;
      let main_variant = style.variants[v];

      if (toggle) {
        if (style.defaultActive !== undefined) {
          default_style = style.defaultActive;
        }
        if (style.active && style.active[v]) {
          main_variant = style.active[v];
        }
      }

      return cn(
        default_style,
        main_variant,
        style.sizes && style.sizes[s],
        p && style.phases && style.phases[p],
        className,
        classes,
      );
    } else if (style.extends && style.extends[extend] !== undefined) {
      const st = style.extends[extend];
      let ext_default = st.default;
      let ext_variant: string | undefined = st.variants && st.variants[v];

      if (toggle) {
        if (st.defaultActive !== undefined) {
          ext_default = st.defaultActive;
        }
        if (st.active && st.active[v]) {
          ext_variant = st.active[v];
        }
      }

      return cn(
        ext_default,
        ext_variant,
        st.sizes && st.sizes[s],
        p && st.phases && st.phases[p],
        className,
        classes,
      );
    }
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
