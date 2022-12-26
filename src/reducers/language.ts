import { createSlice } from '@reduxjs/toolkit';

export interface LanguageIdState {
  languageId: string;
}

const initialState: LanguageIdState = {
  // todo should be default language
  languageId: 'eng',
};

export const languageIdSlice = createSlice({
  name: 'languageIdStore',
  initialState,
  reducers: {
    languageIdAction: (state, action) => {
      state.languageId = action.payload;
    },
  },
});

export const { languageIdAction } = languageIdSlice.actions;

export const getLanguageId = (state: RootState) => state.languageIdStore.languageId;

export default languageIdSlice.reducer;
