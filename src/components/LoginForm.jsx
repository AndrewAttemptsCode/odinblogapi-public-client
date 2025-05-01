import { useEffect, useState } from "react";
import { useAuth } from "../contexts/useAuth";
import { useNavigate, Link } from "react-router-dom";

const LoginForm = () => {
  const { login, errors, clearErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    clearErrors();
  }, []);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await login(formData); 
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" id="username" value={formData.username} onChange={handleOnChange} />
      <p>{errors?.find(error => error.path === 'username')?.msg}</p>
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" value={formData.password} onChange={handleOnChange} />
      <p>{errors?.find(error => error.path === 'password')?.msg}</p>
      <p>{errors?.find(error => error.path === 'form')?.msg}</p>
      <p>Need an account? <Link to={'/register'}>Register</Link></p>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;