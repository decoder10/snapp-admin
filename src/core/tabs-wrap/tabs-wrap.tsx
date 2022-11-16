import React, { useCallback, useEffect, useRef, useState } from 'react';
interface IProps {
  tabs: Array<ITabsProps>;
  activeTab?: number;
  scrollableX?: boolean;
  scrollableY?: boolean;
}

export function TabsWrap({ tabs = [], activeTab = 0, scrollableX = false, scrollableY = false }: IProps) {
  const elementsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const [active, setActive] = useState<number>(activeTab);
  const [activeParams, setActiveParams] = useState<{
    width: Undefined<number>;
    left: Undefined<number>;
  }>({
    width: 0,
    left: 0,
  });

  const handleTabClick = useCallback(
    (index: number) => {
      if (index !== active) {
        const currentTab = elementsRef?.current[index];

        setActive(index);
        setActiveParams({ width: currentTab?.clientWidth, left: currentTab?.offsetLeft });
      }
    },
    [active],
  );

  useEffect(() => {
    if (elementsRef?.current[activeTab]) {
      const currentTab = elementsRef?.current[activeTab];

      setActiveParams({ width: currentTab?.clientWidth, left: currentTab?.offsetLeft });
    }
  }, [elementsRef, activeTab]);

  return (
    <div className={`tabs-wrap ${scrollableY ? 'scrollable-y' : ''} ${scrollableX ? 'scrollable-x' : ''}`}>
      <div className="tabs">
        {tabs.length &&
          tabs.map((tabItem, index) => {
            const { title, key } = tabItem;
            return (
              <button
                ref={ref => (elementsRef.current[index] = ref)}
                className={`tab ${index === active ? 'active' : ''}`}
                key={key}
                type="button"
                onClick={() => handleTabClick(index)}
              >
                {title}
              </button>
            );
          })}

        <span className="active-line" style={{ width: activeParams.width, left: activeParams.left }} />
      </div>
      <div className="tabs-content-wrap">
        {tabs.length &&
          tabs.map((tabItem, index) => (
            <div key={tabItem.key} className={`tab-content ${index === active ? 'visible' : ''}`}>
              {tabItem.tabContent}
            </div>
          ))}
      </div>
    </div>
  );
}
