import { saveLocalStorage } from 'configs/local-storage';

export const getGameUrlInfoParams = (): IGameUrlInfoParamsProps => {
  const query = new URLSearchParams(window.location.search);

  const language = query.get('language');
  const mode = query.get('mode');
  const gameID = query.get('gameID');
  const token = query.get('token');
  const exitUrl = query.get('exitUrl');
  const depositUrl = query.get('depositUrl');

  saveLocalStorage('mode', mode || '');
  saveLocalStorage('lang', language || 'en');
  saveLocalStorage('exitUrl', exitUrl || '');
  saveLocalStorage('depositUrl', depositUrl || '');

  return {
    language: language || 'en',
    mode: mode || '',
    gameID: gameID || '',
    token: token || '',
    exitUrl: exitUrl || '',
    depositUrl: depositUrl || '',
  };
};
