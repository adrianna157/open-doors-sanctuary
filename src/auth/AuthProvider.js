import { createContext, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [isAuthorized, setAuthentification] = useState(false);
    const [userType, setUserType] = useState("");
    const value = {
        isAuthorized,
        setAuthentification,
        userType,
        setUserType
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
export { AuthProvider };