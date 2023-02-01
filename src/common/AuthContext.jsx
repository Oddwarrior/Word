import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const initialToken = (localStorage.getItem('token') != null) ? JSON.parse(localStorage.getItem('token')) : null;
    const initialUser = (localStorage.getItem('user') != null) ? JSON.parse(localStorage.getItem('user')) : null;

    const [token, setToken] = useState(initialToken)
    const [user, setUser] = useState(initialUser);

    const login = (token, user) => {
        setToken(token);
        setUser(user);
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(user));
    }

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
    }

    const updateUser = (words) => {
        setUser({ ...user, words: words });
        console.log("updateing user state", words);
        localStorage.setItem('user', JSON.stringify(user));
    }

    return (
        <AuthContext.Provider value={{ token, user, login, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    )

}
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;