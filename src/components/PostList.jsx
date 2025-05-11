import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-rows: auto;
  max-width: 65ch;
  width: 100%;
`


const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_DATABASE_URL}/posts`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          const error = new Error('Failed to fetch posts from the server.');
          error.status = response.status;
          error.statusText = response.statusText;
          throw error;
        }
  
        const data = await response.json();

        const filterPublished = data.posts.filter(post => post.published === true);

        setPosts(filterPublished);

      } catch (error) {
        if (error.message === 'Failed to fetch') {
          setError({
            status: 503,
            statusText: 'Service Unavailable.',
            message: 'Could not connect to the server, please try again later.',
          })
        } else {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    }  
    fetchPosts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    throw error;
  }

  return (
    <Container>
    {posts.map(post => (
      <PostCard key={post.id} post={post} />
    ))}
    </Container>
  );
}

export default PostList;