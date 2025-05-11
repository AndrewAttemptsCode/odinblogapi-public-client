import { Link } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";
import styled from "styled-components";

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
    <div>
      {isAdmin && <StyledLink to={`${import.meta.env.VITE_ADMIN_URL}/?token=${token}`}>Admin Panel</StyledLink>}
    </div>
  );
};

export default AdminPanel;