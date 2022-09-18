import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";

export default function RequireAuth({ allowedRoles }) {
    const authContext = useContext(AuthContext);
    const location = useLocation();

    return allowedRoles?.includes(authContext?.role) ? (
        <Outlet />
    ) : authContext?.user ? (
        <Navigate to="/unauthorized" state={{ from: location }} replace />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
}
