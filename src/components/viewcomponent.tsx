import { BasicComponentProps } from './lib/simple-ui';

export default function ViewComponent({
  id,
  className,
  children,
}: BasicComponentProps) {
  return (
    <article id={id} className={className}>
      <div className='mx-auto max-w-screen-lg px-2 sm:px-0'>{children}</div>
    </article>
  );
}
