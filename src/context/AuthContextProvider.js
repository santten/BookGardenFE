import { useState, useEffect } from 'react';
import AuthContext from './AuthContext';

const AuthContextProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")); // Ensure you parse the user data
  const bool = user ? true : false;
  const [isAuthenticated, setIsAuthenticated] = useState(bool);
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    if (bool) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  }, [bool, user]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
