import { useEffect } from "react";
import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Register an Account</h1>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
