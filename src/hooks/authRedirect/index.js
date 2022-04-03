import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../auth/AuthProvider";

const useAuthRedirect = (avalibleForGuest) => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    useEffect(() => {
        if (!auth.isAuthorized && !avalibleForGuest) {
            navigate("/");
        } else {
            if (auth.userType === "host") {
                navigate("/dashboard");
            } else {
                navigate("/guest-list");
            }
        }
    }, [auth.isAuthorized, navigate, auth.userType, avalibleForGuest]);
}

export default useAuthRedirect;