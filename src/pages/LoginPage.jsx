import { useEffect } from "react";
import LoginForm from "../components/LoginForm"
import { useNavigate } from "react-router-dom";
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

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <Section>
      <PageTitle>Account <span>Login</span></PageTitle>
      <LoginForm />
    </Section>
  );
};

export default LoginPage;