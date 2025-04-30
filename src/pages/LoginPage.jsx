import { useEffect } from "react";
import LoginForm from "../components/LoginForm"
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Account Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;