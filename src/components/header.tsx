import Button from './ui/button';

import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useAppStore } from '@/state';

export default function Header() {
  const { switchMode, disabled, switchDisabled } = useAppStore();

  return (
    <header className='fixed left-0 top-0 flex h-14 w-full gap-4 bg-zinc-300 p-2 shadow-xl dark:bg-slate-800'>
      <Button variant='super' size='small' onClick={switchMode}>
        <MdDarkMode size={32} className='hidden dark:inline-block' />
        <MdLightMode size={32} className='inline-block dark:hidden' />
      </Button>
      <Button
        variant={!disabled ? 'super' : 'normal'}
        size='large'
        onClick={switchDisabled}
      >
        {disabled ? 'Disabled' : 'Enabled'}
      </Button>
    </header>
  );
}
