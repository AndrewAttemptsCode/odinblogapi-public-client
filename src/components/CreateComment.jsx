import { useState } from "react";

const CreateComment = () => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Do this tomorrow, handle the comment POST
    // /posts/:postId/comments restful route
  }

  const handleOnChange = (event) => {
    setCommentText(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" id="text" value={commentText} onChange={handleOnChange} placeholder="Drop a comment..." />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default CreateComment;