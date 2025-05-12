import styled from "styled-components";
import { formatDate } from "../utils";
import { CalendarDays, User } from "lucide-react";

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 1rem;
`

const Item = styled.section`
  color: #111827;
  max-width: 75ch;
  width: 100%;

  & h2 {
    font-size: 2rem;
  }

  & p {
    white-space: pre-wrap;
  }
`

const PostItem = ({ postDetails }) => {
  return (
    <Item>
      <h2>{postDetails.title}</h2>
      <Info>
        <User size={20} color="#3B82F6" />
        {postDetails.author}
        <CalendarDays size={20} color="#3B82F6" />
        {formatDate(postDetails.createdAt)}
      </Info>
      <p>{postDetails.text}</p>
      <hr />
    </Item>
  );
};

export default PostItem;