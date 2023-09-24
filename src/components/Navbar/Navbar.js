import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav className='nav-container'>
        <ul className='ul-container'>
        <Link className='li-items' to="/">HOME</Link>
        <Link className='li-items' to="/it">IT JOBS</Link>
        <Link className='li-items' to="/internship">INTERNSHIPS</Link>
        <Link className='li-items' to="/wfh">WORK FROM HOME</Link>
        <Link className='li-items' to="/about">ABOUT US</Link>
        <Link className='li-items' to="/contact">CONTACT US</Link>
        <Link className='li-items' to="/privacy">PRIVACY POLICY</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
