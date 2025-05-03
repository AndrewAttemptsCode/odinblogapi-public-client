import { formatDate, formatTime } from "../utils";

const CommentItem = ({ comment }) => {
  return (
    <div>
      <p>{comment.author.username}</p>
      <p>{formatDate(comment.createdAt)}</p>
      <p>{formatTime(comment.createdAt)}</p>
      <p>{comment.text}</p>
      <hr />
    </div>
  );
};

export default CommentItem;