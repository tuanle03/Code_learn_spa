import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css'
// import Header from './components/Header/Header.tsx'
import Footer from './components/Footer/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      {/* <Header signIn={false} avatar='' username=''/> */}
      {/* <Header signIn={true} avatar='src\assets\avatar.png' username='Bông Hub'/> */}
      <Footer />
    </Router>
  </React.StrictMode>,
)