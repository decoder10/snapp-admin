type TOnKeyDown = (event: { key: string }, key: string, callback: () => void) => void;

export const useKeyDown = (): readonly [onKeyDown: TOnKeyDown] => {
  const onKeyDown: TOnKeyDown = (event, key, callback) => {
    if (event.key === key) {
      callback();
    }
  };

  return [onKeyDown] as const;
};
