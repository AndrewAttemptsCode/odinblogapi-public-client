import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostItem from "../components/PostItem";
import CommentList from "../components/CommentList";

const BlogPostPage = () => {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [postComments, setPostComments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:8080/posts/${postId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
  
        const data = await response.json();
  
        if (!response.ok || !data.post) {
          throw new Error('Post could not be found');
        }
  
        setPostDetails({
          author: data.post.author.username,
          title: data.post.title,
          text: data.post.text,
          createdAt: data.post.createdAt,
        });
  
        setPostComments(data.post.comments);
      } catch (error) {
        console.error(error);
        if (error.message === 'Failed to fetch') {
          setError('Could not connect to the server, please try again later.');
        } else {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [postId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section>
      <h1>Blog Post</h1>
      <PostItem postDetails={postDetails} />
      <CommentList postComments={postComments} />
    </section>
  );
}

export default BlogPostPage;
