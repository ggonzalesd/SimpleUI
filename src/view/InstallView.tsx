import { buttonStyleGenerator } from '@/components/lib/button.style';
import Text from '@/components/ui/text';
import Tabs from '@/components/ui/tabs';

import ViewComponent from '@/components/viewcomponent';
import CodePreview from '@/components/codepreview';

import { CODE_MAIN_THEME, CODE_TYPE_THEME } from '@/scripts';

export default function InstallView() {
  return (
    <ViewComponent>
      <section className='flex flex-col gap-2'>
        <Text type='h2' variant='super' size='large'>
          Install SimpleUI
        </Text>
        <Text>
          SimpleUI is not available on npm, so it needs to be manually
          integrated into your project. The setup requires TypeScript and the
          <a
            href='https://www.npmjs.com/package/classnames'
            className={buttonStyleGenerator({ variant: 'text' })}
            target='_blank'
          >
            classnames
          </a>
          library for managing CSS classes efficiently. The library is designed
          to work seamlessly with Vite and React.
        </Text>
        <div className='flex flex-col gap-2'>
          <Text type='h5' variant='text' size='medium'>
            Initial Setup
          </Text>
          <Text>
            <Text type='span' variant='text' className='pr-1'>
              TypeScript Aliases:
            </Text>
            SimpleUI uses the
            <Text type='span' variant='text' className='px-1'>
              @/
            </Text>
            alias for easier imports. Ensure your Vite and TypeScript
            configurations (tsconfig.json and vite.config.ts) are set up to
            recognize this alias.
          </Text>
          <div className='flex flex-col'>
            <Text variant='text' className='pr-1'>
              Core Files:
            </Text>
            <Text>
              <Text type='span' variant='text' className='pr-1'>
                @/components/lib/simple-ui.d.ts:
              </Text>
              Contains TypeScript definitions for the SimpleUI components.
            </Text>
            <Text>
              <Text type='span' variant='text' className='pr-1'>
                @/components/lib/simple-ui.theme.ts:
              </Text>
              Manages theme settings and styles for the library.
            </Text>
          </div>
          <Text>
            <Text type='span' variant='text' className='pr-1'>
              Component Integration:
            </Text>
            Each component has its own section and file under the
            <Text type='span' variant='text' className='px-1'>
              @/components/
            </Text>
            directory, providing flexibility and modularity.
          </Text>
        </div>
      </section>
      <section className='flex flex-col gap-2'>
        <Tabs
          variant='text'
          tabs={{
            type_files: {
              display: 'simple-ui.d.ts',
              view: <CodePreview value={CODE_TYPE_THEME} />,
            },
            code_file: {
              display: 'simple-ui.theme.ts',
              view: <CodePreview value={CODE_MAIN_THEME} />,
            },
          }}
        />
      </section>
    </ViewComponent>
  );
}
