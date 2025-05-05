import { useState } from "react";

const CreateComment = ({ postId, refreshComments }) => {
  const [commentText, setCommentText] = useState('');
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:8080/posts/${postId}/comments`, {
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
    }
  }

  const handleOnChange = (event) => {
    setCommentText(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" id="text" value={commentText} onChange={handleOnChange} placeholder="Drop a comment..." />
      <p>{errors?.find(error => error.path === 'text')?.msg}</p>
      <p>{errors?.find(error => error.path === 'auth')?.msg}</p>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default CreateComment;