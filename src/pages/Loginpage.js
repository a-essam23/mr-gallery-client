import { useState } from "react";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginForm } from "../components";
import useAuth from "../hooks/useAuth";

export default function Loginpage() {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    return (
        <div className="w-2/4 h-screen m-auto top-2/4 flex justify-center items-center">
            <LoginForm />
        </div>
    );
}
