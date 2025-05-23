import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 500;
  color: #111827;

  & p {
    font-weight: 400;

    @media (max-width: 450px) {
      display: none;
    }
  }

  @media (max-width: 450px) {
    font-size: 1rem;
    gap: 5px;
  }
`

const Button = styled.button`
  padding: 8px 16px;
  background-color: #3B82F6;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 450px) {
    padding: 4px 8px;
  }
`

const AuthButton = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <Container>
      <p>{user && user.username}</p>

      {user ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <Button onClick={() => navigate('/login')}>Login</Button>
      )}
    </Container>
  );
};

export default AuthButton;
