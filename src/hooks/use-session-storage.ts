type TAddSessionStorage = (name: string, state: Undefined<object>) => void;
type TGetSessionStorage = (name: string) => Record<string, unknown>;
type TRemoveSessionStorage = (name: string) => void;

export const useSessionStorage = (): readonly [
  addSessionStorage: TAddSessionStorage,
  getSessionStorage: TGetSessionStorage,
  removeSessionStorage: TRemoveSessionStorage,
] => {
  const addSessionStorage: TAddSessionStorage = (name, state) => {
    const serializedState = JSON.stringify(state);

    window.sessionStorage.setItem(name, serializedState);
  };

  const removeSessionStorage: TRemoveSessionStorage = name => {
    window.sessionStorage.removeItem(name);
  };

  const getSessionStorage: TGetSessionStorage = name => JSON.parse(window.sessionStorage.getItem(name) || '{}');

  return [addSessionStorage, getSessionStorage, removeSessionStorage] as const;
};
