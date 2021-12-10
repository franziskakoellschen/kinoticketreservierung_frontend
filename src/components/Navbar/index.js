import "./index.css"

import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1 className="title">THEATERY</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/program' className="link" activeClassName="activeLink" >
            Program
          </NavLink>
          <NavLink to='/movie' className="link" activeClassName="activeLink">
            Movie
          </NavLink>
          <NavLink to='/booking' className="link" activeClassName="activeLink">
            Booking
          </NavLink>
          <NavLink to='/signin' className="link" activeClassName="activeLink">
            Login
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;