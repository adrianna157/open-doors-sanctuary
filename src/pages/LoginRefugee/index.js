import React, { useContext, useEffect } from "react";
import AuthContext from "../../auth/AuthProvider";
import { useNavigate } from "react-router-dom";


export default function LoginRefugee() {
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
    }, [auth.isAuthorized, navigate, auth.userType]);
    return (
        <div className="min-h-screen flex items-center justify-center bg-hacky-100">
            <button className="bg-white rounded-xl p-3" onClick={() => {
                auth.setUerType("guest");
                auth.setAuthentification(true);
            }}>Login as Refugee</button>
        </div>
    );
}