import { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { setIsAuthenticated } = useContext(AuthContext)
  const apiurl = process.env.REACT_APP_API_URL

  const login = async (object) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${apiurl}/api/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(object),
    });

    const user = await response.json();

    if (!response.ok) {
      setError(user.error);
      setIsLoading(false);
      return user.error;
    }

    localStorage.setItem('token', JSON.stringify(user.token));
    localStorage.setItem('email', JSON.stringify(user.email));
    localStorage.setItem('userId', JSON.stringify(user.userId));
    setIsAuthenticated(true)
    setIsLoading(false);
  };

  return { login, isLoading, error };
};