import React from 'react'
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'><img src="/src/assets/logo.png" alt="Logo unvailable" className="logo"/></Link>
  )
}
export default Logo;
