import { createContext, useState, ReactNode } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children } : {children: ReactNode}) => {

    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;