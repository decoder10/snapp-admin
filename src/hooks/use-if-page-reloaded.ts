import { useEffect, useState } from 'react';

export const UseIfPageReloaded = (): boolean => {
  const [isPageReloaded, setIsPageReloaded] = useState<boolean>(false);

  useEffect(() => {
    if ((window.performance.getEntries()[0] as PerformanceNavigationTiming).type === 'reload') {
      setIsPageReloaded(true);
    } else {
      setIsPageReloaded(false);
    }
  }, []);

  return isPageReloaded;
};
