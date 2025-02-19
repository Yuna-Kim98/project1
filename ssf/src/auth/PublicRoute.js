import React, { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext.js";

const PublicRoute = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    if (auth.isLoggedIn) {
        alert("접근할 수 없는 페이지 입니다.");
    }

    return auth.isLoggedIn ? <Outlet /> : <Navigate to="/admin/login" />;
}

export default PublicRoute;