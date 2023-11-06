import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Test from './test.jsx'

// styles
import './styles/globals.css'
import './styles/mynormalize.css'

// redux/toolkit
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

// skeleton
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      {/* <App /> */}
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Test />
      </SkeletonTheme>
    </Provider>
  </React.StrictMode>,
)
