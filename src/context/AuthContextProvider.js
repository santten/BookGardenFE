import { useState } from 'react'
import AuthContext from './AuthContext'

const AuthContextProvider = ({ children }) => {
    const user = localStorage.getItem("userId")
    const bool = user ? true : false
    const [isAuthenticated, setIsAuthenticated] = useState(bool);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider