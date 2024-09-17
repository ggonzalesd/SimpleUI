import { useState } from 'react';
import { BiCopy } from 'react-icons/bi';
import Highlight from 'react-highlight';

import Button from './ui/button';

interface Props {
  value: string;
}

export default function CodePreview({ value }: Props) {
  const [copy, setCopy] = useState(false);

  return (
    <section className='relative flex flex-col overflow-hidden rounded-md'>
      <div className='absolute right-0 top-0 z-10 mx-4 my-2 flex items-center justify-center rounded-md bg-blue-900/25 p-2'>
        <Button
          className='gap-2'
          variant='super'
          onClick={() => {
            navigator.clipboard.writeText(value.trim());
            setCopy(true);
          }}
        >
          <BiCopy />
          {copy ? 'Copied' : 'Copy'}
        </Button>
      </div>
      <Highlight className='tsx z-0 max-h-[500px] text-xs invert saturate-0 dark:hue-rotate-0 dark:invert-0 dark:saturate-100'>
        {value.trim()}
      </Highlight>
    </section>
  );
}
