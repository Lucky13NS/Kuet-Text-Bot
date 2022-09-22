import React from 'react';
import { useState, useEffect} from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLinkToSignin,
  NavBtnLinkToLogin
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(Window.scrolly >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
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
          <NavBtnLinkToLogin to='/login'>LOGIN</NavBtnLinkToLogin>
          <NavBtnLinkToSignin to='/signin'>Sign In</NavBtnLinkToSignin>
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