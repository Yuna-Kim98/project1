import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext.js";

const PrivateRoute = () => {
    const auth = useContext(AuthContext);

    return auth.isLoggedIn ? <Outlet /> : <Navigate to="/admin/login" />;
}

export default PrivateRoute;