import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import  { BrowserRouter} from 'react-router-dom';
import { MainRoutes } from './routes/MainRoutes';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
