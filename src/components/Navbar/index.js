import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  LoginBtn,
  SigninBtn,
  NavBtnLink,
  Logo,
  NavBtn
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>

            <img src={require('../../images/logo.png')} alt='logo' />


        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            HOME
          </NavLink>
          <NavLink to='/files' activeStyle>
            FILES
          </NavLink>
          <NavLink to='/explore' activeStyle>
            EXPLORE
          </NavLink>
          <NavLink to='/help' activeStyle>
            HELP
          </NavLink>
          <NavLink to='/submit' activeStyle>
            SUBMIT
          </NavLink>
          <NavLink to='/aboutUs' activeStyle>
            ABOUT US
          </NavLink>
          {/* Second Nav */}
          <NavBtnLink to='/login'>LOGIN</NavBtnLink>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/login'>LOGIN</NavBtnLink>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;