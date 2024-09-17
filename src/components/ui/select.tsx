import React, { useCallback, useEffect, useState } from 'react';
import cn from 'classnames';

import type { SimpleUILibComponentProps } from '../lib/simple-ui';

interface Props extends Omit<SimpleUILibComponentProps, 'children'> {
  name?: string;
  defaultValue?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  value?: string;
  data?: string[];
}

export default function SUISelect({
  id,
  className,
  defaultValue,
  name,
  value,
  setValue,
  data,
}: Props) {
  const [open, setOpen] = useState(false);

  // Config Default Value
  useEffect(() => {
    if (data && value && defaultValue && setValue && !data.includes(value)) {
      setValue(defaultValue);
    }
  }, [data, value, defaultValue, setValue]);

  // Select Option function generator
  const onSelectGen = useCallback(
    (newValue: string) => () => {
      if (setValue) {
        setValue(newValue);
      }
      setOpen((state) => !state);
    },
    [setValue],
  );

  return (
    <div
      id={id}
      className={cn('relative inline-flex bg-blue-950 text-white', className)}
    >
      <div
        onClick={() => setOpen((value) => !value)}
        className='flex h-full w-full select-none p-1 hover:cursor-pointer'
      >
        {value}
      </div>
      <div
        className={cn(
          { ['hidden']: !open },
          'absolute left-0 top-full z-10 flex w-full flex-col',
        )}
      >
        {data &&
          data.map((option) => (
            <React.Fragment key={option}>
              <div
                className='select-none whitespace-nowrap bg-blue-800 p-1 text-white hover:bg-zinc-400'
                onClick={onSelectGen(option)}
              >
                {option}
              </div>
              <div className='h-[2px] w-full bg-blue-900' />
            </React.Fragment>
          ))}
      </div>
      <input type='hidden' name={name} />
    </div>
  );
}
