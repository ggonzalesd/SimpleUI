import ViewComponent from '@/components/viewcomponent';

import Text from '@/components/ui/text';
import Button from '@/components/ui/button';
import InputText from '@/components/ui/input-text';
import Checkbox from '@/components/ui/checkbox';
import Tabs from '@/components/ui/tabs';
import Divider from '@/components/ui/divider';

export default function HeroView() {
  return (
    <ViewComponent className='my-4'>
      <Text variant='super' size='large' className='text-center text-6xl'>
        Simple UI
      </Text>
      <Text variant='text' size='large' className='text-center text-2xl'>
        A simple component library
      </Text>
      <section className='grid grid-cols-1 gap-12 rounded-lg bg-blue-600/10 p-8 sm:grid-cols-2 md:grid-cols-3'>
        <Button variant='super'>Button Component</Button>
        <InputText
          variant='super'
          name='input-text'
          placeholder='Input Text Component'
        />
        <Text
          type='label'
          className='flex items-center gap-1 hover:cursor-pointer'
        >
          <Checkbox variant='text' value='ok' />
          Checkbox Component
        </Text>
        <Text type='span' variant='super'>
          Text Component
        </Text>
        <Tabs
          variant='text'
          tabs={{
            tab_1: {
              display: 'Tab 1',
              view: null,
            },
            tab_2: {
              display: 'Tab Component',
              view: null,
            },
          }}
        />
        <Divider variant='super'>Divider</Divider>
      </section>
    </ViewComponent>
  );
}
