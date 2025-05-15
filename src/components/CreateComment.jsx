import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 75ch;
  color: #111827;

  & textarea {
    resize: vertical;
    width: 100%;
    height: 100px;
    padding: 0.5rem;
  }

  & button {
    border: none;
    border-radius: 5px;
    padding: 8px;
    background-color: #3B82F6;
    color: #F9FAFB;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  & p {
    color: red;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`

const CreateComment = ({ postId, refreshComments }) => {
  const [commentText, setCommentText] = useState('');
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    try {
      setLoading(true);

      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ text: commentText }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }
      }

      if (response.ok) {
        setCommentText('');
        refreshComments();
        setErrors(null);
      }

    } catch (error) {
      console.error('Create comment error:', error);
      setErrors([{ path: 'text', msg: 'Internal Server Error' }]);
    } finally {
      setLoading(false);
    }
  }

  const handleOnChange = (event) => {
    setCommentText(event.target.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <textarea name="text" id="text" value={commentText} onChange={handleOnChange} placeholder="Drop a comment..."></textarea>
      <Info>
        <button type="submit" disabled={loading}>{loading ? 'Processing...' : 'Send Message'}</button>
        <p>{errors?.find(error => error.path === 'text')?.msg}</p>
        <p>{errors?.find(error => error.path === 'auth')?.msg}</p>
      </Info>
    </Form>
  );
};

export default CreateComment;