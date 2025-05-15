import { Link } from "react-router-dom";
import styled from "styled-components";
import { User } from 'lucide-react';

const Card = styled.article`
  padding-bottom: 1rem;
  color: #111827;

  & strong {
    font-size: 1.5rem;
  }

  & a {
    color: #6B7280;
  }

  @media (max-width: 450px) {
    strong {
      font-size: 1rem;
    }
  }
`

const PostText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-width: 65ch;
  width: 100%;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`


const PostCard = ({ post }) => {
  return (
    <Card>
      <strong>{post.title}</strong>
      <Info>
        <User size={20} color="#3B82F6" />
        {post.author.username}
      </Info>
      <PostText>{post.text}</PostText>
      <Link to={`/posts/${post.id}`}>Read more...</Link>
      <hr />
    </Card>
  );
}

export default PostCard;