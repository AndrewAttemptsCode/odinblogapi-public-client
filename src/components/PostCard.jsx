import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <article>
      <p>{post.title}</p>
      <p>{post.author.username}</p>
      <p>{post.text}</p>
      <Link to={`/posts/${post.id}`}>Read more...</Link>
    </article>
  );
}

export default PostCard;