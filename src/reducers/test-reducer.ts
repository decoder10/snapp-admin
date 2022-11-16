import { createSlice } from '@reduxjs/toolkit';

export interface TestState {
  test: Array<string>;
}

const initialState: TestState = {
  test: [],
};

export const testSlice = createSlice({
  name: 'testStore',
  initialState,
  reducers: {
    testAction: (state, action) => {
      state.test = action.payload;
    },
  },
});

export const { testAction } = testSlice.actions;

export const getTest = (state: RootState) => state.testStore;

export default testSlice.reducer;
