// Taken the code reference from chatgpt

import { createSlice } from '@reduxjs/toolkit';

const initialState = 'light'

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => (state === 'light' ? 'dark' : 'light'),
  },
});

// Export actions
export const { toggleTheme } = themeSlice.actions;

// Export reducer
export default themeSlice.reducer;
