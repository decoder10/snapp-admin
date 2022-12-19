const useSessionStorage: () => [
  (name: string, state: Undefined<object>) => void,
  (name: string) => void,
  (name: string) => object,
] = () => {
  const addSessionStorage = (name: string, state: Undefined<object>) => {
    const serializedState = JSON.stringify(state);

    window.sessionStorage.setItem(name, serializedState);
  };

  const removeSessionStorage = (name: string) => {
    window.sessionStorage.removeItem(name);
  };

  const getSessionStorage = (name: string) => JSON.parse(window.sessionStorage.getItem(name) || '{}');

  return [addSessionStorage, removeSessionStorage, getSessionStorage];
};

export default useSessionStorage;
