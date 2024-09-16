import ViewComponent from '@/components/viewcomponent';

import { FaCopy } from 'react-icons/fa';

import Text from '@/components/ui/text';
import Button from '@/components/ui/button';
import { useAppStore } from '@/state';
import { buttonStyleGenerator } from '@/components/lib/button.style';

export default function ButtonView() {
  const { disabled } = useAppStore();

  return (
    <ViewComponent>
      <Text type='h2' variant='super' size='large'>
        Button Component
      </Text>

      <Text variant='normal' className='my-2'>
        Import Button component from
        <Text type='code' variant='text' className='px-1'>
          @/components/ui/button
        </Text>
      </Text>

      <section className='flex flex-col gap-2'>
        <Text type='h5' variant='super' size='medium'>
          Variants
        </Text>
        <div className='flex justify-between'>
          <div></div>
          <div className='flex flex-col gap-1'>
            <Button disabled={disabled} variant='super'>
              Sample text
            </Button>
            <Button disabled={disabled} variant='normal'>
              Sample text
            </Button>
            <Button disabled={disabled} variant='text'>
              Sample text
            </Button>
          </div>
        </div>
      </section>

      <section>
        <Text type='h5' variant='super' size='medium'>
          Use Theme in 'a' tags
        </Text>
        <Text>
          Take a look of
          <a
            href='https://ggonzalesd.github.io/portfolio/'
            target='_blank'
            className={buttonStyleGenerator({ variant: 'text' }, 'px-1')}
          >
            my website
          </a>
        </Text>
        <div className='flex flex-col overflow-hidden rounded-md'>
          <div className='flex w-full justify-end bg-slate-800 p-2'>
            <Button size='medium' className='gap-2'>
              <FaCopy size={16} />
              Copy code
            </Button>
          </div>
          <div className='flex flex-col bg-blue-600/50 p-2 dark:bg-blue-950'>
            <pre>
              <code>
                {`<a\n\thref='https://ggonzalesd.github.io/portfolio/'\n\ttarget='_blank'\n\tclassName={buttonStyleGenerator({ variant: 'text' }, 'px-1')}\n>\n\tmy website\n</a>`}
              </code>
            </pre>
          </div>
        </div>
      </section>
    </ViewComponent>
  );
}
