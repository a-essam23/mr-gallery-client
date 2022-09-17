import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginForm } from "../components";
import AuthContext from "../context/AuthProvider";
import { loginPost } from "../services";

const Loginpage = () => {
    const [errMsg, setErrMsg] = useState("");
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/admin";

    useEffect(() => {
        setErrMsg("");
    }, []);
    const handleSubmit = async (data) => {
        loginPost(data)
            .then((result) => {
                const accessToken = result?.token;
                const role = result?.user.role;
                const user = result?.user.username;
                authContext.addUser(user);
                authContext.addToken(accessToken);
                authContext.addRole(role);
                navigate(from, { replace: true });
            })
            .catch((err) => {
                console.log(err);
                return setErrMsg(err);
            });
    };
    return (
        <div className="w-2/4 h-screen m-auto top-2/4 flex justify-center items-center">
            <LoginForm
                errMsg={errMsg}
                onFinish={(data) => {
                    handleSubmit(data);
                }}
            />
        </div>
    );
};
export default Loginpage;
