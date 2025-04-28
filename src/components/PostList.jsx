import { useEffect, useState } from "react";
import PostCard from "./PostCard";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:8080/posts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
  
        const data = await response.json();
        setPosts(data.posts);

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }  
    fetchPosts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
    {posts.map(post => (
      <PostCard key={post.id} post={post} />
    ))}
    </div>
  );
}

export default PostList;