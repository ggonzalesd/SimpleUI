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
    size: 'medium',
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
  extensions: {
    ext_button: {
      default: 'flex flex-col justify-between',
      variants: {
        super: {
          on: 'bg-blue-900/25',
        },
        normal: {
          off: 'text-black dark:text-white',
          on: 'text-white bg-slate-400 dark:bg-slate-500/20',
        },
        text: { off: 'text-blue-500', on: 'text-blue-500' },
      },
    },
    ext_bar: {
      default: 'w-full',
      variants: {
        super: { off: 'bg-blue-800', on: 'bg-blue-900' },
        normal: {
          off: 'bg-slate-500',
          on: 'shadow-md bg-slate-400 shadow-slate-300 dark:bg-slate-300 dark:shadow-slate-900',
        },
        text: { off: 'bg-blue-500/20', on: 'bg-blue-500' },
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
