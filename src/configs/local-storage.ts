import { AxiosResponse } from 'axios';

export const saveLocalStorage = (
  name: string,
  state: Record<string, unknown> | string | AxiosResponse<IKeyValueObject>,
) => {
  const serializedState = JSON.stringify(state);

  localStorage.setItem(name, serializedState);
};

export const loadLocalStorage = (name: string) => JSON.parse(localStorage.getItem(name) || '{}');

export const saveSessionStorage = (name: string, state: Record<string, unknown> | string) => {
  const serializedState = JSON.stringify(state);
  window.sessionStorage.setItem(name, serializedState);
};

export const loadSessionStorage = (name: string) => JSON.parse(window.sessionStorage.getItem(name) || '{}');
