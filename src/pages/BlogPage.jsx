import styled from "styled-components";
import PostList from "../components/PostList";

const TitleSection = styled.section`
  display: flex;
  justify-content: center;
`
const PostListSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`

const PageTitle = styled.h1`
  color: #3B82F6;
  font-size: 3rem;
  
  & span {
    color: #111827;
  }
`

const BlogPage = () => {
  return (
    <section>
      <TitleSection>
      <PageTitle>Blog <span>Posts</span></PageTitle>
      </TitleSection>
      <PostListSection>
        <PostList />
      </PostListSection>
    </section>
  )
}

export default BlogPage;