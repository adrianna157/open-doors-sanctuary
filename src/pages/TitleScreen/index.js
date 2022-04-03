import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../auth/AuthProvider";
import door from "../../assets/doors-image.jpg";

export default function TitleScreen () {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (auth.isAuthorized){
            if (auth.userType === "host") {
                navigate("/dashboard");
            } else {
                navigate("/guest-list");
            }
        }
    }, [auth.isAuthorized, navigate, auth.userType]);
    return (
        <>
            <section className={`bg-hacky-50 md:h-auto h-screen`}>
                <div className="container h-full mx-auto">
                    <div className="flex items-center md:items-end justify-around h-full md:h-auto">
                        <img width="480" className="max-w-screen-sm translate-y-1/4 rounded-3xl border-2 hidden md:block border-black" alt="" src={door} />
                        <div className="inline text-center md:mb-28">
                            <h3 className="text-4xl text-white mb-4">Help house Ukrainian refugees</h3>
                            <Link to="/about" className="bg-white text-hacky-50 text-2xl p-4 inline-block rounded-3xl">Learn more</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section></section>
        </>
    );
}