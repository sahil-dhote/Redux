//Taken the code reference from this url - https://redux-toolkit.js.org/introduction/why-rtk-is-redux-today


import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import userReducer from '../features/userInfo/userSlice';
import themeReducer from '../features/theme/themeSlice';


export const store = configureStore({
  reducer: {
    // we are getting the name "counter" as we have created variable in "counterSlice.js" file "name: 'counter'"
    counter: counterReducer,
    user: userReducer,
    theme: themeReducer, 
  },
})