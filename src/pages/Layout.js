import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../components/Footer";

export default function Layout () {
    return (
        <>
            <Header />
            <main className="min-h-screen flex flex-col w-full">
                <Outlet />
                <Footer className="absolute left-0 right-0 bottom-0" />
            </main>
        </>
    )
}