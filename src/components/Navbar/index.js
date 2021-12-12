import "./index.css"

import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

const Navbar = ({loggedIn, userFirstName}) => {
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
          { loggedIn && ( <NavLink to='/logout' activestyle="true">{userFirstName}</NavLink>)}
          {!loggedIn && ( <NavLink to='/login' activestyle="true">Login</NavLink>)}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;