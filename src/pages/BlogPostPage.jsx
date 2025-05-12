import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostItem from "../components/PostItem";
import CommentList from "../components/CommentList";
import CreateComment from "../components/CreateComment";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const PageTitle = styled.h1`
  color: #3B82F6;
  font-size: 3rem;
  
  & span {
    color: #111827;
  }

  @media (max-width: 450px) {
    font-size: 2rem;
  }
`

const BlogPostPage = () => {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [postComments, setPostComments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPost = useCallback(async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_DATABASE_URL}/posts/${postId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        const error = new Error('Failed to fetch post from server.');
        error.status = response.status;
        error.statusText = response.statusText;
        throw error;
      }

      if (!data.post) {
        const error = new Error('The requested blog post could not be found.');
        error.status = 404;
        error.statusText = 'Post Not Found';
        throw error;
      }

      setPostDetails({
        author: data.post.author.username,
        title: data.post.title,
        text: data.post.text,
        createdAt: data.post.createdAt,
      });

      setPostComments(data.post.comments);
    } catch (error) {
      if (error.message === 'Failed to fetch') {
        setError({
          status: 503,
          statusText: 'Service Unavailable',
          message: 'Could not connect to the server, please try again later.',
        });
      } else {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  }, [postId]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    throw error;
  }

  return (
    <Section>
      <PageTitle>Blog <span>Post</span></PageTitle>
      <PostItem postDetails={postDetails} />
      <CreateComment postId={postId} refreshComments={fetchPost} />
      <CommentList postComments={postComments} />
    </Section>
  );
};

export default BlogPostPage;
