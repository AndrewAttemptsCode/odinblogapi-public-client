import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.article`
  padding-bottom: 1rem;

`

const PostText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-width: 65ch;
  width: 100%;
`;


const PostCard = ({ post }) => {
  return (
    <Card>
      <p>{post.title}</p>
      <p>{post.author.username}</p>
      <PostText>{post.text}</PostText>
      <Link to={`/posts/${post.id}`}>Read more...</Link>
      <hr />
    </Card>
  );
}

export default PostCard;