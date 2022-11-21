import { createContext, useCallback, useReducer } from 'react';

import TestContextReducer, { increaseState, updateState } from 'contexts/test-context/testContextReducer';

export interface ITestContext {
  test?: number;
}

interface ITestContextProvider {
  children?: JSX.Element;
}

export const initialState = {
  test: 7,
} as ITestContext;

export const TestContext = createContext<{
  state: ITestContext;
  updateStateWithDispatch: (params: ITestContext) => void;
  increaseStateWithDispatch: (params: ITestContext) => void;
}>({
  state: initialState,
  updateStateWithDispatch: () => null,
  increaseStateWithDispatch: () => null,
});

const TestContextProvider = ({ children }: ITestContextProvider) => {
  const [state, dispatch] = useReducer(TestContextReducer, initialState);

  const updateStateWithDispatch = useCallback((params: ITestContext) => {
    dispatch(updateState(params));
  }, []);

  const increaseStateWithDispatch = useCallback((params: ITestContext) => {
    dispatch(increaseState(params));
  }, []);

  return (
    <TestContext.Provider value={{ state, updateStateWithDispatch, increaseStateWithDispatch }}>
      {children}
    </TestContext.Provider>
  );
};

export default TestContextProvider;
