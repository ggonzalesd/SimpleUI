import type { SUISize, SUIVariant } from './simple-ui';
import { SUIGenerator } from './simple-ui.theme';

export const tabsStyleGenerator = SUIGenerator<
  SUIVariant,
  SUISize,
  'phase_bar_left' | 'phase_bar_right',
  'ext_bar' | 'ext_button'
>({
  initial: {
    variant: 'normal',
    sizes: 'medium',
  },
  default: 'flex rounded-t-md',
  variants: {
    super: 'text-white bg-gradient-to-br to-blue-700 from-blue-500',
    normal: 'bg-slate-400/5',
    text: '',
  },
  sizes: {
    large: 'h-14 text-lg',
    medium: 'h-10 text-md',
    small: 'h-8 text-xs',
  },
  extends: {
    ext_button: {
      default: 'flex flex-col justify-between',
      variants: {
        super: '',
        normal: 'text-black dark:text-white',
        text: 'text-blue-500',
      },
      active: {
        super: 'bg-blue-900/25',
        normal: 'text-white bg-slate-400 dark:bg-slate-500/20',
        text: 'text-blue-500',
      },
    },
    ext_bar: {
      default: 'w-full',
      variants: {
        super: 'bg-blue-800',
        normal: 'bg-slate-500',
        text: 'bg-blue-500/20',
      },
      active: {
        super: 'bg-blue-900',
        normal:
          'shadow-md bg-slate-400 shadow-slate-300 dark:bg-slate-300 dark:shadow-slate-900',
        text: 'bg-blue-500',
      },
      sizes: {
        large: 'h-2',
        medium: 'h-1',
        small: 'h-[2px]',
      },
      phases: {
        phase_bar_left: 'rounded-l-full',
        phase_bar_right: 'rounded-r-full',
      },
    },
  },
});
