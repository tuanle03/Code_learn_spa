import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <ForgotPassword />
    </Router>

  </React.StrictMode>,
)
