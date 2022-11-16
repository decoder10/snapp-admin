import { useEffect, useState } from 'react';

import { useMountTransition } from 'hooks/use-mount-transition';

import { useAppDispatch, useAppSelector } from 'configs/hooks';
import { loadLocalStorage, saveLocalStorage } from 'configs/local-storage';

import { getTranslations } from 'services/requests';
import { SocketManager } from 'services/socket-manager';

import { getTest, testAction } from 'reducers/test-reducer';

import TestContextProvider from 'contexts/test-context';

import { RoundProgress } from 'core/core';

import { Header } from 'components/header/header';
import { Sidebar } from 'components/sidebar/sidebar';
import TestContextExample from 'components/test-context-example/test-context-example';

import Loader from 'ui/loader/loader';

interface IAppProps {
  gameUrlInfoParams: IGameUrlInfoParamsProps;
}

function App({ gameUrlInfoParams }: IAppProps) {
  const dispatch = useAppDispatch();
  const testData = useAppSelector(getTest);

  const [isConnected, setIsConnected] = useState(false);
  const hasTransitionedIn = useMountTransition(!isConnected, 1000);

  useEffect(() => {
    dispatch(testAction(['1', '2', '3', '4', '5']));
  }, [dispatch, gameUrlInfoParams]);

  useEffect(() => {
    const lang = loadLocalStorage('lang');

    getTranslations(lang).then(response => {
      saveLocalStorage('translations', response);
    });
  }, []);

  useEffect(() => {
    SocketManager.initializeConnection((isConnected: boolean) => {
      setIsConnected(isConnected);
    });

    return () => {
      SocketManager.disconnectChannel();
    };
  }, []);

  useEffect(() => {
    if (isConnected) {
      SocketManager.connectChannel('chartUpdate', btcData => {
        console.log('log--------btcData', btcData);
      }).then(() => undefined);

      SocketManager.connectChannel('balanceUpdated', balance => {
        console.log('log----------balance', balance);
      });

      SocketManager.connectChannel('timeInfo', ({ secondsLeft }) => {
        console.log('log-------secondsLeft', secondsLeft);
      });
    }
  }, [isConnected]);

  return (
    <>
      {isConnected ? (
        <div className="app">
          <Sidebar />

          <Header />

          <section className="home">
            <TestContextProvider>
              <TestContextExample />
            </TestContextProvider>

            {testData.test.map(item => (
              <p key={item}>{item}</p>
            ))}
            <i className="icon-star" />

            <RoundProgress />
          </section>
        </div>
      ) : null}

      {hasTransitionedIn || !isConnected ? (
        <Loader hasTransitionedIn={hasTransitionedIn} connected={!isConnected} />
      ) : null}
    </>
  );
}

export default App;
