import { useMemo } from 'react';

import { tKeys } from 'translations/translation-keys';

import { Logo, BtcValue, TabsWrap, ProvablyFairness } from 'core/core';

import { Amounts } from 'ui/amounts/amounts';
import { Autobet } from 'ui/autobet/autobet';
import { BetHistory } from 'ui/bet-history/bet-history';
import { Favorites } from 'ui/favorites/favorites';
import { LastResults } from 'ui/last-results/last-results';
import { LiveStatistic } from 'ui/live-statistic/live-statistic';

export function Sidebar() {
  const tabs: Array<ITabsProps> = useMemo(
    () => [
      {
        title: tKeys('history'),
        key: 'history',
        tabContent: <div>1</div>,
      },
      {
        title: tKeys('chat'),
        key: 'chat',
        tabContent: <div>2</div>,
      },
      {
        title: tKeys('video'),
        key: 'video',
        tabContent: <div>3</div>,
      },
    ],
    [],
  );

  return (
    <aside className="sidebar">
      <Logo />

      <BtcValue />

      <LastResults />

      <div className="sidebar-info-wrap">
        <div className="sidebar-info-wrap-background">
          <TabsWrap tabs={tabs} />
        </div>
      </div>

      <Amounts />

      <div className="bottom-panel">
        <div className="panel-icons">
          <LiveStatistic />

          <Favorites />

          <Autobet />

          <BetHistory />
        </div>

        <ProvablyFairness />
      </div>
    </aside>
  );
}
