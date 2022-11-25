import { useEffect } from 'react';

import { PermissionTypesEnum } from 'enums';
import { PermissionWrapper } from 'permissions/permission-wrapper';

import { useAppDispatch, useAppSelector } from 'configs/hooks';
import { loadLocalStorage, saveLocalStorage } from 'configs/local-storage';

import AdminRoutes from 'routes/admin-routes';

import { getTranslations } from 'services/requests';

import { getTest, testAction } from 'reducers/test-reducer';

import TestContextProvider from 'contexts/test-context';

import { TestContextExample } from 'components/test-context-example/test-context-example';

import Aside from 'ui/partials/aside/aside';
import Header from 'ui/partials/header/header';

function App() {
  const dispatch = useAppDispatch();
  const testData = useAppSelector(getTest);

  useEffect(() => {
    dispatch(testAction(['1', '2', '3', '4', '5', '6', '7', '8']));
  }, [dispatch]);

  useEffect(() => {
    const lang = loadLocalStorage('lang');

    getTranslations(lang).then(response => {
      saveLocalStorage('translations', response);
    });
  }, []);

  return (
    <div className="app">
      <Header />

      <Aside />

      <section className="main-content">
        <AdminRoutes />

        <PermissionWrapper wrapper={PermissionTypesEnum.visibility} permission={['edit']}>
          <p>permission test</p>
          <TestContextProvider>
            <TestContextExample startNumber={1} />
          </TestContextProvider>
        </PermissionWrapper>

        {testData.test.map(item => (
          <p key={item}>{item}</p>
        ))}

        <i className="icon-star" />
      </section>
    </div>
  );
}

export default App;
