import React, { useState } from 'react'

import { 
  WritePageContainer, 
  TitleContainer, 
  ContentContainer, 
  InputTitleContainer, 
  InputWrapContainer, 
  InputContainer, 
  ButtonContainer } from './Write.styled';

function Write() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function TitleChange(e) {
    console.log(e);
    setTitle(e.target.value);
  };

  function ContentChange(e) {
    console.log(e);
    setContent(e.target.value);
  };

  return (
    <WritePageContainer>
      <TitleContainer>
        글쓰기 페이지입니다.
      </TitleContainer>
      <ContentContainer>
        <InputTitleContainer>게시글 제목</InputTitleContainer>
        <InputWrapContainer>
          <InputContainer placeholder = "제목을 입력해주세요."
          value={title}
          onChange={TitleChange}/>
        </InputWrapContainer>

        <InputTitleContainer>게시글 내용</InputTitleContainer>
        <InputWrapContainer>
          <InputContainer placeholder = "내용을 입력해주세요."
          value={content}
          onChange={ContentChange}/>
        </InputWrapContainer>
      </ContentContainer>

      <div>
        <ButtonContainer>
          게제하기
        </ButtonContainer>
      </div>
    </WritePageContainer>
  );
}

export default Write;