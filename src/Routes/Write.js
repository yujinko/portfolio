import React, { useState } from 'react';
import api from '../components/api';

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
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

  const writePost = async () => {
    const data = {
      title: title,
      body: body,
    };
    try {
      const response = await api.post('https://hufs-mutsa-12th.store/blog/', data, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('access')}`
          }
        });
        console.log('응답완료', response);
        setPosts([...body, response.data]);
        setTitle('');
        setBody('');
        alert('게제 성공');
      } catch (error) {
        console.log('에러: ', error);
        alert('게제 실패');
    }
  };
  
  function TitleChange(e) {
    console.log(e);
    setTitle(e.target.value);
  };

  function BodyChange(e) {
    console.log(e);
    setBody(e.target.value);
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
          value={body}
          onChange={BodyChange}/>
        </InputWrapContainer>
      </ContentContainer>

      <div>
        <ButtonContainer onClick = {writePost}>
          게제하기
        </ButtonContainer>
      </div>
    </WritePageContainer>
  );
}

export default Write;