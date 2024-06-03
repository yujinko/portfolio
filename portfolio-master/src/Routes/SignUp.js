import React, { useState } from 'react'
import axios from 'axios';
import { useCookies } from 'react-cookie';

import { 
  WritePageContainer, 
  TitleContainer, 
  ContentContainer, 
  InputTitleContainer, 
  InputWrapContainer, 
  InputContainer, 
  ButtonContainer } from './Write.styled';

function SignUp() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [nickname, setNickname] = useState('');
  const [uni, setUni] = useState('');
  const [loc, setLoc] = useState('');
  const [cookies, setCookie] = useCookies(['user']);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/dj/registration/', {
        id,
        pw,
        pw2,
        nickname,
        uni,
        loc,
      });
      
      setCookie('Token', response.data.token, {path:'/'});
      alert('회원가입 성공');
    } catch (error) {
      console.error(error);
      alert('회원가입 실패');
    }
  };

  function IdChange(e) {
    console.log(e);
    setId(e.target.value);
  };

  function PwChange(e) {
    console.log(e);
    setPw(e.target.value);
  };

  function Pw2Change(e) {
    console.log(e);
    setPw2(e.target.value);
  };

  function NicknameChange(e) {
    console.log(e);
    setNickname(e.target.value);
  };

  function UniChange(e) {
    console.log(e);
    setUni(e.target.value);
  };

  function LocChange(e) {
    console.log(e);
    setLoc(e.target.value);
  };

  return (
    <WritePageContainer>
      <TitleContainer>
        회원가입 페이지입니다.
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

        <InputTitleContainer>비밀번호 확인</InputTitleContainer>
        <InputWrapContainer>
          <InputContainer placeholder = "비밀번호를 다시 입력해주세요."
          value={pw2}
          onChange={Pw2Change}/>
        </InputWrapContainer>

        <InputTitleContainer>닉네임</InputTitleContainer>
        <InputWrapContainer>
          <InputContainer placeholder = "닉네임을 입력해주세요."
          value={nickname}
          onChange={NicknameChange}/>
        </InputWrapContainer>

        <InputTitleContainer>소속 대학</InputTitleContainer>
        <InputWrapContainer>
          <InputContainer placeholder = "소속 대학교를 입력해주세요."
          value={uni}
          onChange={UniChange}/>
        </InputWrapContainer>

        <InputTitleContainer>소속 대학교 지역</InputTitleContainer>
        <InputWrapContainer>
          <InputContainer placeholder = "소속 대학교 지역을 입력해주세요."
          value={loc}
          onChange={LocChange}/>
        </InputWrapContainer>

      </ContentContainer>
      

      <div>
        <ButtonContainer onClick={handleSubmit}>
          회원가입하기
        </ButtonContainer>
      </div>
    </WritePageContainer>
  );
}

export default SignUp;