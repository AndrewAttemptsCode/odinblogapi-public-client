const PostCard = ({ post }) => {
  return (
    <article>
      <p>{post.title}</p>
      <p>{post.author.username}</p>
    </article>
  );
}

export default PostCard;