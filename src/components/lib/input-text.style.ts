import { SUILibGenerator } from './simple-ui.theme';

export const inputTextStyleGenerator = SUILibGenerator({
  initial: {
    sizes: 'medium',
    variant: 'normal',
  },
  default: 'rounded-md disabled:pointer-events-none disabled:saturate-50',
  variants: {
    super:
      'bg-blue-600 text-white placeholder:text-blue-300 hover:bg-blue-700 focus:bg-blue-700 focus:shadow-lg focus:shadow-blue-600/20 focus:placeholder:text-blue-300 dark:bg-blue-800/90 dark:placeholder:text-blue-500 dark:hover:bg-blue-700',
    normal:
      'bg-slate-700 text-slate-200 hover:bg-slate-600 focus:bg-slate-800 dark:hover:bg-slate-800',
    text: 'border-2 border-blue-500/20 bg-transparent text-blue-700 placeholder:text-blue-500/50 hover:border-transparent hover:bg-blue-600/10 focus:border-transparent focus:bg-blue-600/20 dark:text-blue-400',
  },
  sizes: {
    small: 'py-1 px-2 text-sm',
    medium: 'py-1 px-2 text-md',
    large: 'py-2 px-4 text-lg font-bold',
  },
});
