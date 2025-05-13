import { useEffect, useState } from "react";
import { useAuth } from "../contexts/useAuth";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  color: #111827;

  & input {
    padding: 5px;
  }

  & button {
    border: none;
    border-radius: 5px;
    padding: 8px;
    background-color: #3B82F6;
    color: #F9FAFB;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`

const ErrorText = styled.p`
  color: red;
`

const LoginForm = () => {
  const { login, errors, clearErrors } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      await login(formData); 
      navigate('/');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" id="username" value={formData.username} onChange={handleOnChange} />
      <ErrorText>{errors?.find(error => error.path === 'username')?.msg}</ErrorText>
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" value={formData.password} onChange={handleOnChange} />
      <ErrorText>{errors?.find(error => error.path === 'password')?.msg}</ErrorText>
      <ErrorText>{errors?.find(error => error.path === 'form')?.msg}</ErrorText>
      <p>Need an account? <Link to={'/register'}>Register</Link></p>
      <button type="submit" disabled={loading}>{loading ? 'Processing...' : 'Login'}</button>
    </Form>
  );
};

export default LoginForm;