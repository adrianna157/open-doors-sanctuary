import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../auth/AuthProvider";

export default function BecomeHost() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.isAuthorized) {
            navigate("/dashboard");
        }
    }, [auth.isAuthorized, navigate]);

    return (
        <div className="min-h-screen bg-hacky-50 flex items-center justify-center flex-col">
            <h1 className="text-white text-5xl mb-4">Create Host Account</h1>
            <button
                className="bg-white rounded-lg p-3"
                onClick={() => {
                    auth.setUerType("guest");
                    auth.setAuthentification(true);
                }}
            >
                Log In
            </button>
        </div>
    );
}