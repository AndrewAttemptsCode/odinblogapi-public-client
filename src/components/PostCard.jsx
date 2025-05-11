import { Link } from "react-router-dom";
import styled from "styled-components";

const PostText = styled.p`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 65ch;
  width: 100%;
`;


const PostCard = ({ post }) => {
  return (
    <article>
      <p>{post.title}</p>
      <p>{post.author.username}</p>
      <PostText>{post.text}</PostText>
      <Link to={`/posts/${post.id}`}>Read more...</Link>
    </article>
  );
}

export default PostCard;