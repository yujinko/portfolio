import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../components/api';
import axios from 'axios';
import { ButtonContainer, ContentContainer, InputTitleContainer, TitleContainer, WritePageContainer } from './Write.styled';
import { ListItemContainer, PostTitle } from './List.styled';
import styled from 'styled-components';
import { fetchPostDetail } from './api';

function PostDetail() {
  const { postid } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const getPostDetail = async () => {
    try {
      const data = await fetchPostDetail(postid);
      setPost(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    getPostDetail();
  }, [postid]);


  if (!post) {
    return <div>Loading...</div>;
  }

  const postEdit = async () => {
    navigate(`/edit/${postid}`);
  };

  const postDelete = () => {
    navigate(`/delete/${postid}`);
  };

  return (
    <WritePageContainer>
      <ContentContainer>
        <div>
          <PostTitle>
            제목: {post.title}
          </PostTitle>
          <ListItemContainer>
            내용: {post.body}
          </ListItemContainer>
        </div>
      </ContentContainer>
      <div>
        <ButtonContainer onClick = {postEdit}>수정하기</ButtonContainer>
        <ButtonContainer onClick= {postDelete}>삭제하기</ButtonContainer>
      </div>
    </WritePageContainer>

    
  );
}

export default PostDetail;

