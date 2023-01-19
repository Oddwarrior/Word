import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const initial = (localStorage.getItem('token') != null) ? localStorage.getItem('token') : null;
    const [user, setUser] = useState(initial);

    const login = (token) => {
        setUser(token);
        localStorage.setItem('token', token);
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;