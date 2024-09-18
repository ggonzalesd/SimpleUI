import ViewComponent from '@/components/viewcomponent';

import Text from '@/components/ui/text';
import Divider from '@/components/ui/divider';
import Tabs from '@/components/ui/tabs';

import CodePreview from '@/components/codepreview';

import ButtonVariants from '@/components/views/button/ButtonVariants';

import { CODE_BUTTON_VARIANTS } from '@/scripts';

export default function ButtonView() {
  return (
    <ViewComponent>
      <section className='flex flex-col'>
        <Text type='h2' variant='super' size='large'>
          Button Component in SimpleUI
        </Text>
        <Text variant='normal' className='my-2'>
          The
          <Text type='code' variant='super' className='px-1'>
            Button
          </Text>
          component in SimpleUI is flexible and customizable, suitable for a
          wide range of use cases:
        </Text>
      </section>

      <Divider variant='normal' />

      <section className='flex flex-col gap-2'>
        <Text type='h5' variant='super' size='medium'>
          Button variants & sizes
        </Text>
        <Text type='h6' variant='super' size='medium'>
          Variants
        </Text>
        <div className='flex flex-col gap-2'>
          <Text>
            <Text type='span' variant='text' className='pr-1'>
              Super:
            </Text>
            A bold, standout style for primary actions that require maximum
            attention.
          </Text>
          <Text>
            <Text type='span' variant='text' className='pr-1'>
              Normal:
            </Text>
            A balanced, standard appearance for common actions.
          </Text>
          <Text>
            <Text type='span' variant='text' className='pr-1'>
              Text:
            </Text>
            A minimalist style, typically used for less prominent or inline
            actions.
          </Text>
        </div>

        <Tabs
          variant='text'
          size='medium'
          defaultTab='view'
          tabs={{
            view: {
              display: 'View',
              view: <ButtonVariants />,
            },
            code: {
              display: 'Code',
              view: <CodePreview value={CODE_BUTTON_VARIANTS} />,
            },
          }}
        />
      </section>

      <Divider variant='normal' className='whitespace-nowrap' />

      <section className='flex flex-col gap-2'>
        <Text type='h5' variant='super' size='medium'>
          function <span className='italic'>buttonStyleGenerator</span>
        </Text>
        <Text>
          The buttonStyleGenerator is a utility function within SimpleUI that
          applies button styling to other elements, such as an tag. This allows
          for a consistent look and feel across different interactive elements,
          even if they aren't native buttons. By passing the desired variant and
          size, the buttonStyleGenerator can generate styles to make any element
          resemble a button, ensuring a cohesive UI design.
        </Text>
        <CodePreview
          value={`<a\n\thref='https://ggonzalesd.github.io/portfolio/'\n\ttarget='_blank'\n\tclassName={buttonStyleGenerator({ variant: 'text' }, 'px-1')}\n>\n\tmy website\n</a>`}
        />
      </section>
    </ViewComponent>
  );
}
