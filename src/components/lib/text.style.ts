import cn from 'classnames';
import { SUILibGenerator } from './simple-ui.theme';

export const textStyleGenerator = SUILibGenerator({
  initial: {
    variant: 'normal',
    size: 'small',
  },
  variants: {
    super: cn(
      'bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text text-transparent  [text-shadow:0_0_12px_theme(colors.blue.400)]',
      'dark:from-blue-600 dark:to-blue-100 dark:[text-shadow:0_0_16px_theme(colors.blue.700)]',
    ),
    normal: 'text-slate-700 dark:text-slate-300',
    text: 'text-blue-700 dark:text-blue-400',
  },
  sizes: {
    small: 'text-sm',
    medium: 'text-lg',
    large: 'text-3xl font-bold',
  },
});
