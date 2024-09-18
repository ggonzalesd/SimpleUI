import type { SUIVariant, SUISize, SUIPhase } from './simple-ui';
import { SUIGenerator } from './simple-ui.theme';

export const switchStyleGenerator = SUIGenerator<
  SUIVariant,
  SUISize,
  SUIPhase,
  'ex_circle' | 'ex_text' | 'ex_container'
>({
  name: 'switch',
  initial: {
    variant: 'normal',
    size: 'medium',
  },
  default:
    'relative min-h-max min-w-min rounded-full flex h-full items-center leading-5 transition-colors disabled:opacity-80 disabled:saturate-50',
  variants: {
    super: {
      off: 'bg-blue-900',
      on: 'bg-gradient-to-br to-blue-800 from-blue-400',
    },
    normal: { off: 'bg-slate-700', on: 'bg-slate-500' },
    text: { off: 'bg-blue-500/25', on: 'bg-blue-400/20' },
  },
  sizes: {
    small: 'h-2 w-4',
    medium: 'h-3 w-6',
    large: 'h-5 w-10',
  },
  extensions: {
    ex_circle: {
      default:
        'absolute left-0 top-0 aspect-square h-full w-auto rounded-full  transition-transform duration-100',
      variants: {
        super: 'bg-slate-200',
        normal:
          'border-[3px] border-slate-500 bg-gradient-to-br from-slate-100 to-slate-300',
        text: { off: 'bg-blue-700 dark:bg-blue-300/20', on: 'bg-blue-600/50' },
      },
    },
    ex_text: {
      default: 'inline-flex items-center leading-3 text-black',
      sizes: {
        small: 'text-sm',
        medium: 'text-md',
        large: 'text-lg',
      },
      variants: {
        super: 'font-bold text-black dark:text-white',
        normal: 'text-slate-900 dark:text-slate-400',
        text: 'text-blue-700 dark:text-blue-500',
      },
    },
    ex_container: {
      default:
        'inline-flex items-center gap-1 whitespace-nowrap disabled:pointer-events-none  disabled:saturate-50 px-2 rounded-md',
      variants: {
        text: 'hover:bg-blue-600/10',
      },
    },
  },
});
