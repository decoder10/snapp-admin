import { ITestContext } from 'contexts/test-context/index';

export interface ITestContextReducer {
  type?: string;
  payload?: ITestContext;
}

export const UPDATE_STATE = 'UPDATE_STATE';
export const INCREASE_STATE = 'INCREASE_STATE';

export const updateState = (payload: ITestContext) => ({ type: UPDATE_STATE, payload });
export const increaseState = (payload: ITestContext) => ({ type: INCREASE_STATE, payload });

const TestContextReducer = (state: ITestContext, { type, payload }: ITestContextReducer) => {
  switch (type) {
    case UPDATE_STATE: {
      return { ...state, ...payload };
    }
    case INCREASE_STATE: {
      return { ...state, ...{ test: (payload?.test || 1) + 1 } };
    }
    default:
      return state;
  }
};

export default TestContextReducer;
