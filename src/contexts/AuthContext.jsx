import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      setUser(JSON.parse(storedUser));
    }

  }, []);

  const login = async (userDetails) => {
    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }
        if (data.message) {
          setErrors([{ msg: data.message, path: 'form' }]);
        }
        return Promise.reject();
      }

      if (response.ok) {
        setUser(data.user);
        setErrors(null);
        localStorage.setItem('token', data.token);

        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
        }
        return Promise.resolve();
      }
      
    } catch (error) {
      console.error('Login Error:', error);
      setErrors([{ msg: 'Internal server error', path: 'form' }]);
      return Promise.reject();
    }
  }

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  // const register = (userDetails) => {
  //   // do later
  // }

  const value = {
    user,
    login,
    logout,
    errors,
    // register,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
