import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface TestRequestState {
  test: Nullable<Array<string>>;
  errors: Nullable<string>;
  status: 'success' | 'loading' | 'failed' | null;
}

const initialState: TestRequestState = {
  test: null,
  errors: null,
  status: null,
};

export const request = createAsyncThunk('request', async (data: Nullable<Array<string>>) => {
  const response = { data: ['1', '2'] };
  return response.data;
});

export const testRequestSlice = createSlice({
  name: 'testRequestStore',
  initialState,
  reducers: {
    testRequestAction: (state, action) => {
      state.test = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(request.pending, state => {
        state.status = 'loading';
      })
      .addCase(request.fulfilled, (state, action) => {
        state.status = 'success';
        state.test = action.payload;
      })
      .addCase(request.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const { testRequestAction } = testRequestSlice.actions;

export const getTestRequest = (state: RootState) => state.testRequestStore;

export default testRequestSlice.reducer;
