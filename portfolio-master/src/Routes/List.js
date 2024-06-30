import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';

import { 
  WritePageContainer, 
  TitleContainer, 
  InputTitleContainer, 
} from './Write.styled';

import { 
  ContentContainer, 
  ListItemContainer, 
  ListItemContent,
  StyledLink
} from './List.styled';

function List() {
  const [post, setPosts] = useState([]);
  const [id, setId] = useState('');
  const [user, setUser] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // useEffect(()=> {
  //   const PostList = [
  //     {id: 1, title: '하잉', body: '하이'},
  //     {id: 2, title: '게시글2', body: '두 번째 글입니다.'},
  //     {id: 3, title: '게시글3', body: '세 번째 글입니다.'},
  //   ];
  //   setPosts(PostList);
  // }, []);

  const handlePost = async () => {
    try {
      const response = await axios.get('https://hufs-mutsa-12th.store/blog/', {
      });
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  handlePost();
  return (
    <WritePageContainer>
      <TitleContainer>
        게시글 목록 페이지입니다.
      </TitleContainer>
      <ContentContainer>
        {post.map((post) => (
          <ListItemContainer key={post.id}>
            <StyledLink to={`/pages/${post.id}`}>
              <InputTitleContainer>{post.title}</InputTitleContainer>
              <ListItemContent>{post.body}</ListItemContent>
            </StyledLink>
          </ListItemContainer>
        ))}
      </ContentContainer>
    </WritePageContainer>
  );
}

export default List;