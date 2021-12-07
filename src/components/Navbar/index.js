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
          <h1 className="title">Kinoname</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/program' activestyle="true" >
            Program
          </NavLink>
          <NavLink to='/movie' activestyle="true">
            Movie
          </NavLink>
          <NavLink to='/booking'activestyle="true">
            Booking
          </NavLink>
          <NavLink to='/signin' activestyle="true">
            Login
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;