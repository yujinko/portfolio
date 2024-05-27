import React from 'react'

import {
    PaddingContainer,
    Heading,
    BlueText,
    ParaText,
} from '../styles/Global.styled';

export const MyProjects = () => {
  return (
    <PaddingContainer
        id="Projects"
        top="5%"
        bottom="5%"
    >
        <Heading as="h4" size="h4">
            MY PROJECTS
        </Heading>

        <Heading as="h2" size="h2"> 
            What <BlueText>I have built</BlueText>
        </Heading>

        <ParaText top="2rem" bottom="1.5rem">
            Coming Soon!
        </ParaText>

    </PaddingContainer>
  )
}

export default MyProjects