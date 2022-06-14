import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/Logo.svg"


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar__nav-center">
        <Link to="/">
          <img className='navbar__nav-center--logo' src={Logo} alt="Logo" />
        </Link>
        <ul>
        <li>
       <Link to="/">
          Home
        </Link>
       </li>
       <li>
       <Link to="/About">
          About
        </Link>
       </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar