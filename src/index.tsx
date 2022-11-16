import React from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from 'configs/store';

import { getGameUrlInfoParams } from 'utils/game-info-params';

import App from './App';

import 'assets/styles/app.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

const gameUrlInfoParams = getGameUrlInfoParams();

root.render(
  <Provider store={store}>
    <App gameUrlInfoParams={gameUrlInfoParams} />
  </Provider>,
);
