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
