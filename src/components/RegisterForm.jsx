import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

const RegisterForm = () => {
  const { register, errors } = useAuth();
  const navigate = useNavigate();

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
      await register(formData);
      navigate('/');
    } catch (error) {
      console.error('Registration error', error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" id="username" value={formData.username} onChange={handleOnChange} />
      <p>{errors?.find(error => error.path === 'username')?.msg}</p>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" value={formData.email} onChange={handleOnChange} />
      <p>{errors?.find(error => error.path === 'email')?.msg}</p>
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" value={FormData.password} onChange={handleOnChange} />
      <p>{errors?.find(error => error.path === 'password')?.msg}</p>
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input type="password" name="confirmPassword" id="confirmPassword" value={FormData.confirmPassword} onChange={handleOnChange} />
      <p>{errors?.find(error => error.path === 'confirmPassword')?.msg}</p>
      <p>Already have an account? <Link to={'/login'}>Login</Link></p>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
