import React, { useContext, useEffect } from "react";
import AuthContext from "../../auth/AuthProvider";
import { useNavigate } from "react-router-dom";


export default function LoginHost() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (auth.isAuthorized) {
            if (auth.userType === "host") {
                navigate("/dashboard", { replace: true });
            } else {
                navigate("/guest-list", { replace: true });
            }
        }
    });
    return (
        <div className="min-h-screen flex items-center justify-center bg-hacky-100">
            <button className="bg-white rounded-xl p-3" onClick={() => {
                auth.setUerType("host");
                auth.setAuthentification(true);
            }}>Login as Host</button>
        </div>
    );
}