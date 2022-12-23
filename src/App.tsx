import { useAppSelector } from 'hooks/hooks';

import AdminRoutes from 'routes/admin-routes';

import { getMenuState } from 'reducers/menu-state';

import { MemoizedAside, MemoizedHeader } from 'statics/statics';

function App() {
  const menuState = useAppSelector(getMenuState);

  return (
    <>
      <MemoizedHeader />

      <div className="app-container">
        <MemoizedAside />

        <section className={`main-content ${menuState ? 'opened' : 'closed'}`}>
          <AdminRoutes />
        </section>
      </div>
    </>
  );
}

export default App;
