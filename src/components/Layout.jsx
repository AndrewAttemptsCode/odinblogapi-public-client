import { Outlet } from "react-router-dom";
import styled from "styled-components";
import AuthButton from "./AuthButton";
import AdminPanel from "./AdminPanel";
import HeaderLogo from "./HeaderLogo";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas: 
    'header'
    'main';
  min-height: 100vh;
  min-height: 100dvh;
  background-color: #F9FAFB;
`

const Header = styled.div`
  grid-area: header;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;

  @media (max-width: 450px) {
    gap: 1rem;
  }
`

const Main = styled.div`
  grid-area: main;
  padding: 1rem;
`

const Layout = () => {
  return (
    <Container>
      <Header>
        <HeaderLogo />
        <AdminPanel />
        <AuthButton />
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Container>
  )
}

export default Layout;