import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../auth/AuthProvider";

const useAuthRequired = () => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    useEffect(() => {
        if (!auth.isAuthorized) {
            navigate("/");
        }
    }, [auth.isAuthorized, navigate]);
}

export default useAuthRequired;