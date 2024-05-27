import React from 'react'

//import global styles
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
} from '../styles/Global.styled';

//import showcase styles
import { 
    ShowcaseImageCard,
    ShowcaseParticleContainer,
} from '../styles/Showcase.styled';

//importing react-icons
import { BsTwitter, BsYoutube, BsInstagram, BsGithub } from "react-icons/bs";

//import asset
import ShowcaseImg from '../assets/showcase-img.png';


const Showcase = () => {
    return  (
        <PaddingContainer
            id="Home"
            left="3%"
            right="10%"
            top="15%"
            bottom="10%"
        >
            <FlexContainer align="center" fullWidthChild>
                {/* --left-content-- */}
                <div>
                    <Heading as="h4" size="h4">안녕하세요!</Heading>

                    <Heading
                        as="h2"
                        size="h2"
                        top="0.5rem"
                        bottom="1rem"
                    >

                        I'm <BlueText>Yujin Ko</BlueText>
                    </Heading>

                    <Heading as="h4" size="h4">
                        I'm a <BlueText>Frontend Developer</BlueText>
                    </Heading>

                    <ParaText as="p" top="2rem" bottom="1rem">
                        Welcome to my portfolio. 
                    </ParaText>

                    <ParaText as="p" top="1rem" bottom="4rem">
                    프론트엔드 개발자로서의 성장 과정을 확인할 수 있는 곳입니다.
                    </ParaText>

                    {/* --social-icons-- */}
                    <FlexContainer gap="20px">
                        <IconContainer color="black" size="1.5rem">
                            <BsTwitter />
                        </IconContainer>

                        <IconContainer color="black" size="1.5rem">
                            <BsYoutube />
                        </IconContainer>

                        <IconContainer color="black" size="1.5rem">
                            <BsInstagram />
                        </IconContainer>

                        <IconContainer color="black" size="1.5rem">
                            <BsGithub/>
                        </IconContainer>
                        
                    </FlexContainer>
                </div>

                {/* --right-content-- */}
                <FlexContainer justify="flex-end">
                    <ShowcaseParticleContainer>
                        <ShowcaseImageCard>
                            <img src={ShowcaseImg} alt="showcase" />
                        </ShowcaseImageCard>
                    </ShowcaseParticleContainer>
                </FlexContainer>
            </FlexContainer>
        </PaddingContainer>
    )
}

export default Showcase