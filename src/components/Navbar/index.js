import "./index.css"

import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

const Navbar = ({user}) => {

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1 className="title">Theatery</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/program' activestyle="true" >
            Programm
          </NavLink>
          { user && user.token && ( <NavLink to='/profile' activestyle="true">{user.username}</NavLink>)}
          {!user && ( <NavLink to='/login' activestyle="true">Login</NavLink>)}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;