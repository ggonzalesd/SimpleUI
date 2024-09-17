import { SUILibGenerator } from './simple-ui.theme';

export const buttonStyleGenerator = SUILibGenerator({
  initial: {
    variant: 'normal',
    sizes: 'medium',
  },
  default:
    'inline-flex whitespace-nowrap items-center justify-center leading-5 transition-colors disabled:pointer-events-none disabled:opacity-80 disabled:saturate-50 outline-1 outline-offset-4 outline-blue-500',
  variants: {
    super:
      'rounded-md bg-gradient-to-br from-blue-600 to-blue-800 text-blue-100 hover:from-blue-600 hover:to-blue-800 active:to-blue-600',
    normal:
      'rounded-md bg-slate-700 text-slate-200 hover:bg-slate-700/90 active:bg-slate-800/90',
    text: 'rounded-md text-blue-700 hover:bg-blue-400/30 active:bg-blue-400/40 dark:text-blue-500 dark:hover:bg-blue-500/10 dark:active:bg-blue-500/20',
  },
  sizes: {
    small: 'px-1 text-sm',
    medium: 'py-1 px-2 text-md',
    large: 'py-2 px-4 text-xl',
  },
});
