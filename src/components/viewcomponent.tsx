import type { BasicComponentProps } from './lib/simple-ui';

export default function ViewComponent({
  id,
  className,
  children,
}: BasicComponentProps) {
  return (
    <article id={id} className={className}>
      <div className='mx-auto flex max-w-screen-md flex-col gap-10 px-2 sm:px-0'>
        {children}
      </div>
    </article>
  );
}
