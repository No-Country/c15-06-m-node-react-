import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router } from './router/Routes'
import { Provider } from 'react-redux'
import store from './redux/Store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router />
  </Provider>
)
