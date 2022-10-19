import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { Library } from '../LibraryApp'
import { store } from './store/store';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Library/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
