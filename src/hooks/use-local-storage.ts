type TAddLocalStorage = (name: string, state: Undefined<object>) => void;
type TGetLocalStorage = (name: string) => Record<string, unknown>;
type TRemoveLocalStorage = (name: string) => void;

export const useLocalStorage = (): readonly [
  addLocalStorage: TAddLocalStorage,
  getLocalStorage: TGetLocalStorage,
  removeLocalStorage: TRemoveLocalStorage,
] => {
  const addLocalStorage: TAddLocalStorage = (name, state) => {
    const serializedState = JSON.stringify(state);

    localStorage.setItem(name, serializedState);
  };

  const removeLocalStorage: TRemoveLocalStorage = name => {
    localStorage.removeItem(name);
  };

  const getLocalStorage: TGetLocalStorage = name => JSON.parse(localStorage.getItem(name) || '{}');

  return [addLocalStorage, getLocalStorage, removeLocalStorage] as const;
};
