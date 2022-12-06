import { createSlice } from '@reduxjs/toolkit';

export interface IMenuState {
  opened: boolean;
}

const initialState: IMenuState = {
  opened: true,
};

export const menuStateSlice = createSlice({
  name: 'menuStateStore',
  initialState,
  reducers: {
    setMenuStateAction: (state, action) => {
      state.opened = action.payload;
    },
  },
});

export const { setMenuStateAction } = menuStateSlice.actions;

export const getMenuState = (state: RootState) => state.menuStateStore.opened;

export default menuStateSlice.reducer;
