import { formatDate } from "../utils";

const PostItem = ({ postDetails }) => {
  return (
    <div>
      <h2>{postDetails.title}</h2>
      <p>{postDetails.author}</p>
      <p>{formatDate(postDetails.createdAt)}</p>
      <p>{postDetails.text}</p>
      <hr />
    </div>
  );
};

export default PostItem;