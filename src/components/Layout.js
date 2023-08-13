import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './Layout.css';



const Layout = () => {
  return (
    <>

      <nav className='mb-4'>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Car Star</a>
          <a href="#" class="menu-icon">&#9776;</a>
          <ul class="nav-menu">
            <li><a>About</a></li>
            <li><Link to="product"><a>Product</a></Link></li>
            <li><Link to="/contact"><a>Contact</a></Link></li>
            <li><Link to="/login"><a>Login</a></Link></li>
            <li><Link to="/reg"><a>Sign Up</a></Link></li>
          </ul>
        </div>

      </nav>
      
      <div className='container'>
      


      
      </div>

      <Outlet />

    </>
  )
}
export default Layout;
