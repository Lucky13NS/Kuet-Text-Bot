import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
import { NavLink as Link } from 'react-router-dom';





export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: auto;
    background: #0d0d0d;
    backg
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3 ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

`;

export const closeIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outLine: none;

`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SideBarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2 ease-in-out;

    }
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;

`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;

`;

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-colimns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarRoute = styled(LinkR)`
border-radius: 70px;
background: #01bf71;
white-space: nowrap;
padding: 12px 50px;
color: #fff;
font-size: 17px;
outline: none;
border: none;
cursor: pointer;
margin-bottom: 40px;
transition: all 0.2s ease-in-out;
text-decoration: none;


&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`;
