import Auth from 'Auth';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from 'configs/store';

import { MemoizedLoader } from 'statics/loader/loader';

import 'assets/styles/admin.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth />
    </BrowserRouter>
    <MemoizedLoader />
  </Provider>,
);
