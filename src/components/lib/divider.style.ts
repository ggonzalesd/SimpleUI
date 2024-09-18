import type { SUIDirection, SUISize, SUIVariant } from './simple-ui';
import { SUIGenerator } from './simple-ui.theme';

export const dividerStyleGenerator = SUIGenerator<
  SUIVariant,
  SUISize,
  SUIDirection,
  'ext_line' | 'ext_children'
>({
  initial: {
    variant: 'normal',
    size: 'medium',
  },
  default: 'flex leading-5 rounded-md',
  phases: {
    vertical: 'flex-col justify-center',
    horizontal: 'flex-row items-center',
  },
  extensions: {
    ext_line: {
      default: 'flex-grow rounded-full',
      phases: {
        vertical: 'h-full mx-auto w-[2px]',
        horizontal: 'h-[2px] my-auto w-full',
      },
      variants: {
        super: 'bg-gradient-to-br from-blue-600 to-blue-300',
        normal: 'bg-slate-800/40 dark:bg-slate-500',
        text: 'bg-blue-400/40',
      },
    },
    ext_children: {
      variants: {
        super:
          'bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-blue-400 font-bold',
        normal: 'text-slate-800 dark:text-slate-500',
        text: 'text-blue-500',
      },
      sizes: {
        large: 'text-xl',
        medium: 'text-md',
        small: 'text-xs',
      },
      phases: {
        horizontal: 'mx-2',
        vertical: 'my-2',
      },
    },
  },
});
