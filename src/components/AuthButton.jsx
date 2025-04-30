import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

const AuthButton = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <div>
      {user && user.username}

      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={() => navigate('/login')}>Login</button>
      )}
    </div>
  );
};

export default AuthButton;
