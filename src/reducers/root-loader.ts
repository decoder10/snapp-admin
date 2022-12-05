import { createSlice } from '@reduxjs/toolkit';

export interface ILoaderState {
  loading: boolean;
}

const initialState: ILoaderState = {
  loading: true,
};

export const rootLoaderSlice = createSlice({
  name: 'rootLoaderStore',
  initialState,
  reducers: {
    setLoaderAction: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoaderAction } = rootLoaderSlice.actions;

export const getRootLoaderState = (state: RootState) => state.rootLoaderStore.loading;

export default rootLoaderSlice.reducer;
