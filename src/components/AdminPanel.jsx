import { Link } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

const AdminPanel = () => {
  const { isAdmin } = useAuth();

  const token = localStorage.getItem('token');

  return (
    <div>
      {isAdmin && <Link to={`http://localhost:5174/?token=${token}`}>Admin Panel</Link>}
    </div>
  );
};

export default AdminPanel;