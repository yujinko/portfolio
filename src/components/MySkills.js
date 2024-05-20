import React from 'react'

//import global styles
import {
    FlexContainer,
    PaddingContainer,
    Heading,
    IconContainer,
    ParaText,
    BlueText,
} from '../styles/Global.styled';

//import My Skills styles
import {
    SkillsCardContainer,
    SkillsCard,
} from '../styles/MySkills.styled';

import { Skills } from '../utils/Data';

export const MySkills = () => {
  return (
    <PaddingContainer
        id="Skills"
        top="7%"
        bottom="10%"
    >
        <FlexContainer fullWidthChild>

            {/* --left-section-- */}
            <SkillsCardContainer>
                {Skills.map((skill) => (
                    <SkillsCard>
                        <IconContainer size="5rem" color="white">
                            {skill.icon}
                        </IconContainer>

                        <Heading as="h4" size="h4">
                            {skill.tech}
                        </Heading>
                        
                    </SkillsCard>
                ))}
            </SkillsCardContainer>
            
            {/* --right-section-- */}
            <div>
                <Heading as="h4" size="h4">
                    MY SKILLS
                </Heading>
                <Heading as="h2" size="h2" top="0.5rem">
                    What <BlueText>I can do</BlueText>
                </Heading>

                <ParaText top="2rem" bottom="1.5rem">
                    React JS, Html, CSS, JavaScript를 사용할 수 있습니다. 
                </ParaText>

                <ParaText top="2rem" bottom="1.5rem">
                    프론트엔드 개발에 필요한 다양한 프로그램들을 익히고 있습니다.
                </ParaText>

                 
            </div>
        </FlexContainer>
    </PaddingContainer>
  )
}

export default MySkills