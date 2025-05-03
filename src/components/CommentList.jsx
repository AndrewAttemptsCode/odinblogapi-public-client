import { formatDate, formatTime } from "../utils";

const CommentList = ({ postComments }) => {
  return (
    <>
      {postComments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.author.username}</p>
          <p>{formatDate(comment.createdAt)}</p>
          <p>{formatTime(comment.createdAt)}</p>
          <p>{comment.text}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default CommentList;