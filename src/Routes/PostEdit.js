import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../components/api';
import axios from 'axios';
import { 
    WritePageContainer, 
    TitleContainer, 
    ContentContainer, 
    InputTitleContainer, 
    InputWrapContainer, 
    InputContainer, 
    ButtonContainer } from './Write.styled';
import { ListItemContainer, PostTitle, UpdateTitle, UpdateContent } from './List.styled';
import styled from 'styled-components';
import { fetchPostDetail } from './api';

function PostEdit() {
    const { postid } = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

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


    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setPost({...post, [name]: value});
    };

    const handleUpdate = async () => {
      const token = sessionStorage.getItem('access');

      try{
        await axios.put(`https://hufs-mutsa-12th.store/blog/${postid}/`, post, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert('수정 성공');
        navigate(`/post/${postid}`);
      } catch (error) {
        console.log(error.response.data);
        alert('수정 실패');
      }
    };

    if (!post) {
      return <div>Loading...</div>;
  }

  return (
    <WritePageContainer>
      <ContentContainer>
        <div>
          <UpdateTitle
              type="text" 
              name="title" 
              value={post.title} 
              onChange={handleInputChange} 
          />
          <UpdateTitle
            name="body" 
            value={post.body} 
            onChange={handleInputChange} 
          />
        </div>

        <ButtonContainer onClick={handleUpdate}>수정 완료</ButtonContainer>
      </ContentContainer>
    </WritePageContainer>
  );
}

export default PostEdit;