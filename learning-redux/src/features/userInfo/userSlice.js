// Taken the code reference from chatgpt

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: 'John Doe', 
    role: 'Admin' 
}

export const userSlice = createSlice({
  name: 'user', 
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.name = action.payload.name;
        state.role = action.payload.role;
      }
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer