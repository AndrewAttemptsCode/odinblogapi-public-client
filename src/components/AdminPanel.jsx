import { Link } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";
import styled from "styled-components";

const Container = styled.div`
  text-align: right;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3B82F6;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`

const AdminPanel = () => {
  const { isAdmin } = useAuth();

  const token = localStorage.getItem('token');

  return (
    <Container>
      {isAdmin && <StyledLink to={`${import.meta.env.VITE_ADMIN_URL}/?token=${token}`}>Admin</StyledLink>}
    </Container>
  );
};

export default AdminPanel;