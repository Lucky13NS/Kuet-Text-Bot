import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SidebarWrapper, SideBarMenu, SideBarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onclick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SideBarMenu>
                    <SideBarLink to='/home' onClick={toggle}>HOME</SideBarLink>
                    <SideBarLink to='/files' onClick={toggle}>FILES</SideBarLink>
                    <SideBarLink to='/explore' onClick={toggle}>EXPLORE</SideBarLink>
                    <SideBarLink to='/help' onClick={toggle}>HELP</SideBarLink>
                    <SideBarLink to='/submit' onClick={toggle}>SUBMIT</SideBarLink>
                    <SideBarLink to='/about_us' onClick={toggle}>ABOUT US</SideBarLink>

                    <SideBtnWrap>
                        <SidebarRoute to="login">LOGIN</SidebarRoute>
                    </SideBtnWrap>
                    <SideBtnWrap>
                    <   SidebarRoute to="Signin">Sign In</SidebarRoute>
                    </SideBtnWrap>

                </SideBarMenu>

            </SidebarWrapper>
        </SideBarContainer>
    )
}

export default Sidebar;