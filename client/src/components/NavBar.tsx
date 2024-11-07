// import React from "react"
import { Link } from 'react-router-dom';

const NavBar = () => {
  // TODO: Add 'Welcome Username' at the end of the navbar if the user is logged in

  return (
    <nav className='d-flex container-fluid justify-content-end'>
      <Link to="/" className='text-decoration-none me-3 d-flex align-items-center'>
        <div className="d-flex bg-primary h-50 align-items-center rounded ps-3 pe-3 text-black">
          Home
        </div>
      </Link>
      <Link to="/login" className='text-decoration-none me-3 d-flex align-items-center'>
        <div className="d-flex bg-primary h-50 align-items-center rounded ps-3 pe-3 text-black">
          Login
        </div>
      </Link>
    </nav>
  )
}

export default NavBar