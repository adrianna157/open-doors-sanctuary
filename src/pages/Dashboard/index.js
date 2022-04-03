import useAuthRequired from "../../hooks/authRequired"

export default function Dashboard () {
    useAuthRequired();
    return (
        <div className="min-h-screen flex items-center justify-center bg-hacky-50">
            Dashboard
        </div>
    )
}