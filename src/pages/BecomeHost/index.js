import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import AuthContext from "../../auth/AuthProvider";
import RegForm from "../../components/REG_FORMS/index";

export default function BecomeHost() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const [baseForm, setBaseForm] = useState({ status: null });

    const setUser = (data) => {
        console.log(data);
        setBaseForm(data);
        auth.setUserType(data.status);
        auth.setAuthentification(true);
    }


    useEffect(() => {
        if (auth.isAuthorized) {
            navigate("/dashboard");
        }
    }, [auth.isAuthorized, navigate]);

    return (
        <div className="grow bg-hacky-100 flex items-center justify-center flex-col">
            <RegForm onFormFilled={setUser} />
        </div>
    );
}