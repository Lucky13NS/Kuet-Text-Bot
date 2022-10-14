import React from 'react';
import { useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLinkToSignin,
  NavBtnLinkToLogin,
  MobileIcon
} from './NavbarElements';
import Sidebar from '../Sidebar/index';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
      if(window.scrollY >= 250) {
          setScrollNav(true)
      } else {
          setScrollNav(false)
      }
  }

  useEffect(() => {
      window.addEventListener('scroll', changeNav)
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavLink to='/'>

            <img src={require('../../images/logo.png')} alt='logo' />

        </NavLink>

        <MobileIcon onClick={toggle}>
                        <FaBars />
        </MobileIcon>
        {/* <Bars /> */}
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
          <NavBtnLinkToSignin to='/signin'>SIGN IN</NavBtnLinkToSignin>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;