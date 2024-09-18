import React, { useState } from 'react';
import type { SimpleUILibComponentProps } from '../lib/simple-ui';
import { tabsStyleGenerator } from '../lib/tabs.style';

interface Props extends Omit<SimpleUILibComponentProps, 'children' | 'phase'> {
  defaultTab?: string;
  tabs: Record<string, { display: React.ReactNode; view: React.ReactNode }>;
}

const Tabs = React.forwardRef<HTMLElement, Props>(
  ({ className, defaultTab, tabs, variant, size, ...props }, ref) => {
    const [currentTab, setTab] = useState<string | undefined>(
      defaultTab ?? Object.keys(tabs)[0],
    );

    return (
      <React.Fragment>
        <section
          ref={ref}
          className={tabsStyleGenerator({
            variant,
            size,
            className,
          })}
          {...props}
        >
          <div className='flex h-full w-2 items-end'>
            <div
              className={tabsStyleGenerator({
                extend: 'ext_bar',
                phase: 'phase_bar_left',
                variant,
                size,
              })}
            />
          </div>
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              className={tabsStyleGenerator({
                extend: 'ext_button',
                toggle: tab === currentTab,
                variant,
              })}
              onClick={() => {
                setTab(tab);
              }}
            >
              <div className='flex flex-grow items-center justify-center px-2'>
                <span>{tabs[tab].display}</span>
              </div>
              <div
                className={tabsStyleGenerator({
                  extend: 'ext_bar',
                  toggle: tab === currentTab,
                  variant,
                  size,
                })}
              />
            </button>
          ))}

          <div className='flex h-full flex-grow items-end'>
            <div
              className={tabsStyleGenerator({
                extend: 'ext_bar',
                variant,
                size,
              })}
            />
          </div>
          <div className='flex h-full w-2 items-end'>
            <div
              className={tabsStyleGenerator({
                extend: 'ext_bar',
                phase: 'phase_bar_right',
                variant,
                size,
              })}
            />
          </div>
        </section>
        {currentTab &&
          Object.keys(tabs).includes(currentTab) &&
          tabs[currentTab].view}
      </React.Fragment>
    );
  },
);

export default Tabs;
