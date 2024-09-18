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
