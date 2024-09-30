import { useState } from 'react';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const login = async (object) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch('http://localhost:4000/api/users/login', {
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

    localStorage.setItem('user', JSON.stringify(user));
    setIsLoading(false);
  };

  return { login, isLoading, error };
};