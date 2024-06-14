import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css';

function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
             <div className="container-fluid mx-auto">
            <ul className='nav justify-content-end w-100 ml-2' >
                <li className="nav-item">
                    <NavLink to='/' className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/login' className="nav-link">Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/signup' className="nav-link">SignUp</NavLink>
                </li> 
            </ul>
            </div>
        </nav>
    </div>

  )
}

export default NavBar