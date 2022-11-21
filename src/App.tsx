import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'configs/hooks';
import { loadLocalStorage, saveLocalStorage } from 'configs/local-storage';

import { getTranslations } from 'services/requests';

import { getTest, testAction } from 'reducers/test-reducer';

import TestContextProvider from 'contexts/test-context';

import TestContextExample from 'components/test-context-example/test-context-example';

function App() {
  const dispatch = useAppDispatch();
  const testData = useAppSelector(getTest);

  useEffect(() => {
    dispatch(testAction(['1', '2', '3', '4', '5', '6', '7', '7']));
  }, [dispatch]);

  useEffect(() => {
    const lang = loadLocalStorage('lang');

    getTranslations(lang).then(response => {
      saveLocalStorage('translations', response);
    });
  }, []);

  return (
    <div className="app">
      <section className="home">
        <TestContextProvider>
          <TestContextExample />
        </TestContextProvider>

        {testData.test.map(item => (
          <p key={item}>{item}</p>
        ))}

        <i className="icon-star" />
      </section>
    </div>
  );
}

export default App;
