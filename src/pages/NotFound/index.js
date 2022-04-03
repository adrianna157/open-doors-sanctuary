import { useNavigate } from "react-router-dom";

export default function NotFound () {
    const navigate = useNavigate();
    return (
        <div className="h-screen bg-hacky-50 flex items-center justify-center flex-col">
            <h1 className="text-white text-5xl mb-4">Not Found Page</h1>
            <button
                className="text-white bg-black p-4 duration-300 rounded-lg hover:bg-white hover:text-black"
                onClick={() => navigate("/")}
            >
                Go to Main Page
            </button>
        </div>
    );
}