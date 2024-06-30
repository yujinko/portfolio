import axios from 'axios';

export const fetchPostDetail = async (postid) => {
  const token = sessionStorage.getItem('access');
  try {
    const response = await axios.get(`https://hufs-mutsa-12th.store/blog/${postid}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error.response.data);
    throw error;
  }
};
