import React from 'react'
import { Link } from 'react-router-dom'; 

//import global styles
import {
    FlexContainer,
    PaddingContainer,
    Container,
} from '../styles/Global.styled';

//import Navbar styles
import {
    NavbarContainer,
    Logo,
    MenuIcon,
} from '../styles/Navbar.styled';

import { theme } from '../utils/Theme';

const Navbar = () => {
  return (
    <NavbarContainer bgColor = "#b3cfff">
        <PaddingContainer
            top="1.2rem"
            bottom="1.2rem"
        >
            <Container>
                <FlexContainer justify="space-between">

                    {/* --left-logo-- */}
                    <Logo>
                        <span>멋쟁이사자처럼</span>
                    </Logo>

                    {/* --right-menu-icon-- */}
                    <MenuIcon>
                    <span><Link to="/">Main Page</Link></span> 
                    <span><Link to="/write">Write</Link></span> 
                    <span><Link to="/list">List</Link></span> 
                    </MenuIcon>
                </FlexContainer>
            </Container>
        </PaddingContainer>
    </NavbarContainer>
  )
}

export default Navbar