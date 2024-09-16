import React, { useState } from 'react';
import cn from 'classnames';

import type { SUIVariant } from './components/lib/simple-ui';
import { textStyleGenerator } from './components/lib/text.style';
import Button from './components/ui/button';
import Switch from './components/ui/switch';
import SUIInputText from './components/ui/input-text';
import Text from './components/ui/text';
import Checkbox from './components/ui/checkbox';
import Select from './components/ui/select';

import Header from './components/header';

import { useAppStore } from './state';

import { BiMenu } from 'react-icons/bi';
import ButtonView from './view/ButtonView';

export default function App() {
  const { dark, disabled } = useAppStore();

  const [toggle, setToggle] = useState(true);
  const [text, setText] = useState('');

  const [tags, setTags] = useState<string[]>(['text']);

  return (
    <div
      className={cn(
        { ['dark']: dark },
        'min-h-screen bg-zinc-200 pt-14 dark:bg-zinc-900',
      )}
    >
      <Header />

      <ButtonView />

      <div className='m-8 flex gap-2 rounded-md bg-blue-700/20 p-2'>
        {tags.map((text, index) => (
          <Text key={index} variant='text'>
            {text}
          </Text>
        ))}
      </div>

      <Select value='Option 1' data={['Option 1', 'Option 2']} />

      <div className='grid grid-cols-5 gap-12 p-8'>
        {['Button', 'Input Text', 'Switch', 'Text', 'Checkbox'].map((title) => (
          <Text
            key={title}
            type='h2'
            variant='super'
            size='large'
            className='text-4xl'
          >
            {title}
          </Text>
        ))}

        {(['super', 'normal', 'text'] as SUIVariant[]).map((variant) => (
          <React.Fragment key={variant}>
            <Button disabled={disabled} variant={variant} className='gap-1'>
              <BiMenu />
              {variant[0].toUpperCase() + variant.slice(1).toLowerCase()}
            </Button>

            <SUIInputText
              disabled={disabled}
              variant={variant}
              size='small'
              name='example'
              placeholder={`Insert in ${variant}`}
              className=''
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <Switch
              disabled={disabled}
              variant={variant}
              state={toggle}
              setState={setToggle}
            >
              {variant[0].toUpperCase() + variant.slice(1).toLowerCase()}
            </Switch>

            <Text variant={variant}>
              {variant[0].toUpperCase() + variant.slice(1).toLowerCase()}
            </Text>

            <Text
              type='label'
              variant={variant}
              className='flex items-center gap-2'
            >
              <Checkbox
                disabled={disabled}
                variant={variant}
                value={variant}
                state={tags}
                setState={setTags}
              />
              {variant}
            </Text>
          </React.Fragment>
        ))}
      </div>
      <div className='flex justify-center'>
        <form className='flex flex-col gap-4 rounded-xl bg-slate-600/10 p-4 dark:bg-slate-900'>
          <h2
            className={textStyleGenerator({ variant: 'super', size: 'large' })}
          >
            Log in
          </h2>
          <label
            className={textStyleGenerator({
              className: 'flex flex-col gap-1',
            })}
          >
            <span>Username</span>
            <SUIInputText name='username' placeholder='Insert Username' />
          </label>
          <label
            className={textStyleGenerator({
              className: 'flex flex-col gap-1',
            })}
          >
            <span>Password</span>
            <SUIInputText
              name='password'
              placeholder='Insert Password'
              type='password'
            />
          </label>
          <Button type='submit'>Log in</Button>
        </form>
      </div>
    </div>
  );
}
