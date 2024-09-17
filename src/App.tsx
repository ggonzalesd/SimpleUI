import cn from 'classnames';
import { useAppStore } from './state';

import Header from './components/header';

import ButtonView from './view/ButtonView';
import InstallView from './view/InstallView';

export default function App() {
  const { dark } = useAppStore();

  return (
    <div
      className={cn(
        { ['dark']: dark },
        'flex min-h-screen flex-col gap-20 bg-gradient-to-br from-zinc-200 to-zinc-300 pb-8 pt-16 dark:from-blue-950 dark:to-gray-950',
      )}
    >
      <Header />

      <InstallView />
      <ButtonView />
    </div>
  );
}
