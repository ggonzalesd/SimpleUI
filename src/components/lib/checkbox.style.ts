import { SUISize, SUIVariant } from './simple-ui';
import { SUIGenerator } from './simple-ui.theme';

export const checkboxStyleGenerator = SUIGenerator<
  SUIVariant,
  SUISize,
  'phase_check' | 'phase_radio',
  string
>({
  initial: {
    variant: 'normal',
    sizes: 'medium',
    phase: 'phase_check',
  },
  default:
    'flex before:[content:""] appearance-none items-center justify-center before:opacity-0 checked:before:opacity-90 hover:cursor-pointer active:before:opacity-100 disabled:pointer-events-none disabled:saturate-50',
  variants: {
    super:
      'bg-gradient-to-tl from-blue-900 to-blue-500 before:bg-blue-200 hover:from-blue-800 hover:to-blue-700 hover:shadow-md hover:shadow-blue-400 dark:hover:shadow-blue-800',
    normal: 'bg-slate-700 before:bg-slate-300 hover:bg-slate-600',
    text: 'bg-blue-300/25 before:bg-gradient-to-br before:from-blue-400 before:to-blue-500 hover:bg-blue-500/25',
  },
  phases: {
    phase_check: 'rounded-sm before:rounded-sm',
    phase_radio: 'rounded-full before:rounded-full',
  },
  sizes: {
    small: 'h-4 w-4 before:h-4 before:w-4',
    medium: 'h-5 w-5 before:h-4 before:w-4',
    large: 'h-6 w-6 before:h-5 before:w-5',
  },
});
