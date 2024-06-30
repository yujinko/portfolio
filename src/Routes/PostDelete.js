import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function PostDelete() {
    const { postid } = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        const token = sessionStorage.getItem('access');

        try {
            await axios.delete(`https://hufs-mutsa-12th.store/blog/${postid}/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            navigate('/list');
        } catch (error) {
            console.log(error.response.data);
        }
    };

    useEffect(() => {
        handleDelete();
    }, [postid]);

    return <div>Deleting...</div>;
}
export default PostDelete;