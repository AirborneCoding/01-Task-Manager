import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// styles
import './styles/globals.css'
import './styles/mynormalize.css'

// redux/toolkit
import {store} from './redux/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)