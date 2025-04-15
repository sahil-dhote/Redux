//We have taken the reference from this link - https://redux-toolkit.js.org/tutorials/rtk-query
// Its named as - src/index.js

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { store } from './redux/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* We are providing this here so that it should be available in app.jsx i.e it should be available globally to everyone  */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
