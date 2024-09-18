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
