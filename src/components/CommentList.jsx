import CommentItem from "./CommentItem";

const CommentList = ({ postComments }) => {
  return (
    <section>
      {postComments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </section>
  );
};

export default CommentList;