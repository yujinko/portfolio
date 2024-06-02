import React, { useState } from 'react'

import { 
  WritePageContainer, 
  TitleContainer, 
  ContentContainer, 
  InputTitleContainer, 
  InputWrapContainer, 
  InputContainer, 
  ButtonContainer } from './Write.styled';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  function IdChange(e) {
    console.log(e);
    setId(e.target.value);
  };

  function PwChange(e) {
    console.log(e);
    setPw(e.target.value);
  };

  return (
    <WritePageContainer>
      <TitleContainer>
        로그인 페이지입니다.
      </TitleContainer>
      <ContentContainer>
        <InputTitleContainer>아이디</InputTitleContainer>
        <InputWrapContainer>
          <InputContainer placeholder = "아이디를 입력해주세요."
          value={id}
          onChange={IdChange}/>
        </InputWrapContainer>

        <InputTitleContainer>비밀번호</InputTitleContainer>
        <InputWrapContainer>
          <InputContainer placeholder = "비밀번호를 입력해주세요."
          value={pw}
          onChange={PwChange}/>
        </InputWrapContainer>
      </ContentContainer>

      <div>
        <ButtonContainer>
          로그인하기
        </ButtonContainer>
      </div>
    </WritePageContainer>
  );
}

export default Login;