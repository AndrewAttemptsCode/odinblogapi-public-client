import styled from "styled-components";
import { formatDate, formatTime } from "../utils";
import { CalendarDays, Clock7, User } from "lucide-react";

const Item = styled.div`
  color: #111827;

  & p {
    white-space: pre-wrap;
  }
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  & div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  @media (max-width: 450px) {
    flex-direction: column;
  }
`

const Hr = styled.hr`
  margin: 1rem 0;
`

const CommentItem = ({ comment }) => {
  return (
    <Item>
      <Info>
        <div>
          <User size={20} color="#3B82F6" />
          <strong>{comment.author.username}</strong>
        </div>
        <div>
          <Clock7 size={20} color="#3B82F6" />
          {formatTime(comment.createdAt)}
          <CalendarDays size={20} color="#3B82F6" />
          {formatDate(comment.createdAt)}
        </div>
      </Info>
      <p>{comment.text}</p>
      <Hr />
    </Item>
  );
};

export default CommentItem;