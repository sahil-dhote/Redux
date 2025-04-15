// Taken the code reference from this url - https://redux-toolkit.js.org/tutorials/quick-start
// Name is - features/counter/counterSlice.js

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter', 
  initialState,
  reducers: {
    increment: (state) => { // This is logic for incrementing
      state.value += 1
    },
    decrement: (state) => { // This is logic for derementing
      state.value -= 1
    },
    reset: (state) =>{
        state.value = 0;
    },
    incrementByAmount: (state, action) => { // This is logic for increasing by amount
      state.value += Number(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer