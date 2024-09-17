import cn from 'classnames';

import type { SUISize, SUIVariant } from '@/components/lib/simple-ui';

import Button from '@/components/ui/button';

import { useAppStore } from '@/state';

const variants: SUIVariant[] = ['super', 'normal', 'text'];
const sizes: SUISize[] = ['large', 'medium', 'small'];

export default function ButtonVariants() {
  const { disabled } = useAppStore();

  return (
    <div
      className={cn(
        'flex min-h-64 items-center justify-center rounded-md border-[1px]',
        'border-blue-600/50 dark:bg-blue-700/10',
      )}
    >
      <div className='grid grid-cols-3 gap-4'>
        {variants.map((variant) =>
          sizes.map((size) => (
            <div
              key={variant + size}
              className='flex h-full min-h-16 w-full items-center justify-center'
            >
              <Button disabled={disabled} variant={variant} size={size}>
                {variant[0].toUpperCase() + variant.slice(1)}
              </Button>
            </div>
          )),
        )}
      </div>
    </div>
  );
}
