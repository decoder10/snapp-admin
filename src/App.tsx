import { useAppSelector } from 'configs/hooks';

import AdminRoutes from 'routes/admin-routes';

import { getMenuState } from 'reducers/menu-state';

import { MemoizedAside } from 'statics/aside/aside';
import { MemoizedHeader } from 'statics/header/header';

function App() {
  const menuState = useAppSelector(getMenuState);

  return (
    <div className="app">
      <MemoizedHeader />

      <div className="app-container">
        <MemoizedAside />

        <section className={`main-content ${menuState ? 'opened' : 'closed'}`}>
          <AdminRoutes />
        </section>
      </div>
    </div>
  );
}

export default App;
