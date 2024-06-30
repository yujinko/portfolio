import React from 'react';

import { 
    WritePageContainer, 
    TitleContainer, 
    ContentContainer, 
    InputTitleContainer, 
    InputWrapContainer, 
    InputContainer, 
    ButtonContainer } from './Write.styled';

function Page() {
    return (
        <WritePageContainer>
        <TitleContainer>
          하잉
        </TitleContainer>
        <ContentContainer>
          <InputTitleContainer>하이</InputTitleContainer>
        </ContentContainer>
      </WritePageContainer>
    );
}

export default Page;