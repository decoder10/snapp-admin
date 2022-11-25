import Auth from 'Auth';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from 'configs/store';

import 'assets/styles/admin.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Auth />
  </Provider>,
);
