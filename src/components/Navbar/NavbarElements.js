import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? 'rgba(0,0,0,0.5)' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: space-between;
  padding: .5rem calc((130vw - 1000px) / 10);
  z-index: 1;
  top: 0;
  position: sticky;

  @media screen and (max-width: 1060px) {
    transition: 1s all ease;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  &:hover {
    scale: 1.3;
    originX: 0;
    transition: 0.4s all ease;

  }
  &.active {
    color: rgba(1, 176, 65, 1);
  }

`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 820px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }

`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap; 

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const NavBtnLinkToSignin = styled(Link)`
  border-radius: 40px;
  background: rgba(1, 176, 65, 1);
  padding: 3px 24px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 30px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const NavBtnLinkToLogin = styled(Link)`
  border-radius: 40px;
  padding: 3px 24px;
  color: #fff;
  outline: none;
  border: 2px solid black;
  border-color: rgba(1, 176, 65, 1);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 30px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 820px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`