import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { Outlet, Link } from "react-router-dom";




const Menu = () => (
  <>
  <p><Link to='/'>Home</Link></p>
  <p><Link to='/commands'>Commands</Link></p>
  </>
)

const Layout = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
    <nav className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar-sign">
        <p><a href="/"> Documentation</a></p>
        <button type="button">Invite</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
          <Menu />
          </div>
          <div className="navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </nav>
    <Outlet />
    </>
)};

export default Layout;

