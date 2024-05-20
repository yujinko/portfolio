import React from 'react'

//import global styles
import {
    FlexContainer,
    PaddingContainer,
    Container,
} from '../styles/Global.styled';

//import Footer styles
import {
    FooterContainer,
    End,
} from '../styles/Footer.styled';

import { theme } from '../utils/Theme';

const Footer = () => {
  return (
    <FooterContainer bgColor = "#b3cfff">
        <PaddingContainer
            top="1.2rem"
            bottom="1.2rem"
        >
          <End>Thank you!</End>
        </PaddingContainer>
    </FooterContainer>
  )
}

export default Footer