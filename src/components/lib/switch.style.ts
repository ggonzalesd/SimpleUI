import type { SUIVariant, SUISize, SUIPhase } from './simple-ui';
import { SUIGenerator } from './simple-ui.theme';

export const switchStyleGenerator = SUIGenerator<
  SUIVariant,
  SUISize,
  SUIPhase,
  'ex_circle' | 'ex_text' | 'ex_container'
>({
  name: 'toggle',
  initial: {
    sizes: 'medium',
    variant: 'normal',
  },
  default:
    'relative rounded-full flex h-full items-center leading-5 transition-colors disabled:opacity-80 disabled:saturate-50',
  variants: {
    super: 'bg-blue-900',
    normal: 'bg-slate-700',
    text: 'bg-blue-500/25',
  },
  active: {
    super: 'bg-gradient-to-br to-blue-800 from-blue-400',
    normal: 'bg-slate-500',
    text: 'bg-blue-400/20',
  },
  sizes: {
    small: 'max-h-3 max-w-6',
    medium: 'max-h-5 max-w-10',
    large: 'max-h-6 max-w-12',
  },
  extends: {
    ex_circle: {
      default:
        'absolute left-0 top-0 aspect-square h-full w-auto rounded-full  transition-transform duration-100',
      variants: {
        super: 'bg-slate-200',
        normal:
          'border-[3px] border-slate-500 bg-gradient-to-br from-slate-100 to-slate-300',
        text: 'bg-blue-700 dark:bg-blue-300/20',
      },
      active: {
        text: 'bg-blue-600/50',
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
        'inline-flex items-center gap-1 whitespace-nowrap disabled:pointer-events-none disabled:saturate-50 px-2 rounded-md',
      variants: {
        super: '',
        normal: '',
        text: 'hover:bg-blue-600/10',
      },
    },
  },
});
