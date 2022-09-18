import { useEffect } from "react";
import { createContext, useState } from "react";

const AuthContext = createContext({
    role: "",
    token: "",
    user: "",
    addUser: (user) => {},
    addToken: (token) => {},
    addRole: (roles) => {},
});

export const AuthProvider = ({ children }) => {
    const [role, setRole] = useState(sessionStorage.getItem("role") || "");
    const [token, setToken] = useState(sessionStorage.getItem("token") || "");
    const [user, setUser] = useState(sessionStorage.getItem("user") || "");

    function addUserHandler(userObject) {
        setUser(userObject);
        sessionStorage.setItem("user", userObject);
    }

    function addTokenHandler(token) {
        setToken(token);
        sessionStorage.setItem("token", token);
    }

    function addRolesHandler(roles) {
        setRole(roles);
        sessionStorage.setItem("role", roles);
    }

    const context = {
        role: role,
        token: token,
        user: user,
        addUser: addUserHandler,
        addToken: addTokenHandler,
        addRole: addRolesHandler,
    };
    return (
        <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    );
};

export default AuthContext;
