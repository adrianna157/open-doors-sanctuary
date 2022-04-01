import React, { useContext } from "react";
import AuthContext from "../../auth/AuthProvider";
import { useNavigate } from "react-router-dom";


export default function LoginRefugee() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    if (auth.isAuthorized) {
        if (auth.userType === "host") {
            navigate("/guest-list", { replace: true });
        } else {
            navigate("/dashboard", { replace: true });
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-hacky-100">
            <button className="bg-white rounded-xl p-3" onClick={() => {
                auth.setUerType("guest");
                auth.setAuthentification(true);
            }}>Login as Refugee</button>
        </div>
    );
}