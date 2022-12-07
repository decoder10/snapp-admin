import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface IAuthenticationState {
  authentication: Authentication;
  errors: Nullable<string>;
  status: 'success' | 'loading' | 'failed' | null;
}

const initialState: IAuthenticationState = {
  authentication: null,
  errors: null,
  status: null,
};

export const userAuthenticate = createAsyncThunk('request', async (data: IAuthFormFields) => {
  const response = { authentication: { token: 'eyJhbGciOiJIUzI1NiI', refreshToken: 'eyJhbGciOiJIUz' } };
  return response.authentication;
});

export const authenticationSlice = createSlice({
  name: 'authenticationStore',
  initialState,
  reducers: {
    updateAuthenticationAction: (state, action) => {
      state.authentication = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(userAuthenticate.pending, state => {
        state.status = 'loading';
      })
      .addCase(userAuthenticate.fulfilled, (state, action) => {
        state.status = 'success';
        state.authentication = action.payload;
      })
      .addCase(userAuthenticate.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const { updateAuthenticationAction } = authenticationSlice.actions;

export const getAuthentication = (state: RootState) => state.authenticationStore;
export const getIsAuth = (state: RootState) => state.authenticationStore.authentication;

export default authenticationSlice.reducer;
