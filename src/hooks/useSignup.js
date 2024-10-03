import { useState } from 'react';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const signup = async (object) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch('http://localhost:4000/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(object),
    });

    const user = await response.json();

    if (!response.ok) {
      console.log(user.error);
      setError(user.error);
      setIsLoading(false);
      return error;
    }

    localStorage.setItem('token', JSON.stringify(user.token));
    localStorage.setItem('userId', JSON.stringify(user.userId));
    localStorage.setItem('email', JSON.stringify(user.email));
    setIsLoading(false);
  };

  return { signup, isLoading, error };
};
