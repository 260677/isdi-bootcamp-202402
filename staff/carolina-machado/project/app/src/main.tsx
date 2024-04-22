import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.sass'
import { BrowserRouter as Router } from 'react-router-dom'
import { logger, Logger } from './utils'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <App />
  </Router>
)
