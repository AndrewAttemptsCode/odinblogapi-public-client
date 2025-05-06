import { Link } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

const AdminPanel = () => {
const { isAdmin } = useAuth();

  return (
    <div>
      {isAdmin && <Link to={'http://localhost:5174'}>Admin Panel</Link>}
    </div>
  );
};

export default AdminPanel;