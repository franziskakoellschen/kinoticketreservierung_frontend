import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Logo</h1>
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
          <NavLink to='/sign-up' activestyle="true">
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;