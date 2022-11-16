import { createSlice } from '@reduxjs/toolkit';

export interface BTCValueState {
  value: string;
}

const initialState: BTCValueState = {
  value: '',
};

export const btc = createSlice({
  name: 'btc',
  initialState,
  reducers: {
    setBTCValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBTCValue } = btc.actions;

export const getBTC = (state: RootState) => state.btc;

export default btc.reducer;
