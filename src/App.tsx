import AdminRoutes from 'routes/admin-routes';

import Aside from 'ui/partials/aside/aside';
import Header from 'ui/partials/header/header';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app-container">
        <Aside />

        <section className="main-content">
          <AdminRoutes />
        </section>
      </div>
    </div>
  );
}

export default App;
