import styled from "styled-components";
import CommentItem from "./CommentItem";
import { MessageSquareText } from "lucide-react";

const Section = styled.section`
  width: 100%;
  max-width: 75ch;
  margin-top: 1rem;
  color: #111827;
`

const TitleInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  & div {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    font-weight: bold;
    color: #3B82F6;
  }
`

const CommentList = ({ postComments }) => {
  return (
    <Section>
      <TitleInfo>
        <h2>Comments</h2>
        <div>
          <MessageSquareText size={20} color="#111827"/>
          {postComments.length}
        </div>
      </TitleInfo>
      {postComments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </Section>
  );
};

export default CommentList;