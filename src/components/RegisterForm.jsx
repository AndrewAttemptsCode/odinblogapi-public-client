import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
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
  };

  return (
    <form onSubmit={handleRegister}>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" id="username" value={formData.username} onChange={handleOnChange} />
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" value={formData.email} onChange={handleOnChange} />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" value={FormData.password} onChange={handleOnChange} />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input type="password" name="confirmPassword" id="confirmPassword" value={FormData.confirmPassword} onChange={handleOnChange} />
      <p>Already have an account? <Link to={'/login'}>Login</Link></p>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
