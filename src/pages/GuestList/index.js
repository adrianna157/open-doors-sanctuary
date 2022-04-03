import useAuthRequired from "../../hooks/authRequired";

export default function GuestList() {
    useAuthRequired();
    return (
        <div className="grow bg-hacky-50 flex justify-center items-center">Guest List</div>
    );
}