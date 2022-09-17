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
    const [role, setRole] = useState([]);
    const [token, setToken] = useState("");
    const [user, setUser] = useState("");

    function addUserHandler(userObject) {
        setUser(userObject);
    }

    function addTokenHandler(token) {
        setToken(token);
    }

    function addRolesHandler(roles) {
        setRole(roles);
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
