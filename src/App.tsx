import AdminRoutes from 'routes/admin-routes';

import Aside from 'statics/aside/aside';
import Header from 'statics/header/header';

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
