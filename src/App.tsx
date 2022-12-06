import { useAppSelector } from 'configs/hooks';

import AdminRoutes from 'routes/admin-routes';

import { getMenuState } from 'reducers/menu-state';

import Aside from 'statics/aside/aside';
import Header from 'statics/header/header';

function App() {
  const menuState = useAppSelector(getMenuState);

  return (
    <div className="app">
      <Header />

      <div className="app-container">
        <Aside />

        <section className={`main-content ${menuState ? 'opened' : 'closed'}`}>
          <AdminRoutes />
        </section>
      </div>
    </div>
  );
}

export default App;
