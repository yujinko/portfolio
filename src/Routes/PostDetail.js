import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../components/api';
import axios from 'axios';

function PostDetail() {
  const { postid } = useParams();
  const [post, setPost] = useState(null);

  const fetchPostDetail = async () => {
    const token = sessionStorage.getItem('access');
    console.log('Retrieved token:', token);

    try {
      const response = await axios.get(`https://hufs-mutsa-12th.store/blog/${postid}/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('응답완료', response.data);
      setPost(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchPostDetail();
  }, [postid]);


  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetail;
