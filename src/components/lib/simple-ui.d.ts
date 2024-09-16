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
  phases?: Record<P, string>;
  extends?: Record<
    E,
    {
      default?: string;
      variants?: Record<V, string>;
      active?: Partial<Record<V, string>>;
      phases?: Record<P, string>;
      sizes?: Record<S, string>;
    }
  >;
}
