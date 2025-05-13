import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";
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

const RegisterForm = () => {
  const { register, errors, clearErrors } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    clearErrors();
  }, []);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      await register(formData);
      navigate('/');
    } catch (error) {
      console.error('Registration error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleRegister}>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" id="username" value={formData.username} onChange={handleOnChange} />
      <ErrorText>{errors?.find(error => error.path === 'username')?.msg}</ErrorText>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" value={formData.email} onChange={handleOnChange} />
      <ErrorText>{errors?.find(error => error.path === 'email')?.msg}</ErrorText>
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" value={FormData.password} onChange={handleOnChange} />
      <ErrorText>{errors?.find(error => error.path === 'password')?.msg}</ErrorText>
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input type="password" name="confirmPassword" id="confirmPassword" value={FormData.confirmPassword} onChange={handleOnChange} />
      <ErrorText>{errors?.find(error => error.path === 'confirmPassword')?.msg}</ErrorText>
      <ErrorText>{errors?.find(error => error.path === 'form')?.msg}</ErrorText>
      <p>Already have an account? <Link to={'/login'}>Login</Link></p>
      <button type="submit" disabled={loading}>{loading ? 'Processing...' : 'Register'}</button>
    </Form>
  );
}

export default RegisterForm;
